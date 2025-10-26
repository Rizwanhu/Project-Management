export interface GovernmentProjectPhase {
  id: number;
  name: string;
  description: string;
  duration: number; // in months
  activities: string[];
  roles: string[];
  deliverables: string[];
  timeline: string;
  risks: string[];
  kpis: string[];
  decisionGate: string;
  standardsRefs: {
    name: string;
    standard: string;
    section: string;
  }[];
  tailoringJustification: string;
}

export interface RiskAssessment {
  phase: string;
  uncertainty: number;
  complexity: number;
  impact: number;
}

export interface ResourceAllocation {
  role: string;
  initiation: number;
  planning: number;
  implementation: number;
  testing: number;
  handover: number;
}

export interface KpiProgress {
  metric: string;
  target: string;
  current: string;
  unit?: string;
}

export interface ProjectMetrics {
  phases: {
    name: string;
    duration: number;
  }[];
  riskAssessment: RiskAssessment[];
  resourceAllocation: ResourceAllocation[];
  kpiProgress: KpiProgress[];
}

export const largeGovernmentProjectData: {
  context: string;
  phases: GovernmentProjectPhase[];
  metrics: ProjectMetrics;
  keyInsights: string[];
} = {
  context: "High-budget, multi-stakeholder, regulation-heavy environment with significant compliance, procurement, and political oversight. Duration typically 3–5 years. A predictive–adaptive hybrid model ensures accountability, documentation, and risk control while allowing flexibility in implementation.",
  
  phases: [
    {
      id: 1,
      name: "Initiation & Feasibility",
      description: "Establish need, secure approvals, define high-level scope, and evaluate feasibility.",
      duration: 6,
      activities: [
        "Define project purpose, objectives, and scope",
        "Conduct feasibility and cost-benefit analysis",
        "Identify funding sources and approvals",
        "Stakeholder mapping and engagement plan",
        "Establish governance and risk management structure"
      ],
      roles: ["Project Director", "Government Sponsor", "Procurement & Legal", "Policy Experts"],
      deliverables: ["Feasibility Report", "Project Charter", "Stakeholder Register", "Risk Register", "Approval Documentation"],
      timeline: "Jan 2025 → Jun 2025",
      risks: ["Political shifts", "Budget approval delays"],
      kpis: ["Approved business case", "Stakeholder alignment ≥ 80%"],
      decisionGate: "Executive sign-off to enter Planning phase",
      standardsRefs: [
        { name: "PMBOK: Initiating Process Group", standard: "pmbok", section: "governance-leadership" },
        { name: "PRINCE2: Starting Up a Project", standard: "prince2", section: "governance-leadership" },
        { name: "ISO 21500: Project Governance", standard: "iso", section: "governance-leadership" }
      ],
      tailoringJustification: "Structured feasibility ensures compliance and political accountability before commitment of public funds."
    },
    {
      id: 2,
      name: "Planning & Design",
      description: "Translate approved concept into detailed technical, financial, and management plans.",
      duration: 8,
      activities: [
        "Develop Work Breakdown Structure (WBS)",
        "Create project management plan and budget baseline",
        "Define procurement, compliance, and quality standards",
        "Conduct environmental, legal, and risk assessments",
        "Finalize detailed designs and implementation plan"
      ],
      roles: ["Project Manager", "Engineering/IT Team", "Legal", "Finance", "Stakeholders"],
      deliverables: ["Project Management Plan", "Detailed Designs", "Procurement Plan", "Quality Management Plan"],
      timeline: "Jul 2025 → Feb 2026",
      risks: ["Scope expansion", "Delayed procurement approvals"],
      kpis: ["Design completeness ≥ 95%", "Budget approved and baselined"],
      decisionGate: "Approval to commence Implementation",
      standardsRefs: [
        { name: "PMBOK: Planning Process Group", standard: "pmbok", section: "planning-scope" },
        { name: "PRINCE2: Initiating a Project", standard: "prince2", section: "planning-scope" },
        { name: "ISO 21500: Planning Process", standard: "iso", section: "planning-scope" }
      ],
      tailoringJustification: "Emphasis on formal documentation and review ensures compliance and readiness for high-cost execution."
    },
    {
      id: 3,
      name: "Implementation / Execution",
      description: "Deliver project outputs per approved plan through controlled execution and progress tracking.",
      duration: 24,
      activities: [
        "Execute procurement and construction/development",
        "Manage contractors and suppliers",
        "Monitor progress against schedule and budget",
        "Conduct regular stakeholder reporting and audits",
        "Manage change control and issue resolution"
      ],
      roles: ["Project Manager", "Contractors", "Engineering Team", "QA", "Compliance"],
      deliverables: ["Interim Progress Reports", "Change Logs", "Completed Components", "Audit Records"],
      timeline: "Mar 2026 → Feb 2028",
      risks: ["Contractor delays", "Cost overruns", "Scope changes"],
      kpis: ["On-time milestone achievement > 85%", "Cost variance < 5%"],
      decisionGate: "Completion certificates and readiness for testing",
      standardsRefs: [
        { name: "PMBOK: Executing Process Group", standard: "pmbok", section: "agile-hybrid" },
        { name: "PRINCE2: Managing Product Delivery", standard: "prince2", section: "agile-hybrid" },
        { name: "ISO 9001: Quality Management", standard: "iso", section: "quality-management" }
      ],
      tailoringJustification: "Predictive structure maintains control, while adaptive risk logs allow flexible response to emerging issues."
    },
    {
      id: 4,
      name: "Testing & Commissioning",
      description: "Verify, validate, and certify that the delivered product meets specifications and compliance requirements.",
      duration: 6,
      activities: [
        "Conduct system/infrastructure testing",
        "Perform compliance and safety audits",
        "User Acceptance Testing (UAT)",
        "Rectify defects and finalize documentation"
      ],
      roles: ["QA Team", "Independent Auditors", "Engineering Leads", "End Users"],
      deliverables: ["Test & Audit Reports", "Compliance Certificates", "Acceptance Sign-offs"],
      timeline: "Mar 2028 → Aug 2028",
      risks: ["Defects", "Rework delays", "Failed compliance checks"],
      kpis: ["Defect closure rate > 95%", "Compliance audit success = 100%"],
      decisionGate: "Acceptance for handover",
      standardsRefs: [
        { name: "PMBOK: Monitoring & Controlling", standard: "pmbok", section: "quality-management" },
        { name: "PRINCE2: Managing Stage Boundaries", standard: "prince2", section: "quality-management" },
        { name: "ISO 9001: Quality Assurance", standard: "iso", section: "quality-management" }
      ],
      tailoringJustification: "Formal verification ensures regulatory compliance and public accountability."
    },
    {
      id: 5,
      name: "Handover & Evaluation",
      description: "Transition deliverables to operations, evaluate benefits, and close the project.",
      duration: 6,
      activities: [
        "Formal handover to operating body",
        "Conduct post-implementation review",
        "Document lessons learned and performance reports",
        "Evaluate benefits realization"
      ],
      roles: ["Project Manager", "Operations Team", "Stakeholders", "Auditors"],
      deliverables: ["Handover Report", "Lessons Learned Document", "Final Audit", "Benefits Report"],
      timeline: "Sep 2028 → Feb 2029",
      risks: ["Operational readiness gaps", "Post-launch issues"],
      kpis: ["Handover acceptance = 100%", "Benefits realization > 90%"],
      decisionGate: "Project closure and audit sign-off",
      standardsRefs: [
        { name: "PMBOK: Closing Process Group", standard: "pmbok", section: "lessons-learned" },
        { name: "PRINCE2: Closing a Project", standard: "prince2", section: "lessons-learned" },
        { name: "ISO 21500: Project Closure", standard: "iso", section: "lessons-learned" }
      ],
      tailoringJustification: "Emphasizes traceability and post-project accountability as required in public sector governance."
    }
  ],

  metrics: {
    phases: [
      { name: "Initiation & Feasibility", duration: 6 },
      { name: "Planning & Design", duration: 8 },
      { name: "Implementation", duration: 24 },
      { name: "Testing & Commissioning", duration: 6 },
      { name: "Handover & Evaluation", duration: 6 }
    ],
    riskAssessment: [
      { phase: "Initiation", uncertainty: 7, complexity: 8, impact: 9 },
      { phase: "Planning & Design", uncertainty: 5, complexity: 9, impact: 9 },
      { phase: "Implementation", uncertainty: 6, complexity: 10, impact: 10 },
      { phase: "Testing & Commissioning", uncertainty: 3, complexity: 7, impact: 8 },
      { phase: "Handover & Evaluation", uncertainty: 2, complexity: 6, impact: 9 }
    ],
    resourceAllocation: [
      { role: "Project Director", initiation: 40, planning: 35, implementation: 20, testing: 15, handover: 10 },
      { role: "Engineering / IT Team", initiation: 10, planning: 40, implementation: 70, testing: 30, handover: 15 },
      { role: "Procurement & Legal", initiation: 30, planning: 40, implementation: 50, testing: 10, handover: 10 },
      { role: "QA & Compliance", initiation: 10, planning: 15, implementation: 30, testing: 70, handover: 30 },
      { role: "Stakeholder Relations", initiation: 50, planning: 40, implementation: 25, testing: 20, handover: 20 }
    ],
    kpiProgress: [
      { metric: "Milestone Delivery On-time", target: "85%", current: "80%" },
      { metric: "Budget Variance", target: "<5%", current: "4%" },
      { metric: "Stakeholder Satisfaction", target: ">75%", current: "78%" },
      { metric: "Compliance Audit Pass Rate", target: "100%", current: "95%" },
      { metric: "Risk Mitigation Success", target: ">80%", current: "82%" },
      { metric: "Benefit Realization Post-launch", target: ">90%", current: "—" }
    ]
  },

  keyInsights: [
    "Strong documentation and audit trails ensure transparency and compliance.",
    "Predictive core with adaptive feedback loops enables responsiveness without losing control.",
    "Stakeholder and political engagement are continuous, not phase-bound.",
    "Lessons learned integrated into future programs ensure institutional improvement.",
    "Governance frameworks (PMBOK, PRINCE2, ISO 21500/9001) harmonized for accountability and efficiency.",
    "Visual representations (e.g., Gantt + Governance Gates diagram) can illustrate dependencies and approval flow across phases."
  ]
};
