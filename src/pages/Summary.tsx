import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { compareTopicAcrossStandards, getTopicsList } from "@/utils/comparison-utils";
import { getReferencesForTopic, buildPdfUrl } from "@/data/references";

const useQuery = () => new URLSearchParams(useLocation().search);

const Summary = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const initialTopicId = query.get("topic") || "";

  const topics = useMemo(() => getTopicsList(), []);
  const [search, setSearch] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState(initialTopicId);

  const suggestions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [] as { id: string; name: string }[];
    return topics
      .filter(t => t.name.toLowerCase().includes(q))
      .slice(0, 8);
  }, [search, topics]);

  const summary = useMemo(() => {
    if (!selectedTopicId) return null;
    return compareTopicAcrossStandards(selectedTopicId, []);
  }, [selectedTopicId]);

  useEffect(() => {
    // keep URL in sync when topic changes
    const params = new URLSearchParams();
    if (selectedTopicId) params.set("topic", selectedTopicId);
    navigate({ pathname: "/summary", search: params.toString() }, { replace: true });
  }, [selectedTopicId, navigate]);

  const onSelectSuggestion = (id: string) => {
    setSelectedTopicId(id);
    setSearch("");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">Summary</h1>
          <div className="relative w-full sm:w-96">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics…"
            />
            {suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow">
                {suggestions.map(s => (
                  <button
                    key={s.id}
                    className="block w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onSelectSuggestion(s.id)}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {!selectedTopicId && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select a topic to view its summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {topics.map(t => (
                  <Button key={t.id} variant="outline" size="sm" onClick={() => setSelectedTopicId(t.id)}>
                    {t.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {summary ? (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{summary.topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">A concise view of how each standard addresses this topic.</p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              {Object.entries(summary.standards).map(([stdId, data]) => (
                <Card key={stdId}>
                  <CardHeader>
                    <CardTitle className="text-lg">{data.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm text-muted-foreground">{data.content}</p>
                    <div className="mb-2 text-sm font-semibold">Key Points</div>
                    <ul className="list-disc pl-5 text-sm">
                      {data.keyPoints.map((kp, i) => (
                        <li key={i} className="mb-1">{kp}</li>
                      ))}
                    </ul>

                    {/* References */}
                    <div className="mt-4">
                      <div className="mb-2 text-sm font-semibold">References</div>
                      <ul className="list-disc pl-5 text-sm">
                        {getReferencesForTopic(summary.topicId, stdId as any).map((ref) => (
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
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <div className="mb-2 font-semibold">Similarities</div>
                    <ul className="list-disc pl-5 text-sm">
                      {summary.analysis.similarities.map((s, i) => (
                        <li key={i} className="mb-1">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold">Differences</div>
                    <ul className="list-disc pl-5 text-sm">
                      {summary.analysis.differences.map((d, i) => (
                        <li key={i} className="mb-1">{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold">Unique Points</div>
                    {summary.analysis.uniquePoints.map((u, i) => (
                      <div key={i} className="mb-3">
                        <div className="text-sm font-medium mb-1 uppercase">{u.standard}</div>
                        <ul className="list-disc pl-5 text-sm">
                          {u.points.map((p, j) => (
                            <li key={j} className="mb-1">{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : selectedTopicId ? (
          <Card>
            <CardHeader>
              <CardTitle>No data available for this topic</CardTitle>
            </CardHeader>
            <CardContent>
              Try a different topic from the list above.
            </CardContent>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

export default Summary;


