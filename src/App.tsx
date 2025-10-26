import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "@/contexts/SearchContext";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Compare from "./pages/Compare";
import Generator from "./pages/Generator";
import NotFound from "./pages/NotFound";
import Bibliography from "./pages/Bibliography";
import Phase2 from "@/pages/Phase2";
import ScenarioCustomSoftware from "@/pages/ScenarioCustomSoftware";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SearchProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/library/:standardId/:sectionId" element={<Library />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/bibliography" element={<Bibliography />} />
              <Route path="/generator" element={<Generator />} />
              <Route path="/phase2" element={<Phase2 />} />
              <Route path="/phase2/custom-software" element={<ScenarioCustomSoftware />} />
            </Route>

            {/* ✅ Keep NotFound at bottom as catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
