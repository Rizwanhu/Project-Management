import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { buildPdfUrl, REFERENCES, ReferenceItem } from "@/data/references";
import { getTopicsList } from "@/utils/comparison-utils";

const Bibliography = () => {
  const [query, setQuery] = useState("");
  const [standardFilter, setStandardFilter] = useState<string>("");
  const [topicFilter, setTopicFilter] = useState<string>("");
  const location = useLocation();

  const topics = getTopicsList();

  const filtered: ReferenceItem[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REFERENCES.filter(r =>
      (!standardFilter || r.standardId === standardFilter) &&
      (!topicFilter || r.topicId === topicFilter) &&
      (
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q) ||
        r.bookPath.toLowerCase().includes(q)
      )
    );
  }, [query, standardFilter, topicFilter]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const topic = params.get("topic") || "";
    const auto = params.get("autoOpen");
    if (topic) setTopicFilter(topic);
    if (auto === "1") {
      const first = REFERENCES.find(r => !topic || r.topicId === topic);
      if (first) {
        const url = buildPdfUrl(first.bookPath, first.page);
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  }, [location.search]);

  const topicName = (id: string) => topics.find(t => t.id === id)?.name || id;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold">Bibliography</h1>
          <p className="text-muted-foreground">Search and browse references across all standards. Links open the exact page in each PDF.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="md:col-span-2">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search references by title, description, or file"
                />
              </div>
              <div className="flex gap-2">
                <select
                  className="w-1/2 rounded-md border bg-background px-3 py-2 text-sm"
                  value={standardFilter}
                  onChange={(e) => setStandardFilter(e.target.value)}
                >
                  <option value="">All Standards</option>
                  <option value="pmbok">PMBOK 7</option>
                  <option value="prince2">PRINCE2</option>
                  <option value="iso">ISO 21500</option>
                </select>
                <select
                  className="w-1/2 rounded-md border bg-background px-3 py-2 text-sm"
                  value={topicFilter}
                  onChange={(e) => setTopicFilter(e.target.value)}
                >
                  <option value="">All Topics</option>
                  {topics.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>References ({filtered.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {filtered.map(ref => (
                <div key={ref.id} className="py-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium">{ref.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {ref.standardId.toUpperCase()} • {topicName(ref.topicId)} • page {ref.page}
                      </div>
                      {ref.description && (
                        <div className="mt-1 text-sm text-muted-foreground">{ref.description}</div>
                      )}
                    </div>
                    <a
                      href={buildPdfUrl(ref.bookPath, ref.page)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline-offset-2 hover:underline whitespace-nowrap"
                    >
                      Open PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bibliography;


