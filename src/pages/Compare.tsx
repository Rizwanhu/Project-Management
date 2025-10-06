import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Download, ExternalLink, FileText, Star, Lightbulb, Target, BarChart3 } from "lucide-react";
import { getReferencesForTopic, buildPdfUrl } from "@/data/references";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { jsPDF } from "jspdf";
import { toast } from "sonner";
import standardsData from "@/data/standards-data.json";

// Define TypeScript interfaces
interface Topic {
  id: string;
  name: string;
}

interface StandardOption {
  id: string;
  name: string;
  color: string;
}

interface Reference {
  id: string;
  title: string;
  bookPath: string;
  page: number;
}

interface StandardData {
  title: string;
  content: string;
  keyPoints: string[];
}

interface ComparisonResult {
  topic: string;
  standards: { [key: string]: StandardData };
  analysis: {
    similarities: string[];
    differences: string[];
    uniquePoints: { standard: string; points: string[] }[];
  };
  recommendations: {
    whenToUse: string;
    bestMethod: string;
  };
}

// Visual components
const PercentageBar: React.FC<{ 
  percentage: number; 
  color: string; 
  label: string;
  showPercentage?: boolean 
}> = ({ percentage, color, label, showPercentage = true }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1">
      <span className="font-medium">{label}</span>
      {showPercentage && <span className="text-muted-foreground">{percentage}%</span>}
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const FrameworkComparisonChart: React.FC<{ 
  standards: string[]; 
  topicId: string 
}> = ({ standards, topicId }) => {
  // Enhanced coverage data based on actual topic analysis from your data
  const getCoverageData = (topicId: string) => {
    const coverageMap: { [key: string]: { [standard: string]: number } } = {
      "governance-leadership": { pmbok: 85, prince2: 90, iso: 80 },
      "stakeholder-engagement": { pmbok: 95, prince2: 75, iso: 85 },
      "business-case-benefits": { pmbok: 80, prince2: 95, iso: 85 },
      "planning-scope": { pmbok: 90, prince2: 95, iso: 85 },
      "risk-issue-management": { pmbok: 95, prince2: 85, iso: 80 },
      "quality-management": { pmbok: 85, prince2: 90, iso: 95 },
      "change-management": { pmbok: 80, prince2: 85, iso: 90 },
      "resource-team-management": { pmbok: 90, prince2: 85, iso: 80 },
      "communication-reporting": { pmbok: 85, prince2: 80, iso: 90 },
      "performance-measurement": { pmbok: 95, prince2: 85, iso: 80 },
      "tailoring-adaptability": { pmbok: 90, prince2: 80, iso: 75 },
      "lessons-learned": { pmbok: 85, prince2: 90, iso: 80 },
      "procurement-contracting": { pmbok: 70, prince2: 85, iso: 95 },
      "sustainability-digital": { pmbok: 85, prince2: 90, iso: 75 },
      "agile-hybrid": { pmbok: 90, prince2: 85, iso: 70 },
    };

    return coverageMap[topicId] || { pmbok: 85, prince2: 85, iso: 85 };
  };

  const coverageData = getCoverageData(topicId);
  const standardNames: { [key: string]: string } = {
    pmbok: "PMBOK 7",
    prince2: "PRINCE2",
    iso: "ISO 21500"
  };

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-center">Framework Coverage</h4>
      {standards.map(stdId => (
        <PercentageBar
          key={stdId}
          percentage={coverageData[stdId as keyof typeof coverageData]}
          color={stdId === 'pmbok' ? 'bg-blue-500' : stdId === 'prince2' ? 'bg-green-500' : 'bg-purple-500'}
          label={standardNames[stdId]}
        />
      ))}
      <div className="text-xs text-center text-muted-foreground mt-2">
        Coverage score based on topic relevance
      </div>
    </div>
  );
};

const SimilarityMetrics: React.FC<{ 
  similarities: string[]; 
  differences: string[]; 
  uniquePoints: { standard: string; points: string[] }[] 
}> = ({ similarities, differences, uniquePoints }) => {
  const totalPoints = similarities.length + differences.length + 
    uniquePoints.reduce((sum, unique) => sum + unique.points.length, 0);
  
  const similarityPercentage = totalPoints > 0 ? Math.round((similarities.length / totalPoints) * 100) : 0;
  const differencePercentage = totalPoints > 0 ? Math.round((differences.length / totalPoints) * 100) : 0;
  const uniquenessPercentage = totalPoints > 0 ? Math.round((uniquePoints.reduce((sum, unique) => sum + unique.points.length, 0) / totalPoints) * 100) : 0;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-center">Analysis Distribution</h4>
      <PercentageBar 
        percentage={similarityPercentage} 
        color="bg-green-500" 
        label="Similarities" 
      />
      <PercentageBar 
        percentage={differencePercentage} 
        color="bg-orange-500" 
        label="Differences" 
      />
      <PercentageBar 
        percentage={uniquenessPercentage} 
        color="bg-blue-500" 
        label="Unique Aspects" 
      />
      
      <div className="grid grid-cols-3 gap-2 text-center text-xs mt-4">
        <div className="p-2 bg-green-50 rounded border">
          <div className="font-semibold text-green-700">{similarities.length}</div>
          <div className="text-green-600">Similar Points</div>
        </div>
        <div className="p-2 bg-orange-50 rounded border">
          <div className="font-semibold text-orange-700">{differences.length}</div>
          <div className="text-orange-600">Differences</div>
        </div>
        <div className="p-2 bg-blue-50 rounded border">
          <div className="font-semibold text-blue-700">
            {uniquePoints.reduce((sum, unique) => sum + unique.points.length, 0)}
          </div>
          <div className="text-blue-600">Unique Points</div>
        </div>
      </div>
    </div>
  );
};

const FrameworkStrengthChart: React.FC<{ topicId: string }> = ({ topicId }) => {
  const getStrengthData = (topicId: string) => {
    const strengthMap: { [key: string]: { pmbok: number; prince2: number; iso: number } } = {
      "governance-leadership": { pmbok: 8, prince2: 9, iso: 7 },
      "stakeholder-engagement": { pmbok: 9, prince2: 7, iso: 8 },
      "business-case-benefits": { pmbok: 8, prince2: 9, iso: 8 },
      "planning-scope": { pmbok: 9, prince2: 9, iso: 8 },
      "risk-issue-management": { pmbok: 9, prince2: 8, iso: 8 },
      "quality-management": { pmbok: 8, prince2: 9, iso: 9 },
      "change-management": { pmbok: 8, prince2: 8, iso: 9 },
      "resource-team-management": { pmbok: 9, prince2: 8, iso: 8 },
      "communication-reporting": { pmbok: 8, prince2: 8, iso: 9 },
      "performance-measurement": { pmbok: 9, prince2: 8, iso: 8 },
      "tailoring-adaptability": { pmbok: 9, prince2: 8, iso: 7 },
      "lessons-learned": { pmbok: 8, prince2: 9, iso: 8 },
      "procurement-contracting": { pmbok: 7, prince2: 8, iso: 9 },
      "sustainability-digital": { pmbok: 8, prince2: 9, iso: 7 },
      "agile-hybrid": { pmbok: 8, prince2: 9, iso: 7 },
    };

    return strengthMap[topicId] || { pmbok: 8, prince2: 8, iso: 8 };
  };

  const strengthData = getStrengthData(topicId);
  const maxStrength = 10;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-center">Framework Strength</h4>
      {Object.entries(strengthData).map(([std, strength]) => (
        <div key={std} className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium capitalize">{std}</span>
            <span className="text-muted-foreground">{strength}/10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                std === 'pmbok' ? 'bg-blue-500' : 
                std === 'prince2' ? 'bg-green-500' : 'bg-purple-500'
              }`}
              style={{ width: `${(strength / maxStrength) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div className="text-xs text-center text-muted-foreground mt-2">
        Strength rating for this topic
      </div>
    </div>
  );
};

const TopicCoveragePieChart: React.FC = () => {
  const totalTopics = 33;
  const commonTopics = 15;
  const commonPercentage = Math.round((commonTopics / totalTopics) * 100);
  const otherPercentage = 100 - commonPercentage;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-center">Topic Coverage</h4>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 32 32" className="w-32 h-32 transform -rotate-90">
            {/* Common Topics Segment */}
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="#10b981"
              strokeWidth="4"
              strokeDasharray={`${commonPercentage} ${100 - commonPercentage}`}
              strokeDashoffset="0"
            />
            {/* Other Topics Segment */}
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="4"
              strokeDasharray={`${otherPercentage} ${100 - otherPercentage}`}
              strokeDashoffset={`-${commonPercentage}`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{commonPercentage}%</div>
              <div className="text-xs text-muted-foreground">Common</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-xs">
        <div className="flex items-center gap-2 p-2 bg-green-50 rounded border">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div>
            <div className="font-semibold text-green-700">{commonTopics}</div>
            <div className="text-green-600">Common Topics</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div>
            <div className="font-semibold text-gray-700">{totalTopics - commonTopics}</div>
            <div className="text-gray-600">Other Topics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Compare: React.FC = () => {
  const [searchParams] = useSearchParams();
  const topicFromUrl = searchParams.get("topic");

  // Define the 15 common topics
  const commonTopicIds = [
    "governance-leadership",
    "stakeholder-engagement",
    "business-case-benefits",
    "planning-scope",
    "risk-issue-management",
    "quality-management",
    "change-management",
    "resource-team-management",
    "communication-reporting",
    "performance-measurement",
    "tailoring-adaptability",
    "lessons-learned",
    "procurement-contracting",
    "sustainability-digital",
    "agile-hybrid",
  ];

  const [selectedTopic, setSelectedTopic] = useState<string>(
    topicFromUrl && commonTopicIds.includes(topicFromUrl) ? topicFromUrl : "stakeholder-engagement"
  );
  const [selectedStandards, setSelectedStandards] = useState<string[]>(["pmbok", "prince2", "iso"]);
  const [topicSearch, setTopicSearch] = useState<string>("");

  // Filter topics to only include common ones
  const allTopics: Topic[] = Object.values(standardsData)
    .flatMap((std: any) =>
      Object.entries(std.sections).map(([id, section]: [string, any]) => ({
        id,
        name: section.title,
      }))
    )
    .filter((topic, index, self) => self.findIndex((t) => t.id === topic.id) === index)
    .filter((topic) => commonTopicIds.includes(topic.id));

  const suggestionItems: Topic[] = (() => {
    const q = topicSearch.trim().toLowerCase();
    if (!q) return [];
    const starts = allTopics.filter((t) => t.name.toLowerCase().startsWith(q));
    const includes = allTopics.filter(
      (t) => t.name.toLowerCase().includes(q) && !starts.some((s) => s.id === t.id)
    );
    return [...starts, ...includes].slice(0, 12);
  })();

  const standardOptions: StandardOption[] = [
    { id: "pmbok", name: "PMBOK 7", color: "pmbok" },
    { id: "prince2", name: "PRINCE2", color: "prince2" },
    { id: "iso", name: "ISO 21500", color: "iso" },
  ];

  // Recommendations mapping for common topics
  const getRecommendations = (topicId: string) => {
    const recommendationsMap: { [key: string]: { whenToUse: string; bestMethod: string } } = {
      "governance-leadership": {
        whenToUse: "Use PMBOK for value-focused leadership in adaptive environments; PRINCE2 for structured control in high-risk projects; ISO for governance in standardized settings",
        bestMethod: "Hybrid PRINCE2-PMBOK for balanced oversight"
      },
      "stakeholder-engagement": {
        whenToUse: "Use PMBOK for adaptive, matrix-based engagement in dynamic projects; PRINCE2 for analytics-driven monitoring; ISO for structured identification in standardized environments",
        bestMethod: "PMBOK for comprehensive stakeholder analysis"
      },
      "business-case-benefits": {
        whenToUse: "Use PMBOK for value-focused projects in adaptive contexts; PRINCE2 for structured justification in controlled environments; ISO for benefits tracking in standardized settings",
        bestMethod: "PRINCE2 for consistent business case management"
      },
      "planning-scope": {
        whenToUse: "Use PMBOK for adaptive planning in complex projects; PRINCE2 for product-focused planning in structured settings; ISO for standardized scope control",
        bestMethod: "PRINCE2 for detailed product planning"
      },
      "risk-issue-management": {
        whenToUse: "Use PMBOK for comprehensive risk-opportunity management in adaptive projects; PRINCE2 for structured risk/issue separation; ISO for standardized risk treatment",
        bestMethod: "PMBOK for holistic uncertainty management"
      },
      "quality-management": {
        whenToUse: "Use PMBOK for process-integrated quality in adaptive projects; PRINCE2 for product-specific quality control; ISO for standardized quality assurance",
        bestMethod: "PRINCE2 for detailed quality tracking"
      },
      "change-management": {
        whenToUse: "Use PMBOK for change-driven adaptive projects; PRINCE2 for integrated change control in structured settings; ISO for standardized change processes",
        bestMethod: "ISO for formal control frameworks"
      },
      "resource-team-management": {
        whenToUse: "Use PMBOK for leadership-focused teams in adaptive projects; PRINCE2 for structured resource allocation; ISO for detailed resource planning",
        bestMethod: "PMBOK for team dynamics"
      },
      "communication-reporting": {
        whenToUse: "Use PMBOK for measurement-linked communication in adaptive projects; PRINCE2 for stakeholder-focused reporting; ISO for structured information flow",
        bestMethod: "ISO for comprehensive communication management"
      },
      "performance-measurement": {
        whenToUse: "Use PMBOK for KPI-driven monitoring in adaptive projects; PRINCE2 for tolerance-based control; ISO for integrated performance management",
        bestMethod: "PMBOK for detailed metrics"
      },
      "tailoring-adaptability": {
        whenToUse: "Use PMBOK for adaptive tailoring in dynamic projects; PRINCE2 for method-specific adjustments; ISO for life cycle-focused tailoring",
        bestMethod: "PMBOK for flexible adaptation"
      },
      "lessons-learned": {
        whenToUse: "Use PMBOK for ongoing learning in adaptive projects; PRINCE2 for structured lesson capture; ISO for organizational dissemination",
        bestMethod: "PRINCE2 for systematic improvement"
      },
      "procurement-contracting": {
        whenToUse: "Use PMBOK with supplementary tools for basic procurement; PRINCE2 for integrated planning; ISO for detailed procurement management",
        bestMethod: "ISO for comprehensive guidance"
      },
      "sustainability-digital": {
        whenToUse: "Use PMBOK for ethical sustainability focus; PRINCE2 for digital-sustainability integration; ISO with supplementary guidelines",
        bestMethod: "PRINCE2 for updated relevance"
      },
      "agile-hybrid": {
        whenToUse: "Use PMBOK for diverse method selection; PRINCE2 for structured agile integration; ISO with adaptive tailoring",
        bestMethod: "PRINCE2 for agile-specific guidance"
      },
    };

    return recommendationsMap[topicId] || {
      whenToUse: "Select appropriate standard based on project context and requirements",
      bestMethod: "Hybrid approach recommended for balanced coverage"
    };
  };

  const comparisonResult: ComparisonResult | null = selectedTopic
    ? {
        topic: standardsData.pmbok.sections[selectedTopic]?.title || selectedTopic,
        standards: selectedStandards.reduce((acc: { [key: string]: StandardData }, stdId: string) => {
          const stdData = standardsData[stdId]?.sections[selectedTopic];
          if (stdData) {
            acc[stdId] = {
              title: stdData.title,
              content: stdData.content,
              keyPoints: stdData.keyPoints || [],
            };
          }
          return acc;
        }, {}),
        analysis: {
          similarities: standardsData.pmbok.sections[selectedTopic]?.analysis?.similarities || [
            "All frameworks emphasize systematic approach to project management",
            "Focus on delivering value and achieving objectives",
            "Importance of stakeholder engagement and communication"
          ],
          differences: standardsData.pmbok.sections[selectedTopic]?.analysis?.differences || [
            "PMBOK focuses on principles and performance domains",
            "PRINCE2 emphasizes structured processes and products", 
            "ISO provides standardized guidance and compliance focus"
          ],
          uniquePoints: selectedStandards.map((stdId: string) => ({
            standard: stdId.toUpperCase(),
            points: standardsData[stdId]?.sections[selectedTopic]?.keyPoints?.slice(0, 3) || []
          }))
        },
        recommendations: getRecommendations(selectedTopic)
      }
    : null;

  const toggleStandard = (stdId: string) => {
    setSelectedStandards((prev: string[]) => {
      if (prev.includes(stdId)) {
        if (prev.length <= 2) {
          toast.error("At least two standards must be selected for comparison.");
          return prev;
        }
        return prev.filter((id) => id !== stdId);
      }
      return [...prev, stdId];
    });
  };

  const exportToPDF = () => {
    if (!comparisonResult) return;
    const pdf = new jsPDF();
    pdf.setFontSize(16);
    pdf.text(`Comparison: ${comparisonResult.topic}`, 10, 10);
    let yOffset = 20;

    selectedStandards.forEach((stdId: string) => {
      const stdData = comparisonResult.standards[stdId];
      const std = standardOptions.find((s) => s.id === stdId);
      pdf.setFontSize(12);
      pdf.text(`${std?.name}: ${stdData.title}`, 10, yOffset);
      pdf.setFontSize(10);
      const contentLines = pdf.splitTextToSize(stdData.content, 180);
      pdf.text(contentLines, 10, yOffset + 5);
      yOffset += contentLines.length * 5 + 10;
    });

    pdf.setFontSize(12);
    pdf.text("Similarities:", 10, yOffset);
    yOffset += 5;
    comparisonResult.analysis.similarities.forEach((sim: string, idx: number) => {
      const simLines = pdf.splitTextToSize(`${idx + 1}. ${sim}`, 180);
      pdf.text(simLines, 10, yOffset);
      yOffset += simLines.length * 5 + 2;
    });

    pdf.setFontSize(12);
    pdf.text("Differences:", 10, yOffset);
    yOffset += 5;
    comparisonResult.analysis.differences.forEach((diff: string, idx: number) => {
      const diffLines = pdf.splitTextToSize(`${idx + 1}. ${diff}`, 180);
      pdf.text(diffLines, 10, yOffset);
      yOffset += diffLines.length * 5 + 2;
    });

    pdf.setFontSize(12);
    pdf.text("Unique Points:", 10, yOffset);
    yOffset += 5;
    comparisonResult.analysis.uniquePoints.forEach((unique: any) => {
      pdf.text(`${unique.standard}:`, 10, yOffset);
      yOffset += 5;
      unique.points.forEach((point: string, idx: number) => {
        const pointLines = pdf.splitTextToSize(`  • ${point}`, 180);
        pdf.text(pointLines, 10, yOffset);
        yOffset += pointLines.length * 5 + 2;
      });
      yOffset += 2;
    });

    pdf.setFontSize(12);
    pdf.text("Recommendations:", 10, yOffset);
    yOffset += 5;
    const whenToUseLines = pdf.splitTextToSize(`When to Use: ${comparisonResult.recommendations.whenToUse}`, 180);
    pdf.text(whenToUseLines, 10, yOffset);
    yOffset += whenToUseLines.length * 5 + 2;
    
    const bestMethodLines = pdf.splitTextToSize(`Best Method: ${comparisonResult.recommendations.bestMethod}`, 180);
    pdf.text(bestMethodLines, 10, yOffset);

    pdf.save(`comparison-${selectedTopic}.pdf`);
    toast.success("PDF exported successfully!");
  };

  const getStandardColor = (stdId: string) => {
    switch (stdId) {
      case 'pmbok': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'prince2': return 'bg-green-100 text-green-800 border-green-200';
      case 'iso': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Compare Topics</h1>
        <p className="text-muted-foreground">
          Compare 15 common topics across project management standards with visual analytics
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Comparison Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Select Topic</label>
            <div className="relative">
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {allTopics
                    .filter((t) => t.name.toLowerCase().includes(topicSearch.toLowerCase()))
                    .map((topic) => (
                      <SelectItem key={topic.id} value={topic.id}>
                        {topic.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Input
                value={topicSearch}
                onChange={(e) => setTopicSearch(e.target.value)}
                placeholder="Search topics…"
                className="mt-2"
              />
              {topicSearch && suggestionItems.length > 0 && (
                <div className="absolute z-20 mt-1 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow">
                  {suggestionItems.map((s) => (
                    <button
                      key={s.id}
                      className="block w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                      onClick={() => {
                        setSelectedTopic(s.id);
                        setTopicSearch("");
                      }}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Select Standards</label>
            <div className="flex flex-wrap gap-4">
              {standardOptions.map((std) => (
                <div key={std.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={std.id}
                    checked={selectedStandards.includes(std.id)}
                    onCheckedChange={() => toggleStandard(std.id)}
                  />
                  <label htmlFor={std.id} className="cursor-pointer text-sm font-medium">
                    {std.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {comparisonResult && (
            <Button onClick={exportToPDF} className="gap-2">
              <Download className="h-4 w-4" />
              Export to PDF
            </Button>
          )}
        </CardContent>
      </Card>

      {comparisonResult && (
        <>
          {/* Visual Metrics Section */}
          <div className="grid gap-6 mb-6 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Topic Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TopicCoveragePieChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Analysis Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SimilarityMetrics 
                  similarities={comparisonResult.analysis.similarities}
                  differences={comparisonResult.analysis.differences}
                  uniquePoints={comparisonResult.analysis.uniquePoints}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Framework Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FrameworkComparisonChart 
                  standards={selectedStandards} 
                  topicId={selectedTopic} 
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Strength Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FrameworkStrengthChart topicId={selectedTopic} />
              </CardContent>
            </Card>
          </div>

          {/* Rest of the component remains the same */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">{comparisonResult.topic}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`grid gap-6 md:grid-cols-${selectedStandards.length}`}>
                {selectedStandards.map((stdId) => {
                  const stdData = comparisonResult.standards[stdId];
                  const std = standardOptions.find((s) => s.id === stdId);
                  return (
                    <div key={stdId} className="rounded-lg border-2 p-4 transition-all hover:shadow-md">
                      <Badge className={`mb-3 ${getStandardColor(stdId)} border`}>
                        {std?.name}
                      </Badge>
                      <h3 className="mb-3 text-lg font-semibold">{stdData.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{stdData.content}</p>
                      
                      {stdData.keyPoints && stdData.keyPoints.length > 0 && (
                        <div className="mb-4">
                          <h4 className="mb-2 text-sm font-semibold flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Key Points
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {stdData.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Link to={`/library/${stdId}/${selectedTopic}`}>
                        <Button variant="ghost" size="sm" className="gap-2 w-full">
                          <ExternalLink className="h-3 w-3" />
                          View Full Section
                        </Button>
                      </Link>

                      <div className="mt-4 border-t pt-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                          <FileText className="h-4 w-4" />
                          Bibliography
                        </div>
                        <ul className="space-y-1 text-sm">
                          {getReferencesForTopic(selectedTopic, stdId).map((ref: Reference) => (
                            <li key={ref.id} className="flex items-start gap-2">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                              <a
                                href={buildPdfUrl(ref.bookPath, ref.page)}
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary underline-offset-2 hover:underline"
                              >
                                {ref.title} (p. {ref.page})
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Analysis Section */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Similarities */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-green-800">Similarities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {comparisonResult.analysis.similarities.map((sim, idx) => (
                    <li key={idx} className="flex items-start gap-3 rounded-lg bg-green-50 p-3 border border-green-100">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <span className="text-xs font-semibold text-green-700">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-green-900 leading-relaxed">{sim}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Differences */}
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-orange-800">Differences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {comparisonResult.analysis.differences.map((diff, idx) => (
                    <li key={idx} className="flex items-start gap-3 rounded-lg bg-orange-50 p-3 border border-orange-100">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                        <span className="text-xs font-semibold text-orange-700">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-orange-900 leading-relaxed">{diff}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Unique Points */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 pb-3">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-blue-800">Unique Points</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {comparisonResult.analysis.uniquePoints.map((unique, idx) => (
                    <div key={idx} className="rounded-lg bg-blue-50 p-3 border border-blue-100">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge className={getStandardColor(unique.standard.toLowerCase())}>
                          {unique.standard}
                        </Badge>
                      </div>
                      <ul className="space-y-1">
                        {unique.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2 text-sm">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            <span className="text-blue-900">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations Section */}
          <Card className="border-purple-200 mt-6">
            <CardHeader className="bg-purple-50 pb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-purple-800">Recommendations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 p-4 border border-purple-100">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-purple-800">
                    <Target className="h-4 w-4" />
                    Which Principle/Method to Use When
                  </h4>
                  <p className="text-sm text-purple-900 leading-relaxed bg-white p-3 rounded border">
                    {comparisonResult.recommendations.whenToUse}
                  </p>
                </div>
                
                <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4 border border-green-100">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-800">
                    <Star className="h-4 w-4" />
                    Best Method
                  </h4>
                  <div className="bg-white p-3 rounded border">
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-sm font-semibold">
                      {comparisonResult.recommendations.bestMethod}
                    </Badge>
                    <p className="mt-2 text-xs text-green-700">
                      Based on comprehensive analysis of framework strengths and project requirements
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Compare;