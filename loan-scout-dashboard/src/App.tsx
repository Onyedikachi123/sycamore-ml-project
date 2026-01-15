import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Applicants from "./pages/Applicants";
import ApplicantDetail from "./pages/ApplicantDetail";
import AssetManagementDashboard from "./pages/AssetManagementDashboard";
import CustomerInvestmentProfile from "./pages/CustomerInvestmentProfile";
import InvestmentRecommendation from "./pages/InvestmentRecommendation";
import PortfolioViewer from "./pages/PortfolioViewer";
import AdminAssetManagement from "./pages/AdminAssetManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import CreditScoring from "./pages/CreditScoring";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/credit-scoring" element={<CreditScoring />} />
          <Route path="/applicant/:id" element={<ApplicantDetail />} />
          <Route path="/asset-management" element={<AssetManagementDashboard />} />
          <Route path="/asset-management/customers/:id" element={<CustomerInvestmentProfile />} />
          <Route path="/asset-management/recommendations/:id" element={<InvestmentRecommendation />} />
          <Route path="/asset-management/portfolio/:id" element={<PortfolioViewer />} />
          <Route path="/admin/asset-management" element={<AdminAssetManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
