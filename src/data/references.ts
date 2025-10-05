export type ReferenceItem = {
  id: string; // unique id per reference
  topicId: string;
  standardId: "pmbok" | "prince2" | "iso";
  title: string; // short label for reference
  bookPath: string; // path under /public, e.g., /Books/PMBOK7.pdf
  page: number; // 1-based page number
  description?: string;
};

// Seed dataset. Update page numbers and file names to match files in /public/Books
export const REFERENCES: ReferenceItem[] = [
  // Stakeholder Engagement
  {
    id: "ref-pmbok-stakeholder",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "PMBOK 7 - Stakeholder Performance Domain",
    bookPath: "/Books/PMBOK7.pdf",
    page: 35,
    description: "Overview and practices for engaging stakeholders across the lifecycle.",
  },
  {
    id: "ref-prince2-stakeholder",
    topicId: "stakeholder-engagement",
    standardId: "prince2",
    title: "PRINCE2 - Organization Theme",
    bookPath: "/Books/PRINCE2.pdf",
    page: 57,
    description: "Roles, responsibilities, and communication management strategy.",
  },
  {
    id: "ref-iso-stakeholder",
    topicId: "stakeholder-engagement",
    standardId: "iso",
    title: "ISO 21500 - Stakeholder Management",
    bookPath: "/Books/ISO21500.pdf",
    page: 22,
    description: "Systematic identification, analysis, and engagement guidance.",
  },

  // Risk Management
  {
    id: "ref-pmbok-risk",
    topicId: "risk-management",
    standardId: "pmbok",
    title: "PMBOK 7 - Uncertainty Domain",
    bookPath: "/Books/PMBOK7.pdf",
    page: 49,
  },
  {
    id: "ref-prince2-risk",
    topicId: "risk-management",
    standardId: "prince2",
    title: "PRINCE2 - Risk Theme",
    bookPath: "/Books/PRINCE2.pdf",
    page: 89,
  },
  {
    id: "ref-iso-risk",
    topicId: "risk-management",
    standardId: "iso",
    title: "ISO 21500 - Risk Management Process",
    bookPath: "/Books/ISO21500.pdf",
    page: 40,
  },

  // Quality Management
  {
    id: "ref-pmbok-quality",
    topicId: "quality-management",
    standardId: "pmbok",
    title: "PMBOK 7 - Project Work & Quality",
    bookPath: "/Books/PMBOK7.pdf",
    page: 62,
  },
  {
    id: "ref-prince2-quality",
    topicId: "quality-management",
    standardId: "prince2",
    title: "PRINCE2 - Quality Theme",
    bookPath: "/Books/PRINCE2.pdf",
    page: 105,
  },
  {
    id: "ref-iso-quality",
    topicId: "quality-management",
    standardId: "iso",
    title: "ISO 21500 - Quality Management",
    bookPath: "/Books/ISO21500.pdf",
    page: 55,
  },

  // Change Management
  {
    id: "ref-pmbok-change",
    topicId: "change-management",
    standardId: "pmbok",
    title: "PMBOK 7 - Change in Project Work",
    bookPath: "/Books/PMBOK7.pdf",
    page: 74,
  },
  {
    id: "ref-prince2-change",
    topicId: "change-management",
    standardId: "prince2",
    title: "PRINCE2 - Change Theme",
    bookPath: "/Books/PRINCE2.pdf",
    page: 130,
  },
  {
    id: "ref-iso-change",
    topicId: "change-management",
    standardId: "iso",
    title: "ISO 21500 - Integrated Change Control",
    bookPath: "/Books/ISO21500.pdf",
    page: 68,
  },

  // Governance
  {
    id: "ref-pmbok-governance",
    topicId: "governance",
    standardId: "pmbok",
    title: "PMBOK 7 - Governance Principles",
    bookPath: "/Books/PMBOK7.pdf",
    page: 90,
  },
  {
    id: "ref-prince2-governance",
    topicId: "governance",
    standardId: "prince2",
    title: "PRINCE2 - Project Board & Stages",
    bookPath: "/Books/PRINCE2.pdf",
    page: 150,
  },
  {
    id: "ref-iso-governance",
    topicId: "governance",
    standardId: "iso",
    title: "ISO 21500 - Governance Framework",
    bookPath: "/Books/ISO21500.pdf",
    page: 80,
  },
];

export const getReferencesForTopic = (topicId: string, standardId?: "pmbok" | "prince2" | "iso") => {
  return REFERENCES.filter(r => r.topicId === topicId && (!standardId || r.standardId === standardId));
};

export const buildPdfUrl = (bookPath: string, page: number) => {
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  const normalizedBase = String(base).endsWith("/") ? String(base).slice(0, -1) : String(base);
  const normalizedPath = bookPath.startsWith("/") ? bookPath : `/${bookPath}`;
  return `${normalizedBase}${normalizedPath}#page=${page}`;
};

export const searchReferences = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return [] as ReferenceItem[];
  return REFERENCES.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.description?.toLowerCase().includes(q) ||
    r.topicId.toLowerCase().includes(q) ||
    r.standardId.toLowerCase().includes(q)
  );
};


