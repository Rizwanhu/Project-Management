import React from "react";
import { Link } from "react-router-dom";
import { largeGovernmentProjectData } from "../data/large-government-projects";

const LargeGovernmentProjects = () => {
  const { context, phases, metrics, keyInsights } = largeGovernmentProjectData;

  // Chart components
  const TimelineChart = () => {
    const phasesData = metrics.phases.map((phase, index) => ({
      name: phase.name.split(' ')[0], // Short name for display
      fullName: phase.name,
      duration: phase.duration,
      color: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"][index]
    }));

    return (
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
          Project Timeline Distribution
        </h3>
        <div style={{ display: "flex", alignItems: "center", height: "60px", gap: "4px" }}>
          {phasesData.map((phase, index) => (
            <div
              key={phase.fullName}
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
    const getColor = (value: number) => {
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
          
          {metrics.riskAssessment.map((risk) => (
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
    return (
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
          Resource Allocation by Phase (%)
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "0.5rem", alignItems: "center" }}>
          <div style={{ fontWeight: "600", color: "#374151" }}>Role</div>
          <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Initiation</div>
          <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Planning</div>
          <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Implementation</div>
          <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Testing</div>
          <div style={{ fontWeight: "600", color: "#374151", textAlign: "center", fontSize: "0.875rem" }}>Handover</div>
          
          {metrics.resourceAllocation.map((resource) => (
            <React.Fragment key={resource.role}>
              <div style={{ fontWeight: "500", color: "#4b5563", fontSize: "0.875rem" }}>{resource.role}</div>
              {[resource.initiation, resource.planning, resource.implementation, resource.testing, resource.handover].map((value, index) => (
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
    return (
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "600", color: "#111827" }}>
          KPI Progress Tracking
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {metrics.kpiProgress.map((kpi) => {
            // Parse current and target values for progress calculation
            const currentValue = kpi.current === "—" ? 0 : parseFloat(kpi.current.replace(/[<>%]/g, ''));
            const targetValue = parseFloat(kpi.target.replace(/[<>%]/g, ''));
            const percentage = targetValue > 0 ? (currentValue / targetValue) * 100 : 0;
            
            const getColor = (current: string, target: string) => {
              if (current === "—") return "#6b7280";
              if (target.includes(">")) {
                return currentValue >= targetValue ? "#10b981" : "#f59e0b";
              }
              if (target.includes("<")) {
                return currentValue <= targetValue ? "#10b981" : "#ef4444";
              }
              return currentValue >= targetValue ? "#10b981" : "#f59e0b";
            };

            const color = getColor(kpi.current, kpi.target);

            return (
              <div key={kpi.metric} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "200px", fontWeight: "500", color: "#374151", fontSize: "0.875rem" }}>
                  {kpi.metric}
                </div>
                <div style={{ flex: 1, background: "#e5e7eb", borderRadius: "10px", height: "20px", overflow: "hidden" }}>
                  <div style={{
                    background: color,
                    width: kpi.current === "—" ? "0%" : `${Math.min(percentage, 100)}%`,
                    height: "100%",
                    borderRadius: "10px",
                    transition: "width 0.3s ease"
                  }} />
                </div>
                <div style={{ width: "80px", textAlign: "right", fontSize: "0.875rem", fontWeight: "600", color: "#374151" }}>
                  {kpi.current}/{kpi.target}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f9fafb", minHeight: "100vh", padding: "3rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "800", color: "#111827", marginBottom: "1rem" }}>
        Large Government Project Delivery Process
      </h1>
      <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "3rem", fontSize: "1.1rem" }}>
        {context}
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
        Project Phases
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
              {phase.id}. {phase.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "#374151", marginBottom: "1rem" }}>{phase.description}</p>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Core Roles:</p>
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
              <strong>Timeline:</strong> {phase.timeline}
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
        Key Insights & Governance
      </h3>
      <ul style={{ color: "#4b5563", paddingLeft: "1.5rem", marginTop: "0.5rem", lineHeight: "1.8" }}>
        {keyInsights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
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

export default LargeGovernmentProjects;
