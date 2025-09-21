import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NejlevnejsiTarify from "./pages/NejlevnejsiTarify";
import TarifyStudenti from "./pages/TarifyStudenti";
import TarifyBezZavazku from "./pages/TarifyBezZavazku";
import PredplaceneKarty from "./pages/PredplaceneKarty";
import TipSnizeniUctu from "./pages/TipSnizeniUctu";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nejlevnejsi-tarify-2025" element={<NejlevnejsiTarify />} />
          <Route path="/tarify-pro-studenty-a-duchodce" element={<TarifyStudenti />} />
          <Route path="/tarify-bez-zavazku" element={<TarifyBezZavazku />} />
          <Route path="/predplacene-karty-vs-tarify" element={<PredplaceneKarty />} />
          <Route path="/tip-jak-snizit-ucet" element={<TipSnizeniUctu />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
