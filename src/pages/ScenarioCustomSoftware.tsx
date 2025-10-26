import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, Clipboard, Code, TestTube, Rocket as Deploy, Users, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
  {
    id: 1,
    name: "Initiation & Planning",
    icon: Rocket,
    goal: "Define objectives, scope & prioritized backlog; approve plan",
    roles: "PM (A/R), Tech Lead (C), Devs (I), QA (I), UX (C), Client (C)",
    activities: [
      "Define objectives & scope",
      "Identify stakeholders",
      "Prioritize requirements into backlog",
      "Estimation + Sprint Plan",
    ],
    deliverables: ["Lean Project Charter", "Stakeholder List", "Initial Backlog", "Initial Schedule"],
    decisionGate: "Gate G1: Plan approved + backlog finalized",
    standardsRefs: [
      { name: "PMBOK 7", standard: "pmbok", section: "stakeholder-engagement" },
      { name: "PRINCE2", standard: "prince2", section: "business-case-benefits" },
      { name: "ISO 21502", standard: "iso", section: "governance-leadership" },
    ],
    bibliographyTopic: "stakeholder-engagement",
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "Design & Setup",
    icon: Clipboard,
    goal: "Architecture ready + environment operational",
    roles: "Tech Lead (A/R), Devs (R), QA (C), UX (R), PM (C), Client (I)",
    activities: [
      "Architecture & API design",
      "Wireframes",
      "CI/CD pipeline setup",
      "Test strategy",
    ],
    deliverables: ["Architecture Diagram", "Prototype UI", "CI/CD setup", "Test Strategy"],
    decisionGate: "Gate G2: Design baseline + Dev environment ready",
    standardsRefs: [
      { name: "PMBOK", standard: "pmbok", section: "planning-scope" },
      { name: "PRINCE2", standard: "prince2", section: "planning-scope" },
      { name: "ISO", standard: "iso", section: "quality-management" },
    ],
    bibliographyTopic: "planning-scope",
    color: "#10b981",
  },
  {
    id: 3,
    name: "Development (Sprint Cycles)",
    icon: Code,
    goal: "Deliver working increments continuously",
    roles: "Devs (R), QA (C), Scrum Master/PM (C), Client (I)",
    activities: [
      "Code + Unit Tests + Code Reviews",
      "Daily Standup",
      "Sprint Review and Retrospectives",
    ],
    deliverables: ["Sprint Report", "Build Increments", "Updated Backlog"],
    decisionGate: "Gate: Definition of Done (Quality Controlled)",
    standardsRefs: [
      { name: "PMBOK", standard: "pmbok", section: "agile-hybrid" },
      { name: "PRINCE2", standard: "prince2", section: "change-management" },
      { name: "ISO", standard: "iso", section: "performance-measurement" },
    ],
    bibliographyTopic: "agile-hybrid",
    color: "#f59e0b",
  },
  {
    id: 4,
    name: "Testing & Integration",
    icon: TestTube,
    goal: "Stable integrated build validated through UAT",
    roles: "QA (A/R), PM (C), Devs (R), Client (R)",
    activities: [
      "System + regression testing",
      "UAT execution",
      "Fix defects",
    ],
    deliverables: ["Test Reports", "Bug Logs", "UAT Sign-off"],
    decisionGate: "Gate G3: Go-Live approved",
    standardsRefs: [
      { name: "PMBOK", standard: "pmbok", section: "quality-management" },
      { name: "PRINCE2", standard: "prince2", section: "quality-management" },
      { name: "ISO", standard: "iso", section: "communication-reporting" },
    ],
    bibliographyTopic: "quality-management",
    color: "#8b5cf6",
  },
  {
    id: 5,
    name: "Deployment & Closure",
    icon: Deploy,
    goal: "Release final product + training + closure",
    roles: "PM (A/R), Tech Lead (C), Devs (C), QA (C), Client (R)",
    activities: [
      "Deployment + Hypercare",
      "Training & Handover",
      "Lessons Learned",
    ],
    deliverables: ["Final Build", "User Guide", "Handover Checklist", "Closure Report"],
    decisionGate: "Gate: Final Closure Approval",
    standardsRefs: [
      { name: "PMBOK", standard: "pmbok", section: "lessons-learned" },
      { name: "PRINCE2", standard: "prince2", section: "business-case-benefits" },
      { name: "ISO", standard: "iso", section: "performance-measurement" },
    ],
    bibliographyTopic: "lessons-learned",
    color: "#ef4444",
  },
];

const raciData = [
  { role: "PM", phase1: "A/R", phase2: "C", phase3: "C", phase4: "C", phase5: "A/R", key: "Accountable for plan & release" },
  { role: "Tech Lead", phase1: "C", phase2: "A/R", phase3: "C", phase4: "C", phase5: "C", key: "Architecture owner" },
  { role: "Developers", phase1: "I", phase2: "R", phase3: "R", phase4: "R", phase5: "C" },
  { role: "QA", phase1: "I", phase2: "C", phase3: "C", phase4: "A/R", phase5: "C", key: "Acceptance authority" },
  { role: "UX Designer", phase1: "C", phase2: "R", phase3: "I", phase4: "I", phase5: "I" },
  { role: "Client", phase1: "C", phase2: "I", phase3: "I", phase4: "R", phase5: "R" },
];

const ScenarioCustomSoftware = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f9fafb", minHeight: "100vh", padding: "2rem 1rem" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/phase2">
            <button
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Phase 2
            </button>
          </Link>
        </div>

        {/* Title Section */}
        <div className="mb-8">
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#111827", marginBottom: "1rem" }}>
            Scenario 1: Custom Software Development Project
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Scenario 1</Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">≤ 7 Team Members</Badge>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">≤ 6 Months Duration</Badge>
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Hybrid Agile–PRINCE2</Badge>
          </div>
          <p style={{ color: "#6b7280", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Short duration (≤6 months), small team (≤7), well-defined requirements<br />
            Hybrid Agile–PRINCE2, tailored using PMBOK 7 value delivery & ISO 21502 governance
          </p>
        </div>

        {/* Phase Cards */}
        <div className="mb-12">
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#111827", marginBottom: "1.5rem" }}>
            Project Phases
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <Card
                  key={phase.id}
                  style={{
                    borderLeft: `6px solid ${phase.color}`,
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 3px 0 rgb(0 0 0 / 0.1)";
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        style={{
                          background: `linear-gradient(135deg, ${phase.color}dd, ${phase.color})`,
                          borderRadius: "10px",
                          padding: "0.6rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle style={{ fontSize: "1.5rem", margin: 0 }}>
                        Phase {phase.id} — {phase.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Goal */}
                    <div
                      style={{
                        background: `${phase.color}15`,
                        borderRadius: "8px",
                        padding: "1rem",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.25rem" }}>Goal:</p>
                      <p style={{ color: "#374151", margin: 0 }}>{phase.goal}</p>
                    </div>

                    {/* Roles */}
                    <div style={{ marginBottom: "1.25rem" }}>
                      <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Roles:</p>
                      <p className="text-muted-foreground" style={{ margin: 0 }}>{phase.roles}</p>
                    </div>

                    {/* Activities */}
                    <div style={{ marginBottom: "1.25rem" }}>
                      <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.75rem" }}>Activities:</p>
                      <ul style={{ paddingLeft: "1.5rem", margin: 0 }} className="text-muted-foreground">
                        {phase.activities.map((act, i) => (
                          <li key={i} style={{ marginBottom: "0.4rem" }}>
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div style={{ marginBottom: "1.25rem" }}>
                      <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.75rem" }}>Deliverables:</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {phase.deliverables.map((deliverable, i) => (
                          <span
                            key={i}
                            style={{
                              background: "#e0f2fe",
                              color: "#0369a1",
                              padding: "0.35rem 0.7rem",
                              borderRadius: "6px",
                              fontSize: "0.85rem",
                              fontWeight: "500",
                            }}
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decision Gate */}
                    <div
                      style={{
                        background: "#fef3c7",
                        border: "1px solid #fbbf24",
                        borderRadius: "8px",
                        padding: "0.75rem 1rem",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <p style={{ fontWeight: "600", color: "#92400e", margin: 0 }}>
                        {phase.decisionGate}
                      </p>
                    </div>

                    {/* Standards Mapping */}
                    <div style={{ marginBottom: "1rem" }}>
                      <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.75rem" }}>
                        Standards Mapping (Deep links):
                      </p>
                      <ul style={{ paddingLeft: "1.5rem", margin: 0, listStyleType: "none" }} className="text-muted-foreground">
                        {phase.standardsRefs.map((ref, i) => (
                          <li key={i} style={{ marginBottom: "0.5rem" }}>
                            <Link
                              to={`/library/${ref.standard}/${ref.section}`}
                              style={{
                                color: "#3b82f6",
                                textDecoration: "underline",
                                fontWeight: "500",
                              }}
                            >
                              → {ref.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bibliography Link */}
                    <div>
                      <Link
                        to={`/bibliography?topic=${phase.bibliographyTopic}&autoOpen=1`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "#3b82f6",
                          textDecoration: "none",
                          fontWeight: "600",
                          fontSize: "0.95rem",
                        }}
                      >
                        View Bibliography for this Phase
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tailoring Rationale Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Tailoring Rationale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground" style={{ lineHeight: "1.7", fontSize: "1rem" }}>
              A hybrid Agile–PRINCE2 model is selected to fit short duration, small teams and well-defined scope, 
              with PMBOK 7 providing value-driven tailoring and ISO 21502 supporting governance and assurance. 
              Documentation remains minimal to maintain speed, adaptability, and collaboration.
            </p>
          </CardContent>
        </Card>

        {/* RACI Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              Roles & Responsibilities (RACI Table)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ overflowX: "auto" }}>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "150px repeat(5, 1fr)", 
                gap: "0.5rem", 
                minWidth: "600px"
              }}>
                {/* Header Row */}
                <div style={{ fontWeight: "600", color: "#374151", padding: "0.5rem" }}>Role</div>
                <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", padding: "0.5rem" }}>Phase 1</div>
                <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", padding: "0.5rem" }}>Phase 2</div>
                <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", padding: "0.5rem" }}>Phase 3</div>
                <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", padding: "0.5rem" }}>Phase 4</div>
                <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", padding: "0.5rem" }}>Phase 5</div>

                {/* Data Rows */}
                {raciData.map((row, idx) => (
                  <React.Fragment key={row.role}>
                    <div style={{ 
                      fontWeight: "500", 
                      color: "#4b5563", 
                      padding: "0.5rem",
                      background: idx % 2 === 0 ? "#f9fafb" : "transparent"
                    }}>
                      {row.role}
                      {row.key && <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>({row.key})</div>}
                    </div>
                    {[row.phase1, row.phase2, row.phase3, row.phase4, row.phase5].map((value, colIdx) => (
                      <div
                        key={colIdx}
                        style={{
                          textAlign: "center",
                          padding: "0.5rem",
                          background: idx % 2 === 0 ? "#f9fafb" : "transparent"
                        }}
                      >
                        <span style={{
                          background: "#dbeafe",
                          color: "#1e40af",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "4px",
                          fontSize: "0.85rem",
                          fontWeight: "600"
                        }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#f3f4f6", borderRadius: "6px" }}>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: 0 }}>
                <strong>Legend:</strong> A = Accountable, R = Responsible, C = Consulted, I = Informed
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Risks & Quality Controls */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              Risks & Quality Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground" style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li><strong>Scope change risk:</strong> Managed through change control board and backlog prioritization</li>
              <li><strong>CI/CD pipeline reliability:</strong> Automated testing and deployment checks ensure stability</li>
              <li><strong>Performance issues late in cycle:</strong> Early load testing and performance benchmarks</li>
              <li><strong>Definition of Done enforcement:</strong> Clear acceptance criteria and peer review processes</li>
            </ul>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>
            Key Insights
          </h3>
          <ul style={{ color: "#4b5563", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
            <li>Hybrid approach balances agility with governance for small, time-boxed projects</li>
            <li>Minimal documentation maintains speed without sacrificing quality</li>
            <li>Clear RACI matrix prevents role confusion in small teams</li>
            <li>Decision gates ensure stakeholder alignment at critical milestones</li>
            <li>Standards integration provides best practice guidance while allowing flexibility</li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link to="/library">
            <button
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Explore Full Standards Library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScenarioCustomSoftware;
