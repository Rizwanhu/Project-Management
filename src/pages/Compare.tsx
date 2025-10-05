import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Sparkles, Download, ExternalLink, FileText } from "lucide-react";
import { getReferencesForTopic, buildPdfUrl } from "@/data/references";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { getTopicsList, compareTopicAcrossStandards, ComparisonResult, searchStandards } from "@/utils/comparison-utils";
import { Input } from "@/components/ui/input";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

const Compare = () => {
  const [searchParams] = useSearchParams();
  const topicFromUrl = searchParams.get("topic");
  
  const [selectedTopic, setSelectedTopic] = useState(topicFromUrl || "stakeholder-engagement");
  const [selectedStandards, setSelectedStandards] = useState<string[]>(["pmbok", "prince2", "iso"]);
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);
  const [highlightMode, setHighlightMode] = useState<"all" | "similarities" | "differences">("all");

  const topics = getTopicsList();
  const [topicSearch, setTopicSearch] = useState("");
  const suggestionItems = (() => {
    const q = topicSearch.trim().toLowerCase();
    if (!q) return [] as { id: string; name: string }[];
    // 1) topic title startsWith matches first
    const starts = topics.filter(t => t.name.toLowerCase().startsWith(q));
    // 2) broader search over standards content
    const searchHits = searchStandards(q)
      .map(r => ({ id: r.sectionId, name: r.sectionTitle }))
      .filter((v, i, arr) => arr.findIndex(x => x.id === v.id) === i);
    // Merge and limit
    const merged = [...starts, ...topics.filter(t => t.name.toLowerCase().includes(q) && !starts.some(s => s.id === t.id)), ...searchHits];
    // Dedupe while preserving order
    const dedup: { id: string; name: string }[] = [];
    merged.forEach(m => {
      if (!dedup.some(d => d.id === m.id)) dedup.push(m);
    });
    return dedup.slice(0, 12);
  })();
  const standardOptions = [
    { id: "pmbok", name: "PMBOK 7", color: "pmbok" },
    { id: "prince2", name: "PRINCE2", color: "prince2" },
    { id: "iso", name: "ISO 21500", color: "iso" },
  ];

  useEffect(() => {
    if (selectedTopic && selectedStandards.length >= 2) {
      const result = compareTopicAcrossStandards(selectedTopic, selectedStandards);
      setComparisonResult(result);
    }
  }, [selectedTopic, selectedStandards]);

  const toggleStandard = (stdId: string) => {
    setSelectedStandards((prev) => {
      if (prev.includes(stdId)) {
        return prev.filter((id) => id !== stdId);
      } else {
        return [...prev, stdId];
      }
    });
  };

  const exportToPDF = () => {
    if (!comparisonResult) return;
    const pdf = new jsPDF();
    pdf.text(`Comparison: ${comparisonResult.topic}`, 10, 10);
    pdf.save(`comparison-${selectedTopic}.pdf`);
    toast.success("PDF exported successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Compare Topics</h1>
        <p className="text-muted-foreground">
          Dynamic side-by-side comparison with analysis and PDF export
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
                  {topics
                    .filter(t => t.name.toLowerCase().includes(topicSearch.toLowerCase()))
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
                  {suggestionItems.map(s => (
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
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{comparisonResult.topic}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`grid gap-4 md:grid-cols-${selectedStandards.length}`}>
                {selectedStandards.map((stdId) => {
                  const stdData = comparisonResult.standards[stdId];
                  const std = standardOptions.find((s) => s.id === stdId);
                  return (
                    <div key={stdId} className="rounded-lg border p-4">
                      <Badge className={`mb-3 bg-${stdId}`}>{std?.name}</Badge>
                      <h3 className="mb-3 text-lg font-semibold">{stdData.title}</h3>
                      <p className="mb-4 text-sm">{stdData.content}</p>
                      <Link to={`/library/${stdId}/${selectedTopic}`}>
                        <Button variant="ghost" size="sm" className="gap-2 w-full">
                          <ExternalLink className="h-3 w-3" />
                          View Full Section
                        </Button>
                      </Link>

                      {/* Bibliography for this standard/topic */}
                      <div className="mt-3 border-t pt-3">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                          <FileText className="h-4 w-4" />
                          Bibliography
                        </div>
                        <ul className="list-disc pl-5 text-sm">
                          {getReferencesForTopic(selectedTopic, stdId as any).map((ref) => (
                            <li key={ref.id} className="mb-1">
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

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <CardTitle>Similarities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {comparisonResult.analysis.similarities.map((sim, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg bg-success/10 p-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="text-sm">{sim}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <CardTitle>Differences</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {comparisonResult.analysis.differences.map((diff, idx) => (
                  <li key={idx} className="rounded-lg border border-warning/20 bg-warning/10 p-3">
                    <span className="text-sm">{diff}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Compare;
