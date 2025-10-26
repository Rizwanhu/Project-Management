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
      <div style={{ background: "#fff", padding: "clamp(1rem, 3vw, 1.5rem)", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "clamp(1rem, 3vw, 1.25rem)", fontWeight: "600", color: "#111827" }}>
          Project Timeline Distribution
        </h3>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          height: "clamp(50px, 8vw, 60px)", 
          gap: "clamp(2px, 1vw, 4px)",
          overflowX: "auto",
          paddingBottom: "20px"
        }}>
          {phasesData.map((phase, index) => (
            <div
              key={phase.fullName}
              style={{
                flex: phase.duration,
                background: phase.color,
                height: "clamp(35px, 6vw, 40px)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                position: "relative",
                minWidth: "60px"
              }}
            >
              <span style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)" }}>{phase.name}</span>
              <div style={{
                position: "absolute",
                bottom: "-20px",
                fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                color: "#6b7280",
                fontWeight: "500",
                whiteSpace: "nowrap"
              }}>
                {phase.duration}m
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
      <div style={{ background: "#fff", padding: "clamp(1rem, 3vw, 1.5rem)", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "clamp(1rem, 3vw, 1.25rem)", fontWeight: "600", color: "#111827" }}>
          Risk Assessment Heat Map
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px" }}>
            <thead>
              <tr>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.8rem, 2vw, 1rem)", 
                  textAlign: "left", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Phase
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.8rem, 2vw, 1rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Uncertainty
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.8rem, 2vw, 1rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Complexity
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.8rem, 2vw, 1rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.riskAssessment.map((risk, index) => (
                <tr key={risk.phase} style={{ backgroundColor: index % 2 === 0 ? "#f9fafb" : "transparent" }}>
                  <td style={{ 
                    fontWeight: "500", 
                    color: "#4b5563", 
                    fontSize: "clamp(0.8rem, 2vw, 1rem)", 
                    padding: "clamp(0.5rem, 2vw, 0.75rem)",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    {risk.phase}
                  </td>
                  <td style={{ textAlign: "center", padding: "clamp(0.5rem, 2vw, 0.75rem)", borderBottom: "1px solid #e5e7eb" }}>
                    <div style={{
                      background: getColor(risk.uncertainty),
                      color: "white",
                      padding: "clamp(0.3rem, 1vw, 0.5rem)",
                      borderRadius: "6px",
                      fontWeight: "600",
                      fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                      display: "inline-block",
                      minWidth: "60px"
                    }}>
                      {risk.uncertainty}/10
                    </div>
                  </td>
                  <td style={{ textAlign: "center", padding: "clamp(0.5rem, 2vw, 0.75rem)", borderBottom: "1px solid #e5e7eb" }}>
                    <div style={{
                      background: getColor(risk.complexity),
                      color: "white",
                      padding: "clamp(0.3rem, 1vw, 0.5rem)",
                      borderRadius: "6px",
                      fontWeight: "600",
                      fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                      display: "inline-block",
                      minWidth: "60px"
                    }}>
                      {risk.complexity}/10
                    </div>
                  </td>
                  <td style={{ textAlign: "center", padding: "clamp(0.5rem, 2vw, 0.75rem)", borderBottom: "1px solid #e5e7eb" }}>
                    <div style={{
                      background: getColor(risk.impact),
                      color: "white",
                      padding: "clamp(0.3rem, 1vw, 0.5rem)",
                      borderRadius: "6px",
                      fontWeight: "600",
                      fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                      display: "inline-block",
                      minWidth: "60px"
                    }}>
                      {risk.impact}/10
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const ResourceAllocationChart = () => {
    return (
      <div style={{ background: "#fff", padding: "clamp(1rem, 3vw, 1.5rem)", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "clamp(1rem, 3vw, 1.25rem)", fontWeight: "600", color: "#111827" }}>
          Resource Allocation by Phase (%)
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
            <thead>
              <tr>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.8rem, 2vw, 1rem)", 
                  textAlign: "left", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Role
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Initiation
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Planning
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Implementation
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Testing
                </th>
                <th style={{ 
                  fontWeight: "600", 
                  color: "#374151", 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                  textAlign: "center", 
                  padding: "clamp(0.5rem, 2vw, 0.75rem)",
                  borderBottom: "2px solid #e5e7eb"
                }}>
                  Handover
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.resourceAllocation.map((resource, index) => (
                <tr key={resource.role} style={{ backgroundColor: index % 2 === 0 ? "#f9fafb" : "transparent" }}>
                  <td style={{ 
                    fontWeight: "500", 
                    color: "#4b5563", 
                    fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                    padding: "clamp(0.5rem, 2vw, 0.75rem)",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    {resource.role}
                  </td>
                  {[resource.initiation, resource.planning, resource.implementation, resource.testing, resource.handover].map((value, colIndex) => (
                    <td key={colIndex} style={{ textAlign: "center", padding: "clamp(0.5rem, 2vw, 0.75rem)", borderBottom: "1px solid #e5e7eb" }}>
                      <div style={{
                        background: "#3b82f6",
                        height: "clamp(15px, 3vw, 20px)",
                        width: `${value}%`,
                        margin: "0 auto",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                        fontWeight: "600",
                        minWidth: "clamp(25px, 5vw, 30px)"
                      }}>
                        {value}%
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const KpiProgressChart = () => {
    return (
      <div style={{ background: "#fff", padding: "clamp(1rem, 3vw, 1.5rem)", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h3 style={{ marginBottom: "1rem", fontSize: "clamp(1rem, 3vw, 1.25rem)", fontWeight: "600", color: "#111827" }}>
          KPI Progress Tracking
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(0.8rem, 2vw, 1rem)" }}>
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
              <div key={kpi.metric} style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "clamp(0.5rem, 2vw, 1rem)",
                flexWrap: "wrap"
              }}>
                <div style={{ 
                  minWidth: "clamp(150px, 30vw, 200px)", 
                  fontWeight: "500", 
                  color: "#374151", 
                  fontSize: "clamp(0.8rem, 2vw, 0.875rem)" 
                }}>
                  {kpi.metric}
                </div>
                <div style={{ 
                  flex: 1, 
                  background: "#e5e7eb", 
                  borderRadius: "10px", 
                  height: "clamp(15px, 3vw, 20px)", 
                  overflow: "hidden",
                  minWidth: "100px"
                }}>
                  <div style={{
                    background: color,
                    width: kpi.current === "—" ? "0%" : `${Math.min(percentage, 100)}%`,
                    height: "100%",
                    borderRadius: "10px",
                    transition: "width 0.3s ease"
                  }} />
                </div>
                <div style={{ 
                  minWidth: "clamp(60px, 15vw, 80px)", 
                  textAlign: "right", 
                  fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", 
                  fontWeight: "600", 
                  color: "#374151" 
                }}>
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f9fafb", minHeight: "100vh", padding: "1rem" }}>
      <div className="container mx-auto max-w-6xl px-4">
        <h1 style={{ textAlign: "center", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: "800", color: "#111827", marginBottom: "1rem" }}>
          Large Government Project Delivery Process
        </h1>
        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "3rem", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: "1.6" }}>
          {context}
        </p>

      {/* Visual Charts Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: "700", color: "#111827", marginBottom: "1.5rem", textAlign: "center" }}>
          Project Overview & Metrics
        </h2>
        <TimelineChart />
        <RiskHeatMap />
        <ResourceAllocationChart />
        <KpiProgressChart />
      </div>

      {/* Process Phases */}
      <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: "700", color: "#111827", marginBottom: "1.5rem", textAlign: "center" }}>
        Project Phases
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        {phases.map((phase, idx) => (
          <div
            key={phase.id}
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "clamp(1rem, 4vw, 2rem)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              borderLeft: `10px solid ${["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"][idx]}`,
              transition: "transform 0.2s",
            }}
          >
            <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" }}>
              {phase.id}. {phase.name}
            </h2>
            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#374151", marginBottom: "1rem", lineHeight: "1.6" }}>{phase.description}</p>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>Core Roles:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                {phase.roles.map((role, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#e0f2fe",
                      color: "#0369a1",
                      padding: "clamp(0.25rem, 1vw, 0.35rem) clamp(0.5rem, 2vw, 0.7rem)",
                      borderRadius: "6px",
                      fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
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
              <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>Activities:</p>
              <ul style={{ paddingLeft: "1.5rem", color: "#4b5563", listStyleType: "disc" }}>
                {phase.activities.map((act, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem", fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: "1.5" }}>
                    {act}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
              <strong>Deliverables:</strong> {phase.deliverables.join(", ")}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
              <strong>Timeline:</strong> {phase.timeline}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
              <strong>Risks:</strong> {phase.risks.join(", ")}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
              <strong>KPIs:</strong> {phase.kpis.join(", ")}
            </p>
            <p style={{ color: "#374151", marginBottom: "0.5rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
              <strong>Decision Gate:</strong> {phase.decisionGate}
            </p>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>Standards References:</p>
              <ul style={{ paddingLeft: "1.5rem", color: "#4b5563" }}>
                {phase.standardsRefs.map((ref, i) => (
                  <li key={i} style={{ marginBottom: "0.3rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
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

            <p style={{ color: "#374151", fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: "1.5" }}>
              <strong>Tailoring Justification:</strong> {phase.tailoringJustification}
            </p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "3rem", fontSize: "clamp(1.2rem, 4vw, 1.6rem)", fontWeight: "700", color: "#111827" }}>
        Key Insights & Governance
      </h3>
      <ul style={{ color: "#4b5563", paddingLeft: "1.5rem", marginTop: "0.5rem", lineHeight: "1.8" }}>
        {keyInsights.map((insight, index) => (
          <li key={index} style={{ marginBottom: "0.5rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>{insight}</li>
        ))}
      </ul>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <Link to="/library">
          <button style={{
            background: "#3b82f6",
            color: "white",
            padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 4vw, 1.5rem)",
            borderRadius: "8px",
            border: "none",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "none"
          }}>
            Explore Full Standards Library
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default LargeGovernmentProjects;
