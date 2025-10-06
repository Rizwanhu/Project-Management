export type ReferenceItem = {
  id: string;
  topicId: string;
  standardId: "pmbok" | "prince2" | "iso" | "general";
  title: string;
  bookPath: string;
  page: number;
  description?: string;
  type: "book" | "url" | "academic" | "template" | "guide";
  category?: "core" | "supplementary" | "comparison" | "tool";
};

export const REFERENCES: ReferenceItem[] = [
  // ==================== CORE STANDARDS ====================
  {
    id: "core-pmbok7",
    topicId: "core-standards",
    standardId: "pmbok",
    title: "PMBOK Guide 7th Edition",
    bookPath: "/Books/PMBOK7.pdf",
    page: 1,
    description: "A Guide to the Project Management Body of Knowledge - Seventh Edition",
    type: "book",
    category: "core"
  },
  {
    id: "core-prince2-7",
    topicId: "core-standards",
    standardId: "prince2",
    title: "PRINCE2 7th Edition",
    bookPath: "/Books/PRINCE2.pdf",
    page: 1,
    description: "Managing Successful Projects with PRINCE2 - 7th Edition",
    type: "book",
    category: "core"
  },
  {
    id: "core-iso21502",
    topicId: "core-standards",
    standardId: "iso",
    title: "ISO 21502:2020",
    bookPath: "/Books/ISO21500.pdf",
    page: 1,
    description: "Project, programme and portfolio management - Guidance on project management",
    type: "book",
    category: "core"
  },

  // ==================== GOVERNANCE & LEADERSHIP ====================
  {
    id: "gov-pmbok-12",
    topicId: "governance-leadership",
    standardId: "pmbok",
    title: "PMBOK 7 - Organizational Governance Systems",
    bookPath: "/Books/PMBOK7.pdf",
    page: 12,
    description: "Governance system works alongside value delivery system for smooth workflows",
    type: "book",
    category: "core"
  },
  {
    id: "gov-pmbok-335",
    topicId: "governance-leadership",
    standardId: "pmbok",
    title: "PMBOK 7 - Governance Framework Definition",
    bookPath: "/Books/PMBOK7.pdf",
    page: 335,
    description: "Framework for directing and enabling organization through policies and practices",
    type: "book",
    category: "core"
  },
  {
    id: "gov-pmbok-52",
    topicId: "governance-leadership",
    standardId: "pmbok",
    title: "PMBOK 7 - Leadership Principles",
    bookPath: "/Books/PMBOK7.pdf",
    page: 52,
    description: "Leadership involves stewardship, resource management, and upholding values",
    type: "book",
    category: "core"
  },
  {
    id: "gov-prince2-336",
    topicId: "governance-leadership",
    standardId: "prince2",
    title: "PRINCE2 - Governance Layers & Objectives",
    bookPath: "/Books/PRINCE2.pdf",
    page: 336,
    description: "Governance outside project team setting objectives and tolerance levels",
    type: "book",
    category: "core"
  },
  {
    id: "gov-prince2-53",
    topicId: "governance-leadership",
    standardId: "prince2",
    title: "PRINCE2 - Four Governance Layers",
    bookPath: "/Books/PRINCE2.pdf",
    page: 53,
    description: "Findef's four governance layers with management by exception principle",
    type: "book",
    category: "core"
  },
  {
    id: "gov-prince2-340",
    topicId: "governance-leadership",
    standardId: "prince2",
    title: "PRINCE2 - Motivation & Collaboration",
    bookPath: "/Books/PRINCE2.pdf",
    page: 340,
    description: "Motivating people through collaboration and relationship management",
    type: "book",
    category: "core"
  },
  {
    id: "gov-iso-17",
    topicId: "governance-leadership",
    standardId: "iso",
    title: "ISO 21502 - Project Governance Framework",
    bookPath: "/Books/ISO21500.pdf",
    page: 17,
    description: "Governance principles, policies and frameworks for project direction",
    type: "book",
    category: "core"
  },
  {
    id: "gov-iso-39",
    topicId: "governance-leadership",
    standardId: "iso",
    title: "ISO 21502 - Team Performance & Leadership",
    bookPath: "/Books/ISO21500.pdf",
    page: 39,
    description: "Team performance optimization through feedback and collaborative working",
    type: "book",
    category: "core"
  },

  // Governance URLs and Resources
  {
    id: "gov-url-pmi-ethics",
    topicId: "governance-leadership",
    standardId: "pmbok",
    title: "PMI Code of Ethics",
    bookPath: "https://www.pmi.org/about/ethics/code",
    page: 0,
    description: "PMI Code of Ethics and Professional Conduct",
    type: "url",
    category: "supplementary"
  },
  {
    id: "gov-url-pmi-governance",
    topicId: "governance-leadership",
    standardId: "pmbok",
    title: "PMI Governance Systems Guide",
    bookPath: "https://www.pmi.org/learning/library/guidance-governance-project-management-7552",
    page: 0,
    description: "Guidance on governance systems in project management",
    type: "url",
    category: "guide"
  },
  {
    id: "gov-url-ansi-iso",
    topicId: "governance-leadership",
    standardId: "iso",
    title: "ANSI Blog on ISO 21502 Governance",
    bookPath: "https://blog.ansi.org/ansi/iso-21502-2020-project-management-guidance/",
    page: 0,
    description: "Overview of ISO 21502 project management guidance",
    type: "url",
    category: "supplementary"
  },
  {
    id: "gov-url-researchgate",
    topicId: "governance-leadership",
    standardId: "general",
    title: "ResearchGate - PRINCE2 & ISO 38500 Integration",
    bookPath: "https://www.researchgate.net/publication/261280710_Project_management_and_IT_governance_Integrating_PRINCE2_and_ISO_38500",
    page: 0,
    description: "Academic paper on integrating PRINCE2 and ISO 38500",
    type: "academic",
    category: "comparison"
  },
  {
    id: "gov-url-axelos",
    topicId: "governance-leadership",
    standardId: "prince2",
    title: "Axelos White Paper on PRINCE2 Governance",
    bookPath: "https://www.axelos.com/resource-hub/white-paper/prince2-and-governance",
    page: 0,
    description: "PRINCE2 and governance integration white paper",
    type: "url",
    category: "guide"
  },
  {
    id: "gov-url-open",
    topicId: "governance-leadership",
    standardId: "general",
    title: "Open University - Project Governance & PMO",
    bookPath: "https://www.open.edu/openlearn/money-business/project-governance-and-project-management-office-pmo/content-section-0",
    page: 0,
    description: "Educational content on project governance and PMO",
    type: "url",
    category: "guide"
  },
  {
    id: "gov-url-pqb",
    topicId: "governance-leadership",
    standardId: "iso",
    title: "PQB Web E-Learning on ISO 21502",
    bookPath: "https://www.pqbweb.eu/platform.php?if=113",
    page: 0,
    description: "E-learning platform for ISO 21502",
    type: "url",
    category: "supplementary"
  },

  // ==================== STAKEHOLDER ENGAGEMENT ====================
  {
    id: "stake-pmbok-58",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "PMBOK 7 - Stakeholder Engagement & Value",
    bookPath: "/Books/PMBOK7.pdf",
    page: 58,
    description: "Project teams serve stakeholders by engaging with them to advance value delivery",
    type: "book",
    category: "core"
  },
  {
    id: "stake-pmbok-105",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "PMBOK 7 - Stakeholder Engagement Strategies",
    bookPath: "/Books/PMBOK7.pdf",
    page: 105,
    description: "Implementing strategies and actions for productive stakeholder involvement",
    type: "book",
    category: "core"
  },
  {
    id: "stake-pmbok-107",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "PMBOK 7 - Collaborative Stakeholder Work",
    bookPath: "/Books/PMBOK7.pdf",
    page: 107,
    description: "Working collaboratively to elicit requirements and achieve outcomes",
    type: "book",
    category: "core"
  },
  {
    id: "stake-pmbok-345",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "PMBOK 7 - Stakeholder Assessment Matrix",
    bookPath: "/Books/PMBOK7.pdf",
    page: 345,
    description: "Matrix comparing current and desired stakeholder engagement levels",
    type: "book",
    category: "tool"
  },
  {
    id: "stake-prince2-214",
    topicId: "stakeholder-engagement",
    standardId: "prince2",
    title: "PRINCE2 - Data Analytics for Engagement",
    bookPath: "/Books/PRINCE2.pdf",
    page: 214,
    description: "Use of sentiment analysis for stakeholder engagement",
    type: "book",
    category: "core"
  },
  {
    id: "stake-iso-47",
    topicId: "stakeholder-engagement",
    standardId: "iso",
    title: "ISO 21502 - Stakeholder Engagement Purpose",
    bookPath: "/Books/ISO21500.pdf",
    page: 47,
    description: "Purpose of stakeholder engagement to address needs and concerns",
    type: "book",
    category: "core"
  },
  {
    id: "stake-iso-56",
    topicId: "stakeholder-engagement",
    standardId: "iso",
    title: "ISO 21502 - Stakeholder Processes",
    bookPath: "/Books/ISO21500.pdf",
    page: 56,
    description: "Stakeholder identification and engagement processes",
    type: "book",
    category: "core"
  },

  // Stakeholder URLs and Resources
  {
    id: "stake-url-onlinepm",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "Online PM Courses - Stakeholder Domain",
    bookPath: "https://onlinepmcourses.com/stakeholder-engagement-domain-what-does-a-project-leader-need-to-know/",
    page: 0,
    description: "What a project leader needs to know about stakeholder engagement",
    type: "url",
    category: "guide"
  },
  {
    id: "stake-url-projectengineer",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "Project Engineer - PMBOK Stakeholders",
    bookPath: "https://www.projectengineer.net/project-stakeholder-management-according-to-the-pmbok/",
    page: 0,
    description: "Project stakeholder management according to PMBOK",
    type: "url",
    category: "guide"
  },
  {
    id: "stake-url-pmi-stakeholder",
    topicId: "stakeholder-engagement",
    standardId: "pmbok",
    title: "PMI Stakeholder Management Library",
    bookPath: "https://www.pmi.org/learning/library/stakeholder-management-task-project-success-7736",
    page: 0,
    description: "Stakeholder management for project success",
    type: "url",
    category: "supplementary"
  },
  {
    id: "stake-url-knowledgetrain",
    topicId: "stakeholder-engagement",
    standardId: "prince2",
    title: "Knowledge Train - PRINCE2 vs PMBOK Stakeholders",
    bookPath: "https://www.knowledgetrain.co.uk/project-management/pmi/prince2-and-pmbok-guide-comparison",
    page: 0,
    description: "Comparison of stakeholder approaches between PRINCE2 and PMBOK",
    type: "url",
    category: "comparison"
  },
  {
    id: "stake-url-axelos-agile",
    topicId: "stakeholder-engagement",
    standardId: "prince2",
    title: "Axelos - PRINCE2 Agile Stakeholder Engagement",
    bookPath: "https://www.axelos.com/resource-hub/white-paper/prince2-agile-in-one-thousand-words",
    page: 0,
    description: "PRINCE2 Agile stakeholder engagement in one thousand words",
    type: "url",
    category: "guide"
  },
  {
    id: "stake-url-researchgate-iso",
    topicId: "stakeholder-engagement",
    standardId: "iso",
    title: "ResearchGate - ISO 21500 vs PMBOK Stakeholders",
    bookPath: "https://www.researchgate.net/publication/313252046_Comparison_and_analysis_of_PMBOK_2013_and_ISO_21500",
    page: 0,
    description: "Comparison and analysis of PMBOK 2013 and ISO 21500",
    type: "academic",
    category: "comparison"
  },
  {
    id: "stake-url-atlantis",
    topicId: "stakeholder-engagement",
    standardId: "iso",
    title: "Atlantis Press Comparison",
    bookPath: "https://www.atlantis-press.com/proceedings/senet-19/125925995",
    page: 0,
    description: "Academic comparison of project management standards",
    type: "academic",
    category: "comparison"
  },

  // ==================== BUSINESS CASE & BENEFITS MANAGEMENT ====================
  {
    id: "business-pmbok-58",
    topicId: "business-case-benefits",
    standardId: "pmbok",
    title: "PMBOK 7 - Focus on Value",
    bookPath: "/Books/PMBOK7.pdf",
    page: 58,
    description: "Projects exist to create financial and non-financial value",
    type: "book",
    category: "core"
  },
  {
    id: "business-pmbok-156",
    topicId: "business-case-benefits",
    standardId: "pmbok",
    title: "PMBOK 7 - Delivery of Value",
    bookPath: "/Books/PMBOK7.pdf",
    page: 156,
    description: "Value delivery as key outcome including benefits to stakeholders",
    type: "book",
    category: "core"
  },
  {
    id: "business-pmbok-10",
    topicId: "business-case-benefits",
    standardId: "pmbok",
    title: "PMBOK 7 - Value Delivery Components",
    bookPath: "/Books/PMBOK7.pdf",
    page: 10,
    description: "Portfolios, programs, projects working together to generate benefits",
    type: "book",
    category: "core"
  },
  {
    id: "business-prince2-39",
    topicId: "business-case-benefits",
    standardId: "prince2",
    title: "PRINCE2 - Continued Business Justification",
    bookPath: "/Books/PRINCE2.pdf",
    page: 39,
    description: "Ensure continued business justification throughout project",
    type: "book",
    category: "core"
  },
  {
    id: "business-prince2-73",
    topicId: "business-case-benefits",
    standardId: "prince2",
    title: "PRINCE2 - Business Case Purpose",
    bookPath: "/Books/PRINCE2.pdf",
    page: 73,
    description: "Purpose of business case practice and success criteria",
    type: "book",
    category: "core"
  },
  {
    id: "business-iso-18",
    topicId: "business-case-benefits",
    standardId: "iso",
    title: "ISO 21502 - Business Case Definition",
    bookPath: "/Books/ISO21500.pdf",
    page: 18,
    description: "Business case as key document justifying project need and benefits",
    type: "book",
    category: "core"
  },
  {
    id: "business-iso-43",
    topicId: "business-case-benefits",
    standardId: "iso",
    title: "ISO 21502 - Benefits Management",
    bookPath: "/Books/ISO21500.pdf",
    page: 43,
    description: "Benefit management to ensure expected benefits are defined and realized",
    type: "book",
    category: "core"
  },

  // Business Case URLs and Resources
  {
    id: "business-url-4square",
    topicId: "business-case-benefits",
    standardId: "pmbok",
    title: "4SquareViews - PMBOK Business Case",
    bookPath: "https://4squareviews.com/2017/10/14/6th-edition-pmbok-guide-project-business-case/",
    page: 0,
    description: "Analysis of business case in PMBOK guide",
    type: "url",
    category: "guide"
  },
  {
    id: "business-url-greycampus",
    topicId: "business-case-benefits",
    standardId: "pmbok",
    title: "GreyCampus - Project Business Documents",
    bookPath: "https://www.greycampus.com/opencampus/project-management-professional/project-business-documents",
    page: 0,
    description: "Project business documents overview",
    type: "url",
    category: "guide"
  },
  {
    id: "business-url-projex",
    topicId: "business-case-benefits",
    standardId: "prince2",
    title: "Projex Academy - PRINCE2 Business Case",
    bookPath: "https://www.projex.com/the-prince2-7-business-case-practice/",
    page: 0,
    description: "PRINCE2 7 business case practice",
    type: "url",
    category: "guide"
  },
  {
    id: "business-url-oreilly",
    topicId: "business-case-benefits",
    standardId: "prince2",
    title: "O'Reilly - PRINCE2 Template",
    bookPath: "https://www.oreilly.com/library/view/mastering-principles-and/9780134060880/app01.html",
    page: 0,
    description: "PRINCE2 templates and resources",
    type: "url",
    category: "template"
  },
  {
    id: "business-url-prince2wiki",
    topicId: "business-case-benefits",
    standardId: "prince2",
    title: "PRINCE2 Wiki - Business Case",
    bookPath: "https://prince2.wiki/management-products/business-case/",
    page: 0,
    description: "Detailed information about PRINCE2 business case",
    type: "url",
    category: "guide"
  },
  {
    id: "business-url-pqb",
    topicId: "business-case-benefits",
    standardId: "iso",
    title: "PQB Web - ISO 21502 Business Case",
    bookPath: "https://www.pqbweb.eu/platform.php?if=113",
    page: 0,
    description: "ISO 21502 business case guidance",
    type: "url",
    category: "guide"
  },

  // ==================== RISK & ISSUE MANAGEMENT ====================
  {
    id: "risk-pmbok-60",
    topicId: "risk-issues",
    standardId: "pmbok",
    title: "PMBOK 7 - Optimize Risk Responses",
    bookPath: "/Books/PMBOK7.pdf",
    page: 60,
    description: "Identify, analyze, and respond to uncertainties for positive outcomes",
    type: "book",
    category: "core"
  },
  {
    id: "risk-pmbok-172",
    topicId: "risk-issues",
    standardId: "pmbok",
    title: "PMBOK 7 - Uncertainty Performance Domain",
    bookPath: "/Books/PMBOK7.pdf",
    page: 172,
    description: "Risk includes both threats and opportunities impacting objectives",
    type: "book",
    category: "core"
  },
  {
    id: "risk-pmbok-174",
    topicId: "risk-issues",
    standardId: "pmbok",
    title: "PMBOK 7 - Risk Response Strategies",
    bookPath: "/Books/PMBOK7.pdf",
    page: 174,
    description: "Avoid, mitigate, transfer, accept for threats; exploit, enhance, share for opportunities",
    type: "book",
    category: "core"
  },
  {
    id: "risk-prince2-165",
    topicId: "risk-issues",
    standardId: "prince2",
    title: "PRINCE2 - Risk Practice Purpose",
    bookPath: "/Books/PRINCE2.pdf",
    page: 165,
    description: "Identify, assess, and control uncertainty to improve success",
    type: "book",
    category: "core"
  },
  {
    id: "risk-prince2-166",
    topicId: "risk-issues",
    standardId: "prince2",
    title: "PRINCE2 - Risk Assessment & Responses",
    bookPath: "/Books/PRINCE2.pdf",
    page: 166,
    description: "Risk assessment for probability and impact with response strategies",
    type: "book",
    category: "core"
  },
  {
    id: "risk-prince2-181",
    topicId: "risk-issues",
    standardId: "prince2",
    title: "PRINCE2 - Issues Practice Purpose",
    bookPath: "/Books/PRINCE2.pdf",
    page: 181,
    description: "Identify, assess, and resolve issues during project",
    type: "book",
    category: "core"
  },
  {
    id: "risk-iso-50",
    topicId: "risk-issues",
    standardId: "iso",
    title: "ISO 21502 - Risk Management Purpose",
    bookPath: "/Books/ISO21500.pdf",
    page: 50,
    description: "Increase likelihood of achieving objectives through risk management",
    type: "book",
    category: "core"
  },
  {
    id: "risk-iso-51",
    topicId: "risk-issues",
    standardId: "iso",
    title: "ISO 21502 - Risk Treatment Options",
    bookPath: "/Books/ISO21500.pdf",
    page: 51,
    description: "Risk treatment including avoid, reduce, transfer, or accept",
    type: "book",
    category: "core"
  },
  {
    id: "risk-iso-52",
    topicId: "risk-issues",
    standardId: "iso",
    title: "ISO 21502 - Issues Management",
    bookPath: "/Books/ISO21500.pdf",
    page: 52,
    description: "Identify and resolve issues preventing objective achievement",
    type: "book",
    category: "core"
  },

  // Risk Management URLs and Resources
  {
    id: "risk-url-projectrisk",
    topicId: "risk-issues",
    standardId: "pmbok",
    title: "Project Risk Coach - PMBOK Principles & Risk",
    bookPath: "https://projectriskcoach.com/pmbok-seventh-edition-principles-and-risk-management/",
    page: 0,
    description: "PMBOK seventh edition principles and risk management",
    type: "url",
    category: "guide"
  },
  {
    id: "risk-url-pmi-evm",
    topicId: "risk-issues",
    standardId: "pmbok",
    title: "PMI EVM Analysis",
    bookPath: "https://www.pmi.org/learning/library/earned-value-management-systems-analysis-8026",
    page: 0,
    description: "Earned value management systems analysis",
    type: "url",
    category: "tool"
  },
  {
    id: "risk-url-projex-risk",
    topicId: "risk-issues",
    standardId: "prince2",
    title: "Projex Academy - PRINCE2 Risk",
    bookPath: "https://www.projex.com/prince2-7-risk-management-2/",
    page: 0,
    description: "PRINCE2 7 risk management guide",
    type: "url",
    category: "guide"
  },
  {
    id: "risk-url-scribd",
    topicId: "risk-issues",
    standardId: "prince2",
    title: "Scribd - PRINCE2 ISO Paper",
    bookPath: "https://www.scribd.com/document/305565355/PRINCE2-PMBOK-ISO-paper-pdf",
    page: 0,
    description: "PRINCE2, PMBOK, ISO comparison paper",
    type: "academic",
    category: "comparison"
  },
  {
    id: "risk-url-pqb-risk",
    topicId: "risk-issues",
    standardId: "iso",
    title: "PQB Web - ISO 21502 Risk",
    bookPath: "https://www.pqbweb.eu/platform.php?if=113",
    page: 0,
    description: "ISO 21502 risk management guidance",
    type: "url",
    category: "guide"
  },
  {
    id: "risk-url-researchgate-risk",
    topicId: "risk-issues",
    standardId: "general",
    title: "ResearchGate - PMBOK PRINCE2 Risk Study",
    bookPath: "https://www.researchgate.net/publication/304143224_A_Study_on_Project_Management_Based_on_PMBOK_and_PRINCE2",
    page: 0,
    description: "Study on project management based on PMBOK and PRINCE2",
    type: "academic",
    category: "comparison"
  },

  // ==================== PMBOK UNIQUE TOPICS ====================
  {
    id: "unique-pmbok-system",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Holistic (Systems) Thinking",
    bookPath: "/Books/PMBOK7.pdf",
    page: 10,
    description: "Projects as part of broader system with portfolios, programs, operations",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-complexity",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Complexity Management",
    bookPath: "/Books/PMBOK7.pdf",
    page: 60,
    description: "Navigate complexity using tools like Cynefin framework",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-value",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Value Delivery System",
    bookPath: "/Books/PMBOK7.pdf",
    page: 10,
    description: "Value delivery components working together for continuous value creation",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-evm",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Measurement & EVM",
    bookPath: "/Books/PMBOK7.pdf",
    page: 167,
    description: "Earned Value Management techniques for performance assessment",
    type: "book",
    category: "tool"
  },
  {
    id: "unique-pmbok-models",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Models, Methods, Artifacts",
    bookPath: "/Books/PMBOK7.pdf",
    page: 200,
    description: "Library of tools including Monte Carlo, MoSCoW, decision matrices",
    type: "book",
    category: "tool"
  },
  {
    id: "unique-pmbok-opportunity",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Opportunity & Threat Principle",
    bookPath: "/Books/PMBOK7.pdf",
    page: 60,
    description: "Optimize risk responses for both threats and opportunities",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-adaptability",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Adaptability & Resilience",
    bookPath: "/Books/PMBOK7.pdf",
    page: 60,
    description: "Embrace adaptability and resiliency for project success",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-change-human",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Change as Human Process",
    bookPath: "/Books/PMBOK7.pdf",
    page: 60,
    description: "Change management includes emotional impact on stakeholders",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-ethics",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Ethical Stewardship",
    bookPath: "/Books/PMBOK7.pdf",
    page: 52,
    description: "Stewardship involves upholding values, ethics, and environmental responsibility",
    type: "book",
    category: "core"
  },
  {
    id: "unique-pmbok-psych-safety",
    topicId: "pmbok-unique",
    standardId: "pmbok",
    title: "PMBOK 7 - Team Culture & Psychological Safety",
    bookPath: "/Books/PMBOK7.pdf",
    page: 58,
    description: "Psychological safety through trust, open communication, and support",
    type: "book",
    category: "core"
  },

  // ==================== PRINCE2 UNIQUE TOPICS ====================
  {
    id: "unique-prince2-principles",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Seven Principles Structure",
    bookPath: "/Books/PRINCE2.pdf",
    page: 39,
    description: "Seven principles: business justification, learn from experience, defined roles, etc.",
    type: "book",
    category: "core"
  },
  {
    id: "unique-prince2-product",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Product-Based Planning",
    bookPath: "/Books/PRINCE2.pdf",
    page: 107,
    description: "Product breakdown structure (PBS) and product flow diagram (PFD)",
    type: "book",
    category: "tool"
  },
  {
    id: "unique-prince2-exception",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Manage by Exception",
    bookPath: "/Books/PRINCE2.pdf",
    page: 44,
    description: "Use tolerances to define acceptable deviations with escalation",
    type: "book",
    category: "core"
  },
  {
    id: "unique-prince2-roles",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Defined Roles & RACI",
    bookPath: "/Books/PRINCE2.pdf",
    page: 42,
    description: "Define roles like Executive, Senior User, Senior Supplier with RACI",
    type: "book",
    category: "core"
  },
  {
    id: "unique-prince2-stages",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Stage Management Lifecycle",
    bookPath: "/Books/PRINCE2.pdf",
    page: 45,
    description: "Manage by stages with defined start, control, and end points",
    type: "book",
    category: "core"
  },
  {
    id: "unique-prince2-board",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Project Board & Management Products",
    bookPath: "/Books/PRINCE2.pdf",
    page: 94,
    description: "Project Board with Executive, Senior User, Senior Supplier",
    type: "book",
    category: "core"
  },
  {
    id: "unique-prince2-lessons",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Formal Lessons Log",
    bookPath: "/Books/PRINCE2.pdf",
    page: 40,
    description: "Lessons captured in lessons log reviewed at stage boundaries",
    type: "book",
    category: "tool"
  },
  {
    id: "unique-prince2-assurance",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Project Assurance & Support",
    bookPath: "/Books/PRINCE2.pdf",
    page: 94,
    description: "Project assurance for independent checks and project support",
    type: "book",
    category: "core"
  },
  {
    id: "unique-prince2-templates",
    topicId: "prince2-unique",
    standardId: "prince2",
    title: "PRINCE2 - Explicit Templates & Appendices",
    bookPath: "/Books/PRINCE2.pdf",
    page: 269,
    description: "Templates for plans, reports, and product descriptions",
    type: "book",
    category: "template"
  },

  // ==================== ISO UNIQUE TOPICS ====================
  {
    id: "unique-iso-context",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Organizational Environment & Context",
    bookPath: "/Books/ISO21500.pdf",
    page: 15,
    description: "Project context includes organizational environment and external factors",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-strategy",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Integrated Governance with Strategy",
    bookPath: "/Books/ISO21500.pdf",
    page: 15,
    description: "Projects align with sponsoring organization's strategic objectives",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-operations",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Relationship with Operations",
    bookPath: "/Books/ISO21500.pdf",
    page: 14,
    description: "Project management differs from operational management",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-interfaces",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Programme & Portfolio Interfaces",
    bookPath: "/Books/ISO21500.pdf",
    page: 16,
    description: "Projects interface with programmes and portfolios for alignment",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-structure",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Normative Structure",
    bookPath: "/Books/ISO21500.pdf",
    page: 1,
    description: "Normative structure with clauses 1-7 for standardized guidance",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-family",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Standards Family Reference",
    bookPath: "/Books/ISO21500.pdf",
    page: 2,
    description: "Part of ISO 21500 family including 21503, 21504, 21505",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-lifecycle",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Application & Life Cycle",
    bookPath: "/Books/ISO21500.pdf",
    page: 18,
    description: "Project life cycle with phases tailored to project context",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-competence",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Organizational Enablers & Competence",
    bookPath: "/Books/ISO21500.pdf",
    page: 20,
    description: "Project personnel should have necessary skills and training",
    type: "book",
    category: "core"
  },
  {
    id: "unique-iso-auditing",
    topicId: "iso-unique",
    standardId: "iso",
    title: "ISO 21502 - Conformance & Auditing Orientation",
    bookPath: "/Books/ISO21500.pdf",
    page: 23,
    description: "Auditing practices to ensure conformance with standards",
    type: "book",
    category: "core"
  }
];

export const getReferencesForTopic = (topicId: string, standardId?: "pmbok" | "prince2" | "iso" | "general") => {
  return REFERENCES.filter(r => r.topicId === topicId && (!standardId || r.standardId === standardId));
};

export const buildPdfUrl = (bookPath: string, page: number) => {
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  const normalizedBase = String(base).endsWith("/") ? String(base).slice(0, -1) : String(base);
  const normalizedPath = bookPath.startsWith("/") ? bookPath : `/${bookPath}`;
  
  // For URLs, return the URL directly
  if (bookPath.startsWith("http")) {
    return bookPath;
  }
  
  // For PDFs, build the PDF viewer URL
  return `${normalizedBase}${normalizedPath}#page=${page}`;
};

export const searchReferences = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return [] as ReferenceItem[];
  return REFERENCES.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.description?.toLowerCase().includes(q) ||
    r.topicId.toLowerCase().includes(q) ||
    r.standardId.toLowerCase().includes(q) ||
    r.type.toLowerCase().includes(q) ||
    r.category?.toLowerCase().includes(q)
  );
};

// Helper function to get all unique topic IDs
export const getAllTopicIds = (): string[] => {
  return Array.from(new Set(REFERENCES.map(ref => ref.topicId)));
};

// Helper function to get references by type
export const getReferencesByType = (type: "book" | "url" | "academic" | "template" | "guide") => {
  return REFERENCES.filter(r => r.type === type);
};

// Helper function to get references by category
export const getReferencesByCategory = (category: "core" | "supplementary" | "comparison" | "tool" | "guide") => {
  return REFERENCES.filter(r => r.category === category);
};

// Helper function to get all standards
export const getReferencesByStandard = (standardId: "pmbok" | "prince2" | "iso" | "general") => {
  return REFERENCES.filter(r => r.standardId === standardId);
};

// Helper to get topic statistics
export const getTopicStatistics = () => {
  const topics = getAllTopicIds();
  return topics.map(topicId => {
    const refs = getReferencesForTopic(topicId);
    return {
      topicId,
      total: refs.length,
      pmbok: refs.filter(r => r.standardId === "pmbok").length,
      prince2: refs.filter(r => r.standardId === "prince2").length,
      iso: refs.filter(r => r.standardId === "iso").length,
      general: refs.filter(r => r.standardId === "general").length
    };
  });
};