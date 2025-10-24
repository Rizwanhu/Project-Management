import React from "react";
import { Link } from "react-router-dom";

const phases = [
  {
    id: 1,
    name: "Exploration / Ideation",
    description: "Generate product ideas, conduct market and technology research, and identify potential risks.",
    activities: [
      "Generate product ideas and concepts",
      "Conduct market and technology research",
      "Identify potential risks and uncertainties",
    ],
    roles: ["Product Manager", "R&D Lead", "UX Designer"],
    deliverables: ["Idea Repository", "Opportunity Assessment Matrix", "Risk Log"],
    startDate: "2025-01-01",
    endDate: "2025-02-28",
    risks: ["High uncertainty in ideas", "Incomplete market data"],
    kpis: ["Validated concepts", "Stakeholder approval > 80%"],
    decisionGate: "Approval to proceed with selected concepts",
    standardsRefs: [
      { name: "PMBOK: Initiating Process Group", standard: "pmbok", section: "governance-leadership" },
      { name: "PRINCE2: Starting Up a Project", standard: "prince2", section: "governance-leadership" },
      { name: "ISO 21500: Project Management Guidance", standard: "iso", section: "governance-leadership" },
    ],
    tailoringJustification: "Lightweight exploration allows fast iteration and flexible pivoting.",
  },
  {
    id: 2,
    name: "Concept Development & Validation",
    description: "Define value proposition, MVP scope, rapid prototyping, and concept testing with feedback iteration.",
    activities: [
      "Define value proposition and MVP scope",
      "Rapid prototyping and concept testing",
      "Collect user feedback and iterate",
    ],
    roles: ["Product Manager", "R&D Team", "UX Designer", "Stakeholders"],
    deliverables: ["MVP Prototype", "Concept Validation Report", "Updated Risk Log"],
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    risks: ["Incorrect MVP assumptions", "Limited user feedback"],
    kpis: ["Prototype validated", "User feedback > 70% positive"],
    decisionGate: "Go/No-go to Full Development",
    standardsRefs: [
      { name: "PMBOK: Planning & Executing", standard: "pmbok", section: "planning-scope" },
      { name: "PRINCE2: Managing Product Delivery", standard: "prince2", section: "planning-scope" },
      { name: "ISO 56002: Innovation Management", standard: "iso", section: "planning-scope" },
    ],
    tailoringJustification: "Iterative validation ensures risk mitigation and aligns product with stakeholder expectations.",
  },
  {
    id: 3,
    name: "Iterative Development / Experimentation",
    description: "Implement features in short cycles, conduct experiments, measure outcomes, pivot if needed.",
    activities: [
      "Implement features in short cycles",
      "Conduct experiments and measure outcomes",
      "Pivot based on results",
      "Continuous stakeholder review",
    ],
    roles: ["Developers", "QA", "UX Designer", "Product Manager"],
    deliverables: ["Working Prototypes", "Experiment Reports", "Sprint Review Notes"],
    startDate: "2025-05-01",
    endDate: "2025-08-31",
    risks: ["Feature creep", "Technical blockers", "Stakeholder misalignment"],
    kpis: ["Successful experiments", "Positive usability > 80%"],
    decisionGate: "Approval to scale successful experiments",
    standardsRefs: [
      { name: "PMBOK: Executing Process Group", standard: "pmbok", section: "agile-hybrid" },
      { name: "PRINCE2: Managing Product Delivery", standard: "prince2", section: "agile-hybrid" },
      { name: "ISO 56002: Innovation Management", standard: "iso", section: "agile-hybrid" },
    ],
    tailoringJustification: "Short iterative cycles allow learning and adaptation while keeping project aligned with goals.",
  },
  {
    id: 4,
    name: "Testing & Refinement",
    description: "Integrate modules, perform QA testing, user acceptance, and refine based on feedback.",
    activities: [
      "Integrate modules",
      "QA testing and user acceptance",
      "Refine product based on feedback",
      "Validate against success criteria",
    ],
    roles: ["QA Team", "Product Manager", "Users"],
    deliverables: ["Test Reports", "Updated Prototype", "Feedback Summary"],
    startDate: "2025-09-01",
    endDate: "2025-10-31",
    risks: ["Residual defects", "Incomplete validation"],
    kpis: ["Defect rate < 2%", "User satisfaction > 85%"],
    decisionGate: "Product release readiness",
    standardsRefs: [
      { name: "PMBOK: Monitoring & Controlling", standard: "pmbok", section: "quality-management" },
      { name: "PRINCE2: Closing a Project", standard: "prince2", section: "quality-management" },
      { name: "ISO 56002: Innovation Management", standard: "iso", section: "quality-management" },
    ],
    tailoringJustification: "Focused QA and refinement ensures product meets stakeholder expectations without over-bureaucracy.",
  },
  {
    id: 5,
    name: "Launch & Learning",
    description: "Launch product, gather post-launch feedback, and document lessons learned for continuous improvement.",
    activities: [
      "Launch product",
      "Gather post-launch feedback",
      "Document lessons learned",
      "Measure post-launch success metrics",
    ],
    roles: ["Product Manager", "R&D Lead", "QA"],
    deliverables: ["Final Product", "Lessons Learned Report", "Post-launch Metrics"],
    startDate: "2025-11-01",
    endDate: "2025-12-31",
    risks: ["Market acceptance", "Unforeseen defects"],
    kpis: ["Product adoption rate", "Lessons learned implemented in next cycle"],
    decisionGate: "Project closure / product handover",
    standardsRefs: [
      { name: "PMBOK: Closing Process Group", standard: "pmbok", section: "lessons-learned" },
      { name: "PRINCE2: Closing a Project", standard: "prince2", section: "lessons-learned" },
      { name: "ISO 56002: Innovation Management", standard: "iso", section: "lessons-learned" },
    ],
    tailoringJustification: "Capturing lessons learned ensures continuous improvement for future projects.",
  },
];

// Chart components
const TimelineChart = () => {
  const phasesData = [
    { name: "Exploration", duration: 2, color: "#3b82f6" },
    { name: "Concept Dev", duration: 2, color: "#10b981" },
    { name: "Iterative Dev", duration: 4, color: "#f59e0b" },
    { name: "Testing", duration: 2, color: "#8b5cf6" },
    { name: "Launch", duration: 2, color: "#ef4444" }
  ];

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
        Project Timeline Distribution
      </h3>
      <div style={{ display: "flex", alignItems: "center", height: "60px", gap: "4px" }}>
        {phasesData.map((phase, index) => (
          <div
            key={phase.name}
            style={{
              flex: phase.duration,
              background: phase.color,
              height: "40px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "600",
              fontSize: "0.875rem",
              position: "relative"
            }}
          >
            {phase.name}
            <div style={{
              position: "absolute",
              bottom: "-20px",
              fontSize: "0.75rem",
              color: "#6b7280",
              fontWeight: "500"
            }}>
              {phase.duration} months
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RiskHeatMap = () => {
  const riskData = [
    { phase: "Exploration", uncertainty: 8, complexity: 6, impact: 7 },
    { phase: "Concept Dev", uncertainty: 6, complexity: 7, impact: 8 },
    { phase: "Iterative Dev", uncertainty: 5, complexity: 8, impact: 9 },
    { phase: "Testing", uncertainty: 3, complexity: 6, impact: 7 },
    { phase: "Launch", uncertainty: 4, complexity: 5, impact: 8 }
  ];

  const getColor = (value) => {
    if (value >= 8) return "#ef4444";
    if (value >= 6) return "#f59e0b";
    if (value >= 4) return "#eab308";
    return "#10b981";
  };

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
        Risk Assessment Heat Map
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", alignItems: "center" }}>
        <div style={{ fontWeight: "600", color: "#374151" }}>Phase</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center" }}>Uncertainty</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center" }}>Complexity</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center" }}>Impact</div>
        
        {riskData.map((risk) => (
          <React.Fragment key={risk.phase}>
            <div style={{ fontWeight: "500", color: "#4b5563" }}>{risk.phase}</div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                background: getColor(risk.uncertainty),
                color: "white",
                padding: "0.5rem",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "0.875rem"
              }}>
                {risk.uncertainty}/10
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                background: getColor(risk.complexity),
                color: "white",
                padding: "0.5rem",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "0.875rem"
              }}>
                {risk.complexity}/10
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                background: getColor(risk.impact),
                color: "white",
                padding: "0.5rem",
                borderRadius: "6px",
                fontWeight: "600",
                fontSize: "0.875rem"
              }}>
                {risk.impact}/10
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ResourceAllocationChart = () => {
  const resourceData = [
    { role: "Product Manager", exploration: 30, concept: 25, development: 20, testing: 15, launch: 10 },
    { role: "R&D Team", exploration: 20, concept: 40, development: 60, testing: 30, launch: 10 },
    { role: "UX Designer", exploration: 40, concept: 50, development: 30, testing: 20, launch: 10 },
    { role: "Developers", exploration: 10, concept: 30, development: 80, testing: 40, launch: 20 },
    { role: "QA Team", exploration: 5, concept: 10, development: 30, testing: 70, launch: 30 }
  ];

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
        Resource Allocation by Phase (%)
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "0.5rem", alignItems: "center" }}>
        <div style={{ fontWeight: "600", color: "#374151" }}>Role</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Exploration</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Concept</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Development</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Testing</div>
        <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Launch</div>
        
        {resourceData.map((resource) => (
          <React.Fragment key={resource.role}>
            <div style={{ fontWeight: "500", color: "#4b5563", fontSize: "0.875rem" }}>{resource.role}</div>
            {[resource.exploration, resource.concept, resource.development, resource.testing, resource.launch].map((value, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div style={{
                  background: "#3b82f6",
                  height: "20px",
                  width: `${value}%`,
                  margin: "0 auto",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  minWidth: "30px"
                }}>
                  {value}%
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const KpiProgressChart = () => {
  const kpiData = [
    { metric: "Stakeholder Approval", target: 80, current: 75 },
    { metric: "User Feedback Positive", target: 70, current: 65 },
    { metric: "Successful Experiments", target: 85, current: 70 },
    { metric: "Usability Score", target: 80, current: 72 },
    { metric: "Defect Rate", target: 2, current: 3, reverse: true },
    { metric: "User Satisfaction", target: 85, current: 78 }
  ];

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
        KPI Progress Tracking
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {kpiData.map((kpi) => {
          const percentage = (kpi.current / kpi.target) * 100;
          const isReverse = kpi.reverse;
          const color = isReverse 
            ? (percentage <= 100 ? "#10b981" : percentage <= 120 ? "#f59e0b" : "#ef4444")
            : (percentage >= 100 ? "#10b981" : percentage >= 80 ? "#f59e0b" : "#ef4444");

          return (
            <div key={kpi.metric} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "200px", fontWeight: "500", color: "#374151", fontSize: "0.875rem" }}>
                {kpi.metric}
              </div>
              <div style={{ flex: 1, background: "#e5e7eb", borderRadius: "10px", height: "20px", overflow: "hidden" }}>
                <div style={{
                  background: color,
                  width: `${Math.min(percentage, 100)}%`,
                  height: "100%",
                  borderRadius: "10px",
                  transition: "width 0.3s ease"
                }} />
              </div>
              <div style={{ width: "80px", textAlign: "right", fontSize: "0.875rem", fontWeight: "600", color: "#374151" }}>
                {kpi.current}/{kpi.target} {isReverse ? '%' : '%'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Phase2 = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f9fafb", minHeight: "100vh", padding: "3rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "800", color: "#111827", marginBottom: "1rem" }}>
        Innovative Product Development Process
      </h1>
      <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "3rem", fontSize: "1.1rem" }}>
        Context: R&D-heavy, uncertain outcomes, ~1 year duration. Hybrid adaptive process balancing innovation, iteration, and stakeholder engagement.
      </p>

      {/* Visual Charts Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#111827", marginBottom: "1.5rem", textAlign: "center" }}>
          Project Overview & Metrics
        </h2>
        <TimelineChart />
        <RiskHeatMap />
        <ResourceAllocationChart />
        <KpiProgressChart />
      </div>

      {/* Process Phases */}
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#111827", marginBottom: "1.5rem", textAlign: "center" }}>
        Development Phases
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {phases.map((phase, idx) => (
          <div
            key={phase.id}
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "2rem",
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              borderLeft: `10px solid ${["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"][idx]}`,
              transition: "transform 0.2s",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" }}>
              {phase.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "#374151", marginBottom: "1rem" }}>{phase.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              {phase.roles.map((role, i) => (
                <span
                  key={i}
                  style={{
                    background: "#e0f2fe",
                    color: "#0369a1",
                    padding: "0.35rem 0.7rem",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                    cursor: "default",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Activities:</p>
              <ul style={{ paddingLeft: "1.5rem", color: "#4b5563", listStyleType: "disc" }}>
                {phase.activities.map((act, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>
                    {act}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ color: "#374151", marginBottom: "0.5rem" }}>
              <strong>Deliverables:</strong> {phase.deliverables.join(", ")}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem" }}>
              <strong>Timeline:</strong> {phase.startDate} → {phase.endDate}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem" }}>
              <strong>Risks:</strong> {phase.risks.join(", ")}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem" }}>
              <strong>KPIs:</strong> {phase.kpis.join(", ")}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem" }}>
              <strong>Decision Gate:</strong> {phase.decisionGate}
            </p>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Standards References:</p>
              <ul style={{ paddingLeft: "1.5rem", color: "#4b5563" }}>
                {phase.standardsRefs.map((ref, i) => (
                  <li key={i}>
                    <Link 
                      to={`/library/${ref.standard}/${ref.section}`}
                      style={{ 
                        color: "#3b82f6", 
                        textDecoration: "underline",
                        cursor: "pointer"
                      }}
                    >
                      {ref.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ color: "#374151" }}>
              <strong>Tailoring Justification:</strong> {phase.tailoringJustification}
            </p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "3rem", fontSize: "1.6rem", fontWeight: "700", color: "#111827" }}>
        Key Insights & Innovation
      </h3>
      <ul style={{ color: "#4b5563", paddingLeft: "1.5rem", marginTop: "0.5rem", lineHeight: "1.8" }}>
        <li>Iterative approach with lightweight documentation accelerates innovation and reduces delays.</li>
        <li>Continuous stakeholder engagement reduces uncertainty in R&D projects.</li>
        <li>Standards (PMBOK, PRINCE2, ISO) selectively adapted for flexibility while retaining governance.</li>
        <li>Visual workflow diagrams can represent iterations between phases for clarity (Concept ↔ Prototyping ↔ Testing).</li>
      </ul>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link to="/library">
          <button style={{
            background: "#3b82f6",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "none"
          }}>
            Explore Full Standards Library
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Phase2;