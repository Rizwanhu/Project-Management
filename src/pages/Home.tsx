import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, GitCompare, BarChart3, ArrowRight, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { getTopicsList } from "@/utils/comparison-utils";

const Home = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("stakeholder-engagement");
  const topics = getTopicsList();

  const handleCompare = () => {
    navigate(`/compare?topic=${selectedTopic}`);
  };
  const handleViewSummary = () => {
    navigate(`/summary?topic=${selectedTopic}`);
  };
  const handleViewBibliography = () => {
    navigate(`/bibliography?topic=${selectedTopic}&autoOpen=1`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(215, 230, 245, 0.95), rgba(215, 230, 245, 0.95)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Compare Global Project Management Standards
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Explore PMBOK 7, PRINCE2, and ISO 21500 — compare their principles, 
              methodologies, and insights to find the best approach for your projects.
            </p>
            
            {/* Quick Compare */}
              <Card className="mx-auto mb-6 max-w-xl">
              <CardContent className="pt-6">
                <label className="mb-2 block text-left text-sm font-medium">Quick Compare</label>
                <div className="flex gap-2">
                  <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((topic) => (
                        <SelectItem key={topic.id} value={topic.id}>
                          {topic.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button onClick={handleCompare} className="gap-2">
                      Compare
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                   
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
  <Link to="/library">
    <Button size="lg" className="w-full gap-2 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
      <BookOpen className="h-5 w-5" />
      Go to Standards Library
    </Button>
  </Link>
  <Link to="/compare">
    <Button size="lg" className="w-full gap-2 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
      <GitCompare className="h-5 w-5" />
      Compare Topics
    </Button>
  </Link>
  <Link to="/generator">
    <Button size="lg" className="w-full gap-2 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
      Customize your plan
    </Button>
  </Link>
  <Button size="lg" className="w-full gap-2 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" onClick={handleViewBibliography}>
    <FileText className="h-5 w-5" />
    Open Bibliography for Topic
  </Button>
  <Link to="/generator">
    <Button size="lg" className="w-full gap-2 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
      <BarChart3 className="h-5 w-5" />
      Generate Custom Guide
    </Button>
  </Link>
</div>
</div>
</div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Why Use PM Standards Hub?
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Comprehensive Library
                </h3>
                <p className="text-muted-foreground">
                  Access detailed information about PMBOK 7, PRINCE2, and ISO 21500/21502 
                  in one place.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <GitCompare className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Side-by-Side Comparison
                </h3>
                <p className="text-muted-foreground">
                  Compare how different standards approach the same topics and identify 
                  best practices.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                  <BarChart3 className="h-8 w-8 text-success" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Tailored Recommendations
                </h3>
                <p className="text-muted-foreground">
                  Get customized process recommendations based on your project's unique 
                  characteristics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">3</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Global Standards
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-accent">33</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Key Topics Covered
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-success">100%</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  Free to Use
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
