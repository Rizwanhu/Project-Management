import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Download, Copy, FileText, ArrowRight, BookOpen, Shield, Target, Workflow, Bot, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import FileUpload from "@/components/FileUpload";
import { UploadedFile } from "@/utils/fileUploadUtils";

const ProfessionalGenerator = () => {
  const [projectType, setProjectType] = useState("");
  const [duration, setDuration] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [complexity, setComplexity] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [showResult, setShowResult] = useState(false);

  // AI Generator state - STRICTLY FOR THREE PROJECT TYPES
  const [aiProjectType, setAiProjectType] = useState("");
  const [aiAdditionalContext, setAiAdditionalContext] = useState("");
  const [aiRecommendation, setAiRecommendation] = useState("");
  const [showAiResult, setShowAiResult] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  // Framework-specific recommendations
  const frameworkRecommendations = {
    pmbok: {
      title: "PMBOK 7th Edition",
      icon: <Workflow className="h-5 w-5" />,
      color: "blue",
      strengths: ["Adaptive environments", "Value-focused leadership", "Complexity management", "Team psychological safety"],
    },
    prince2: {
      title: "PRINCE2 7th Edition",
      icon: <Shield className="h-5 w-5" />,
      color: "green", 
      strengths: ["Structured control", "High-risk projects", "Clear governance", "Product-focused planning"],
    },
    iso: {
      title: "ISO 21502",
      icon: <Target className="h-5 w-5" />,
      color: "purple",
      strengths: ["Standardized settings", "Strategic alignment", "Organizational integration", "Compliance focus"],
    }
  };

  const generateDetailedRecommendation = () => {
    // ... (keep your existing professional generator logic)
  };

  const generateAiRecommendation = async () => {
    if (!aiProjectType) {
      toast.error("Please select a project type");
      return;
    }

    setIsGenerating(true);

    try {
      const systemPrompt = `You are an expert project management consultant specializing in PMBOK 7, PRINCE2 7, and ISO 21502 standards. You provide comprehensive, actionable process recommendations that strictly follow the specified project contexts and include detailed framework citations.`;

      // Define exact contexts for each project type
      const projectContexts = {
        "custom-software": {
          context: "Well-defined requirements, <6 months, <7 team members",
          deliverable: "A lightweight process (phases, activities, deliverables) optimized for speed and flexibility"
        },
        "innovative-product": {
          context: "R&D-heavy, uncertain outcomes, ~1 year duration", 
          deliverable: "A hybrid or adaptive process that balances innovation, iteration, and stakeholder management"
        },
        "large-government": {
          context: "Civil, electrical, and IT components, 2-year duration",
          deliverable: "A comprehensive process covering governance, compliance, procurement, risk management, and reporting"
        }
      };

      const context = projectContexts[aiProjectType];
      
      const userPrompt = `Generate a comprehensive project management process for the following project type:

PROJECT TYPE: ${aiProjectType === 'custom-software' ? 'Custom Software Development Project' : 
                aiProjectType === 'innovative-product' ? 'Innovative Product Development Project' : 
                'Large Government Project'}

CONTEXT: ${context.context}
DELIVERABLE: ${context.deliverable}

ADDITIONAL CONTEXT: ${aiAdditionalContext || "None provided"}

${uploadedFile ? `
UPLOADED PROJECT DOCUMENT:
File Name: ${uploadedFile.name}
File Type: ${uploadedFile.type}
File Size: ${uploadedFile.size} bytes

Document Content:
${uploadedFile.content}
` : ''}

STRICT REQUIREMENTS - YOUR RESPONSE MUST INCLUDE:

1. PHASES: Clear project phases with timeframes
2. KEY ACTIVITIES: Specific activities for each phase
3. ROLES: Key roles and responsibilities  
4. ARTIFACTS/DELIVERABLES: Specific deliverables for each phase
5. DECISION GATES: Clear decision points between phases

6. FRAMEWORK CITATIONS: For each major component, cite specific parts of:
   - PMBOK 7 (e.g., [PMBOK: Planning Performance Domain])
   - PRINCE2 7 (e.g., [PRINCE2: Business Case Theme]) 
   - ISO 21502 (e.g., [ISO: Project Governance])

7. TAILORING JUSTIFICATIONS: Explain why you selected or omitted certain practices from each framework

FORMAT YOUR RESPONSE AS:

PROJECT MANAGEMENT PROCESS FOR [PROJECT TYPE]
=============================================

CONTEXT & OBJECTIVES
-------------------
[Brief overview of the project context and process objectives]

PROCESS PHASES
-------------
[Phase 1]: [Timeframe]
• Key Activities: [List]
• Roles: [List] 
• Deliverables: [List]
• Decision Gate: [Description]
• Framework Citations: [Specific citations with justifications]

[Phase 2]: [Timeframe] 
• Key Activities: [List]
• Roles: [List]
• Deliverables: [List] 
• Decision Gate: [Description]
• Framework Citations: [Specific citations with justifications]

[Continue for all phases...]

TAILORING RATIONALE
------------------
PMBOK 7 Tailoring:
• Selected: [Practices] because [justification]
• Omitted: [Practices] because [justification]

PRINCE2 7 Tailoring:
• Selected: [Practices] because [justification] 
• Omitted: [Practices] because [justification]

ISO 21502 Tailoring:
• Selected: [Practices] because [justification]
• Omitted: [Practices] because [justification]

SUCCESS METRICS
--------------
[Key performance indicators and success measures]`;

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API key not found. Please check your .env file.');
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\n${userPrompt}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated";

      setAiRecommendation(generatedText);
      setShowAiResult(true);
      toast.success("AI process recommendation generated successfully");
    } catch (error) {
      console.error('Error generating AI recommendation:', error);
      toast.error("Failed to generate AI recommendation. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(recommendation);
    toast.success("Professional analysis copied to clipboard");
  };

  const copyAiToClipboard = () => {
    navigator.clipboard.writeText(aiRecommendation);
    toast.success("AI recommendation copied to clipboard");
  };

  const downloadPDF = () => {
    // ... (keep your existing PDF download logic)
  };

  const downloadAiPDF = () => {
    if (!aiRecommendation) return;
    
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
    
    const projectTitle = aiProjectType === 'custom-software' ? 'Custom Software Development Process' :
                        aiProjectType === 'innovative-product' ? 'Innovative Product Development Process' :
                        'Large Government Project Process';
    
    pdf.text(projectTitle, margin, 18);
    pdf.setFontSize(10);
    pdf.text("AI-Generated Process with Framework Citations", margin, 25);

    // Process the AI recommendation text
    const lines = aiRecommendation.split('\n');
    yPosition = 40;

    lines.forEach(line => {
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = margin;
      }

      // Section headers
      if (line.includes("===") || line.includes("---")) {
        return;
      }

      if (line.toUpperCase() === line && line.length > 0 && line.trim() !== '') {
        // Main section heading
        pdf.setFontSize(12);
        pdf.setTextColor(15, 23, 42);
        pdf.setFont("helvetica", "bold");
        pdf.text(line, margin, yPosition);
        yPosition += 8;
      } else if (line.startsWith("•") || line.startsWith("-")) {
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

    pdf.save(`${projectTitle.toLowerCase().replace(/ /g, '-')}.pdf`);
    toast.success("Process document downloaded");
  };

  const reset = () => {
    setProjectType("");
    setDuration("");
    setRiskLevel("");
    setComplexity("");
    setRecommendation("");
    setShowResult(false);
  };

  const resetAi = () => {
    setAiProjectType("");
    setAiAdditionalContext("");
    setAiRecommendation("");
    setShowAiResult(false);
    setUploadedFile(null);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800", 
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    };
    return colors[color] || colors.blue;
  };

  const getProjectContext = (type) => {
    switch (type) {
      case "custom-software":
        return "Well-defined requirements, <6 months, <7 team members. Lightweight process optimized for speed and flexibility.";
      case "innovative-product":
        return "R&D-heavy, uncertain outcomes, ~1 year duration. Hybrid adaptive process balancing innovation, iteration, and stakeholder management.";
      case "large-government":
        return "Civil, electrical, and IT components, 2-year duration. Comprehensive process covering governance, compliance, procurement, risk management, and reporting.";
      default:
        return "Select a project type to see specific context and requirements.";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">Project Management Process Generator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered process generation for three specific project types with PMBOK, PRINCE2, and ISO citations
        </p>
      </div>

      {/* AI Process Generator Section - STRICTLY THREE TYPES */}
      <div className="mt-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* AI Configuration Panel */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4 border-b bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900">Process Configuration</CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    Select one of three specific project types for AI-powered process generation
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Project Type Selection - REQUIRED */}
              <div className="space-y-3">
                <Label htmlFor="ai-project-type" className="text-sm font-medium text-gray-700">
                  Project Type *
                </Label>
                <Select value={aiProjectType} onValueChange={setAiProjectType}>
                  <SelectTrigger id="ai-project-type" className="h-12 border-gray-300">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom-software">
                      <div className="flex flex-col">
                        <span className="font-medium">Custom Software Development</span>
                        <span className="text-xs text-gray-500">Well-defined requirements, &lt;6 months, &lt;7 team members</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="innovative-product">
                      <div className="flex flex-col">
                        <span className="font-medium">Innovative Product Development</span>
                        <span className="text-xs text-gray-500">R&D-heavy, uncertain outcomes, ~1 year duration</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="large-government">
                      <div className="flex flex-col">
                        <span className="font-medium">Large Government Project</span>
                        <span className="text-xs text-gray-500">Civil, electrical, IT components, 2-year duration</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Context Display */}
                {aiProjectType && (
                  <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Context:</strong> {getProjectContext(aiProjectType)}
                    </p>
                  </div>
                )}
              </div>

              {/* Additional Context */}
              <div className="space-y-3">
                <Label htmlFor="ai-additional-context" className="text-sm font-medium text-gray-700">
                  Additional Project Details (Optional)
                </Label>
                <Textarea
                  id="ai-additional-context"
                  placeholder="Add any specific requirements, constraints, or additional context for your project..."
                  value={aiAdditionalContext}
                  onChange={(e) => setAiAdditionalContext(e.target.value)}
                  className="min-h-[100px] border-gray-300"
                />
              </div>

              {/* File Upload Section */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  Upload Project Document (Optional)
                </Label>
                <FileUpload
                  onFileUpload={setUploadedFile}
                  uploadedFile={uploadedFile}
                  disabled={isGenerating}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={generateAiRecommendation} 
                  className="flex-1 h-12 text-base bg-purple-600 hover:bg-purple-700"
                  disabled={!aiProjectType || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating Process...
                    </>
                  ) : (
                    <>
                      <Bot className="w-4 h-4 mr-2" />
                      Generate Custom Process
                    </>
                  )}
                </Button>
                {showAiResult && (
                  <Button onClick={resetAi} variant="outline" className="h-12 border-gray-300">
                    Reset
                  </Button>
                )}
              </div>

              {/* Requirements Info */}
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Process Includes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Phases with timeframes and activities</li>
                  <li>• Roles and responsibilities</li>
                  <li>• Artifacts and deliverables</li>
                  <li>• Decision gates between phases</li>
                  <li>• PMBOK, PRINCE2, and ISO citations</li>
                  <li>• Framework tailoring justifications</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* AI Results Panel */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4 border-b bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Generated Process</CardTitle>
                    <CardDescription className="text-gray-600">
                      {showAiResult ? "AI process generated with framework citations" : "Select project type to generate process"}
                    </CardDescription>
                  </div>
                </div>
                {showAiResult && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyAiToClipboard} className="h-9 border-gray-300">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadAiPDF} className="h-9 border-gray-300">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {showAiResult ? (
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {aiProjectType === 'custom-software' ? 'Custom Software Development Process' :
                           aiProjectType === 'innovative-product' ? 'Innovative Product Development Process' :
                           'Large Government Project Process'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                            {aiProjectType === 'custom-software' ? '<6 months, <7 team' :
                             aiProjectType === 'innovative-product' ? '~1 year, R&D focus' :
                             '2 years, multi-component'}
                          </Badge>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                            PMBOK 7 Cited
                          </Badge>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                            PRINCE2 7 Cited
                          </Badge>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                            ISO 21502 Cited
                          </Badge>
                          {uploadedFile && (
                            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-200">
                              📄 Document Analyzed
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Process Analysis */}
                  <div className="rounded-lg border border-gray-200 bg-white">
                    <div className="border-b bg-gray-50 px-4 py-3">
                      <h3 className="font-semibold text-gray-900">Complete Process with Framework Citations</h3>
                    </div>
                    <div className="p-4 max-h-[600px] overflow-y-auto">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-700 font-mono">
                        {aiRecommendation}
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                  <div className="text-center text-gray-500">
                    <Bot className="mx-auto mb-4 h-16 w-16 opacity-20" />
                    <h3 className="mb-2 text-lg font-medium text-gray-600">Ready to Generate Process</h3>
                    <p className="max-w-sm text-sm text-gray-500">
                      Select one of the three project types to generate a complete process with PMBOK, PRINCE2, and ISO citations.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Framework Information */}
      <div className="mt-12">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="text-xl text-gray-900">Supported Frameworks</CardTitle>
            <CardDescription>All generated processes include citations from these industry standards</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              {Object.entries(frameworkRecommendations).map(([key, framework]) => (
                <Card key={key} className={`border-l-4 border-l-${framework.color}-500 ${getColorClasses(framework.color)}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded bg-${framework.color}-100`}>
                        {framework.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold">{framework.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600 space-y-2">
                      {framework.strengths.map((strength, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                          <span>{strength}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalGenerator;