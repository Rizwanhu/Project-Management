import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Settings, Download, Copy, FileText, ArrowRight, BookOpen, Shield, Target, Workflow } from "lucide-react";
import { toast } from "sonner";
import { jsPDF } from "jspdf";

const ProfessionalGenerator = () => {
  const [projectType, setProjectType] = useState("");
  const [duration, setDuration] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [complexity, setComplexity] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Framework-specific recommendations based on your document analysis
  const frameworkRecommendations = {
    pmbok: {
      title: "PMBOK 7th Edition",
      icon: <Workflow className="h-5 w-5" />,
      color: "blue",
      strengths: ["Adaptive environments", "Value-focused leadership", "Complexity management", "Team psychological safety"],
      principles: [
        "Stewardship & Ethics",
        "Team Collaboration", 
        "Stakeholder Engagement",
        "Value Focus",
        "Systems Thinking",
        "Leadership & Tailoring",
        "Quality & Complexity",
        "Risk Opportunities",
        "Adaptability",
        "Change Management"
      ]
    },
    prince2: {
      title: "PRINCE2 7th Edition",
      icon: <Shield className="h-5 w-5" />,
      color: "green",
      strengths: ["Structured control", "High-risk projects", "Clear governance", "Product-focused planning"],
      principles: [
        "Continued Business Justification",
        "Learn from Experience",
        "Defined Roles & Responsibilities",
        "Manage by Stages", 
        "Manage by Exception",
        "Focus on Products",
        "Tailor to Suit Project"
      ]
    },
    iso: {
      title: "ISO 21502",
      icon: <Target className="h-5 w-5" />,
      color: "purple",
      strengths: ["Standardized settings", "Strategic alignment", "Organizational integration", "Compliance focus"],
      focus: [
        "Organizational Environment & Context",
        "Integrated Governance with Strategy",
        "Relationship with Operations",
        "Programme & Portfolio Interfaces",
        "Standardized Processes",
        "Competence & Organizational Enablers",
        "Conformance & Auditing"
      ]
    }
  };

  const generateDetailedRecommendation = () => {
    if (!projectType || !duration || !riskLevel || !complexity) {
      toast.error("Please complete all configuration fields");
      return;
    }

    let rec = "PROFESSIONAL PROJECT MANAGEMENT FRAMEWORK ANALYSIS\n\n";
    
    // Project Profile Summary
    rec += "PROJECT PROFILE ASSESSMENT\n";
    rec += "=========================\n\n";
    rec += `• Project Classification: ${projectType.charAt(0).toUpperCase() + projectType.slice(1)}\n`;
    rec += `• Engagement Timeline: ${duration.charAt(0).toUpperCase() + duration.slice(1)}-term\n`;
    rec += `• Risk Exposure: ${riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}\n`;
    rec += `• Complexity Factors: ${complexity.charAt(0).toUpperCase() + complexity.slice(1)}\n\n`;

    // Primary Framework Recommendation
    rec += "PRIMARY FRAMEWORK RECOMMENDATION\n";
    rec += "================================\n\n";
    
    let primaryFramework = "";
    let secondaryFramework = "";
    
    // Decision logic based on your document analysis
    if (projectType === "software" && complexity === "high") {
      primaryFramework = "PMBOK 7th Edition";
      secondaryFramework = "PRINCE2 Agile";
      rec += "PRIMARY: PMBOK 7th Edition\n";
      rec += "Rationale: Optimal for adaptive software development environments with high complexity requirements\n\n";
      rec += "SECONDARY: PRINCE2 Agile\n";
      rec += "Rationale: Provides structured governance framework for agile project environments\n\n";
    } else if (projectType === "construction" && riskLevel === "high") {
      primaryFramework = "PRINCE2 7th Edition";
      secondaryFramework = "ISO 21502";
      rec += "PRIMARY: PRINCE2 7th Edition\n";
      rec += "Rationale: Superior stage-based control for high-risk construction projects with complex deliverables\n\n";
      rec += "SECONDARY: ISO 21502\n";
      rec += "Rationale: Ensures compliance adherence and standardized process implementation\n\n";
    } else if (projectType === "research" && complexity === "high") {
      primaryFramework = "PMBOK 7th Edition";
      secondaryFramework = "ISO 21502";
      rec += "PRIMARY: PMBOK 7th Edition\n";
      rec += "Rationale: Supports adaptive research methodologies with advanced complexity management\n\n";
      rec += "SECONDARY: ISO 21502\n";
      rec += "Rationale: Provides organizational context framework and strategic alignment protocols\n\n";
    } else if (riskLevel === "low" && complexity === "low") {
      primaryFramework = "ISO 21502";
      secondaryFramework = "PMBOK Principles";
      rec += "PRIMARY: ISO 21502\n";
      rec += "Rationale: Efficient standardized approach for low-risk, low-complexity project environments\n\n";
      rec += "SECONDARY: PMBOK Principles\n";
      rec += "Rationale: Foundational guidance framework without excessive process overhead\n\n";
    } else {
      primaryFramework = "Hybrid Approach";
      secondaryFramework = "All Frameworks";
      rec += "PRIMARY: Hybrid Methodology\n";
      rec += "Rationale: Custom framework synthesis based on multi-dimensional project characteristics\n\n";
      rec += "SECONDARY: Selective Integration\n";
      rec += "Rationale: Strategic selection of best practices across all major frameworks\n\n";
    }

    // Detailed Implementation Plan
    rec += "IMPLEMENTATION STRATEGY\n";
    rec += "======================\n\n";

    // Governance & Leadership
    rec += "1. GOVERNANCE & LEADERSHIP STRUCTURE\n";
    if (primaryFramework.includes("PMBOK")) {
      rec += "• Implement value-focused governance aligned with organizational objectives\n";
      rec += "• Establish ethical stewardship principles and psychological safety protocols\n";
      rec += "• Apply systems thinking methodology for holistic project oversight\n";
      rec += "• Create adaptive decision-making frameworks based on project context\n";
    }
    if (primaryFramework.includes("PRINCE2")) {
      rec += "• Constitute Project Board with Executive, Senior User, and Senior Supplier roles\n";
      rec += "• Implement management by exception with defined tolerance parameters\n";
      rec += "• Define comprehensive RACI matrices and accountability structures\n";
      rec += "• Establish stage boundary controls for major decision milestones\n";
    }
    if (primaryFramework.includes("ISO")) {
      rec += "• Align project governance with organizational governance framework\n";
      rec += "• Establish strategic integration protocols with portfolio management\n";
      rec += "• Ensure compliance adherence with organizational standards\n";
      rec += "• Implement auditing and conformance monitoring processes\n";
    }
    rec += "\n";

    // Planning & Scope Management
    rec += "2. PLANNING & SCOPE METHODOLOGY\n";
    if (primaryFramework.includes("PMBOK")) {
      rec += "• Implement iterative planning cycles within performance domains\n";
      rec += "• Develop adaptive scope management with regular review cadence\n";
      rec += "• Utilize appropriate models and artifacts from framework guidance\n";
      rec += "• Establish continuous planning alignment with evolving requirements\n";
    }
    if (primaryFramework.includes("PRINCE2")) {
      rec += "• Apply product-based planning with breakdown structures\n";
      rec += "• Implement stage management with clearly defined boundaries\n";
      rec += "• Develop comprehensive management products and documentation\n";
      rec += "• Establish product description libraries and acceptance criteria\n";
    }
    if (primaryFramework.includes("ISO")) {
      rec += "• Define scope with clear deliverables and acceptance criteria\n";
      rec += "• Align planning activities with organizational life cycle\n";
      rec += "• Implement standardized scope control processes\n";
      rec += "• Establish planning templates and organizational assets\n";
    }
    rec += "\n";

    // Risk & Issue Management
    rec += "3. RISK & ISSUE MANAGEMENT FRAMEWORK\n";
    if (riskLevel === "high") {
      rec += "• Implement formal risk management practices with comprehensive registers\n";
      rec += "• Establish probability-impact assessment protocols\n";
      rec += "• Conduct regular risk review cycles with stakeholder engagement\n";
      rec += "• Develop comprehensive risk response and mitigation strategies\n";
    } else if (riskLevel === "medium") {
      rec += "• Apply balanced risk management focusing on threats and opportunities\n";
      rec += "• Implement streamlined risk identification and assessment processes\n";
      rec += "• Establish regular risk review meetings at key milestones\n";
      rec += "• Maintain risk log with owner assignments and treatment plans\n";
    } else {
      rec += "• Implement lightweight risk management focusing on major threats\n";
      rec += "• Maintain basic risk register for tracking and resolution\n";
      rec += "• Conduct risk assessment at project initiation and major phase gates\n";
    }
    rec += "\n";

    // Stakeholder Engagement
    rec += "4. STAKEHOLDER ENGAGEMENT STRATEGY\n";
    rec += "• Implement proactive stakeholder identification and analysis\n";
    rec += "• Develop stakeholder engagement assessment matrices\n";
    rec += "• Establish regular communication and feedback mechanisms\n";
    rec += "• Monitor stakeholder engagement levels throughout project lifecycle\n";
    if (complexity === "high") {
      rec += "• Conduct sentiment analysis for stakeholder perception monitoring\n";
      rec += "• Implement collaborative requirement elicitation sessions\n";
      rec += "• Establish stakeholder expectation management processes\n";
    }
    rec += "\n";

    // Quality Management
    rec += "5. QUALITY ASSURANCE APPROACH\n";
    if (primaryFramework.includes("PRINCE2")) {
      rec += "• Implement quality register for tracking quality activities\n";
      rec += "• Apply product-focused quality criteria and verification\n";
      rec += "• Establish quality planning with defined methods and responsibilities\n";
      rec += "• Conduct quality reviews at product completion milestones\n";
    } else if (primaryFramework.includes("PMBOK")) {
      rec += "• Integrate quality into project processes rather than inspection\n";
      rec += "• Define clear acceptance criteria within delivery domain\n";
      rec += "• Focus on preventive quality measures and continuous improvement\n";
      rec += "• Establish quality metrics aligned with stakeholder expectations\n";
    } else {
      rec += "• Follow quality standards with verification processes\n";
      rec += "• Implement quality control through inspections and testing\n";
      rec += "• Ensure deliverables meet required standards and specifications\n";
      rec += "• Maintain quality records for audit and compliance purposes\n";
    }
    rec += "\n";

    // Tailoring Recommendations
    rec += "FRAMEWORK TAILORING GUIDANCE\n";
    rec += "============================\n\n";
    rec += "Context-Based Adaptation Recommendations:\n\n";
    
    if (duration === "short") {
      rec += "• Accelerate governance processes while maintaining key decision points\n";
      rec += "• Implement lightweight documentation focusing on essential artifacts\n";
      rec += "• Establish daily coordination and weekly review cycles\n";
    } else if (duration === "long") {
      rec += "• Strengthen stage governance with formal boundary controls\n";
      rec += "• Implement benefits realization tracking throughout lifecycle\n";
      rec += "• Plan for organizational change management over extended timeline\n";
    }
    
    if (complexity === "high") {
      rec += "• Apply complexity management frameworks and systems thinking\n";
      rec += "• Enhance stakeholder analysis and engagement frequency\n";
      rec += "• Implement adaptive leadership and decision-making approaches\n";
    }
    
    rec += "\n";

    // Success Metrics
    rec += "PERFORMANCE MEASUREMENT FRAMEWORK\n";
    rec += "==================================\n\n";
    rec += "Recommended Performance Indicators:\n";
    rec += "• Scope, schedule, cost, and quality metrics\n";
    rec += "• Stakeholder satisfaction and engagement levels\n";
    rec += "• Risk management effectiveness measures\n";
    rec += "• Quality assurance and control metrics\n";
    rec += "• Benefit realization and value delivery tracking\n";
    rec += "\n";

    // Continuous Improvement
    rec += "CONTINUOUS IMPROVEMENT PROTOCOLS\n";
    rec += "================================\n\n";
    rec += "• Capture and document lessons learned throughout project lifecycle\n";
    rec += "• Maintain formal knowledge repositories and lessons logs\n";
    rec += "• Conduct regular retrospectives and improvement sessions\n";
    rec += "• Implement process refinement based on performance data\n";
    rec += "• Establish organizational learning and knowledge sharing\n";

    setRecommendation(rec);
    setShowResult(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(recommendation);
    toast.success("Professional analysis copied to clipboard");
  };

  const downloadPDF = () => {
    if (!recommendation) return;
    
    const pdf = new jsPDF({ unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = margin;

    // Professional Header
    pdf.setFillColor(15, 23, 42);
    pdf.rect(0, 0, pageWidth, 30, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("PROJECT MANAGEMENT FRAMEWORK ADVISORY", margin, 18);
    pdf.setFontSize(10);
    pdf.text("Professional Standards-Based Recommendation", margin, 25);

    // Project Context
    yPosition = 40;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("PROJECT CONTEXT ANALYSIS", margin, yPosition);
    
    yPosition += 8;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(`Project Classification: ${projectType.charAt(0).toUpperCase() + projectType.slice(1)}`, margin, yPosition);
    pdf.text(`Engagement Timeline: ${duration.charAt(0).toUpperCase() + duration.slice(1)}-term`, pageWidth/2, yPosition);
    yPosition += 5;
    pdf.text(`Risk Exposure: ${riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}`, margin, yPosition);
    pdf.text(`Complexity Factors: ${complexity.charAt(0).toUpperCase() + complexity.slice(1)}`, pageWidth/2, yPosition);

    // Process the recommendation text
    const lines = recommendation.split('\n');
    yPosition += 15;

    lines.forEach(line => {
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = margin;
      }

      if (line.includes("===") || line.includes("===")) {
        return;
      }

      if (line.toUpperCase() === line && line.length > 0 && !line.includes("•")) {
        // Section heading
        pdf.setFontSize(12);
        pdf.setTextColor(15, 23, 42);
        pdf.setFont("helvetica", "bold");
        pdf.text(line, margin, yPosition);
        yPosition += 8;
      } else if (line.startsWith("•")) {
        // List item
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        const text = line.substring(1).trim();
        const wrapped = pdf.splitTextToSize(text, pageWidth - 2 * margin - 5);
        pdf.text(wrapped, margin + 5, yPosition);
        yPosition += wrapped.length * 5;
      } else if (line.trim() !== '') {
        // Regular text
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        const wrapped = pdf.splitTextToSize(line, pageWidth - 2 * margin);
        pdf.text(wrapped, margin, yPosition);
        yPosition += wrapped.length * 5;
      } else {
        yPosition += 4;
      }
    });

    // Professional Footer
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Page ${i} of ${totalPages}`, margin, 290);
      pdf.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth - margin - 40, 290);
    }

    pdf.save(`professional-pm-recommendation-${projectType}.pdf`);
    toast.success("Professional report downloaded");
  };

  const reset = () => {
    setProjectType("");
    setDuration("");
    setRiskLevel("");
    setComplexity("");
    setRecommendation("");
    setShowResult(false);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">Project Management Framework Advisor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert recommendations synthesizing PMBOK 7, PRINCE2 7, and ISO 21502 standards
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Configuration Panel */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-gray-900">Project Configuration</CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  Define project characteristics for professional framework analysis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-3">
              <Label htmlFor="project-type" className="text-sm font-medium text-gray-700">
                Project Classification
              </Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger id="project-type" className="h-12 border-gray-300">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software">Software Development</SelectItem>
                  <SelectItem value="construction">Construction & Engineering</SelectItem>
                  <SelectItem value="research">Research & Development</SelectItem>
                  <SelectItem value="marketing">Marketing Campaign</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="regulatory">Regulatory Compliance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="duration" className="text-sm font-medium text-gray-700">
                Engagement Timeline
              </Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration" className="h-12 border-gray-300">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short-term (0-6 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (6-18 months)</SelectItem>
                  <SelectItem value="long">Long-term (18+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="risk-level" className="text-sm font-medium text-gray-700">
                Risk Exposure Level
              </Label>
              <Select value={riskLevel} onValueChange={setRiskLevel}>
                <SelectTrigger id="risk-level" className="h-12 border-gray-300">
                  <SelectValue placeholder="Select risk level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="complexity" className="text-sm font-medium text-gray-700">
                Complexity Factors
              </Label>
              <Select value={complexity} onValueChange={setComplexity}>
                <SelectTrigger id="complexity" className="h-12 border-gray-300">
                  <SelectValue placeholder="Select complexity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Complexity</SelectItem>
                  <SelectItem value="medium">Medium Complexity</SelectItem>
                  <SelectItem value="high">High Complexity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                onClick={generateDetailedRecommendation} 
                className="flex-1 h-12 text-base bg-blue-600 hover:bg-blue-700"
                disabled={!projectType || !duration || !riskLevel || !complexity}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Generate Professional Analysis
              </Button>
              {showResult && (
                <Button onClick={reset} variant="outline" className="h-12 border-gray-300">
                  Reset Configuration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4 border-b bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-600 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Framework Recommendation</CardTitle>
                  <CardDescription className="text-gray-600">
                    {showResult ? "Professional analysis complete" : "Awaiting project configuration"}
                  </CardDescription>
                </div>
              </div>
              {showResult && (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={copyToClipboard} className="h-9 border-gray-300">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={downloadPDF} className="h-9 border-gray-300">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {showResult ? (
              <div className="space-y-6">
                {/* Project Profile */}
                <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Project Profile Summary</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 capitalize">
                      {projectType} Project
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200 capitalize">
                      {duration} Timeline
                    </Badge>
                    <Badge variant="secondary" className={
                      riskLevel === 'high' ? 'bg-red-100 text-red-800 border-red-200' : 
                      riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                      'bg-green-100 text-green-800 border-green-200'
                    }>
                      {riskLevel} Risk
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200 capitalize">
                      {complexity} Complexity
                    </Badge>
                  </div>
                </div>

                {/* Framework Highlights */}
                <div className="grid gap-4 md:grid-cols-3">
                  {Object.entries(frameworkRecommendations).map(([key, framework]) => (
                    <Card key={key} className={`border-l-4 border-l-${framework.color}-500 ${getColorClasses(framework.color)}`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className={`p-1 rounded bg-${framework.color}-100`}>
                            {framework.icon}
                          </div>
                          <CardTitle className="text-sm font-semibold">{framework.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-gray-600 space-y-1">
                          {framework.strengths.slice(0, 2).map((strength, index) => (
                            <div key={index} className="flex items-start gap-1">
                              <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                              <span>{strength}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detailed Analysis */}
                <div className="rounded-lg border border-gray-200 bg-white">
                  <div className="border-b bg-gray-50 px-4 py-3">
                    <h3 className="font-semibold text-gray-900">Professional Framework Analysis</h3>
                  </div>
                  <div className="p-4 max-h-[500px] overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-700 font-mono">
                      {recommendation}
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                <div className="text-center text-gray-500">
                  <Settings className="mx-auto mb-4 h-16 w-16 opacity-20" />
                  <h3 className="mb-2 text-lg font-medium text-gray-600">Analysis Pending</h3>
                  <p className="max-w-sm text-sm text-gray-500">
                    Configure your project details to receive a professional framework recommendation based on industry standards.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalGenerator;