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

const CustomSoftwareProjects = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f9fafb", minHeight: "100vh", padding: "2rem 1rem" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Scenario 1: Custom Software Development Project
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs md:text-sm">Scenario 1</Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs md:text-sm">≤ 7 Team Members</Badge>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-xs md:text-sm">≤ 6 Months Duration</Badge>
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 text-xs md:text-sm">Hybrid Agile–PRINCE2</Badge>
          </div>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            Short duration (≤6 months), small team (≤7), well-defined requirements<br />
            Hybrid Agile–PRINCE2, tailored using PMBOK 7 value delivery & ISO 21502 governance
          </p>
        </div>

        {/* Phase Cards */}
        <div className="mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
            Project Phases
          </h2>
          <div className="space-y-6 md:space-y-8">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <Card
                  key={phase.id}
                  className="border-l-6 transition-all duration-200 hover:shadow-lg"
                  style={{
                    borderLeftColor: phase.color,
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="rounded-lg p-2 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${phase.color}dd, ${phase.color})`,
                        }}
                      >
                        <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg md:text-2xl m-0">
                        Phase {phase.id} — {phase.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Goal */}
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: `${phase.color}15`,
                      }}
                    >
                      <p className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Goal:</p>
                      <p className="text-gray-700 text-sm md:text-base m-0">{phase.goal}</p>
                    </div>

                    {/* Roles */}
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Roles:</p>
                      <p className="text-muted-foreground text-sm md:text-base m-0">{phase.roles}</p>
                    </div>

                    {/* Activities */}
                    <div>
                      <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Activities:</p>
                      <ul className="pl-6 m-0 text-muted-foreground space-y-1">
                        {phase.activities.map((act, i) => (
                          <li key={i} className="text-sm md:text-base">
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Deliverables:</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-xs md:text-sm font-medium"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decision Gate */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4">
                      <p className="font-semibold text-yellow-800 m-0 text-sm md:text-base">
                        {phase.decisionGate}
                      </p>
                    </div>

                    {/* Standards Mapping */}
                    <div>
                      <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Standards Mapping (Deep links):
                      </p>
                      <ul className="pl-6 m-0 list-none text-muted-foreground space-y-2">
                        {phase.standardsRefs.map((ref, i) => (
                          <li key={i}>
                            <Link
                              to={`/library/${ref.standard}/${ref.section}`}
                              className="text-blue-600 underline font-medium hover:text-blue-700 text-sm md:text-base"
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
                        className="inline-flex items-center gap-2 text-blue-600 no-underline font-semibold text-sm md:text-base hover:text-blue-700"
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
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
              Roles & Responsibilities (RACI Table)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-6 gap-2 min-w-[600px]">
                {/* Header Row */}
                <div className="font-semibold text-gray-700 p-2 text-sm md:text-base">Role</div>
                <div className="font-semibold text-gray-700 text-center p-2 text-xs md:text-sm">Phase 1</div>
                <div className="font-semibold text-gray-700 text-center p-2 text-xs md:text-sm">Phase 2</div>
                <div className="font-semibold text-gray-700 text-center p-2 text-xs md:text-sm">Phase 3</div>
                <div className="font-semibold text-gray-700 text-center p-2 text-xs md:text-sm">Phase 4</div>
                <div className="font-semibold text-gray-700 text-center p-2 text-xs md:text-sm">Phase 5</div>

                {/* Data Rows */}
                {raciData.map((row, idx) => (
                  <React.Fragment key={row.role}>
                    <div className={`font-medium text-gray-600 p-2 text-sm md:text-base ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                      {row.role}
                      {row.key && <div className="text-xs text-gray-500">({row.key})</div>}
                    </div>
                    {[row.phase1, row.phase2, row.phase3, row.phase4, row.phase5].map((value, colIdx) => (
                      <div
                        key={colIdx}
                        className={`text-center p-2 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}
                      >
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs md:text-sm font-semibold">
                          {value}
                        </span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-100 rounded-md">
              <p className="text-sm text-gray-600 m-0">
                <strong>Legend:</strong> A = Accountable, R = Responsible, C = Consulted, I = Informed
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Risks & Quality Controls */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-red-600" />
              Risks & Quality Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground pl-6 space-y-2 text-sm md:text-base">
              <li><strong>Scope change risk:</strong> Managed through change control board and backlog prioritization</li>
              <li><strong>CI/CD pipeline reliability:</strong> Automated testing and deployment checks ensure stability</li>
              <li><strong>Performance issues late in cycle:</strong> Early load testing and performance benchmarks</li>
              <li><strong>Definition of Done enforcement:</strong> Clear acceptance criteria and peer review processes</li>
            </ul>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div className="mb-12">
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Key Insights
          </h3>
          <ul className="text-gray-600 pl-6 space-y-2 text-sm md:text-base">
            <li>Hybrid approach balances agility with governance for small, time-boxed projects</li>
            <li>Minimal documentation maintains speed without sacrificing quality</li>
            <li>Clear RACI matrix prevents role confusion in small teams</li>
            <li>Decision gates ensure stakeholder alignment at critical milestones</li>
            <li>Standards integration provides best practice guidance while allowing flexibility</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/library">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg border-none text-sm md:text-base font-semibold cursor-pointer transition-colors">
              Explore Full Standards Library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareProjects;
