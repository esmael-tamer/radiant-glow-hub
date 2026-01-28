import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import ContactPage from "./pages/ContactPage";
import { ShopLayout } from "@/components/shop/ShopLayout";
import { ProductsPage } from "@/pages/shop/ProductsPage";
import { ProductDetailsPage } from "@/pages/shop/ProductDetailsPage";
import { CartPage } from "@/pages/shop/CartPage";
import { CheckoutPage } from "@/pages/shop/CheckoutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/radiant-glow-hub">
        <Routes>
          {/* Original landing page - untouched */}
          <Route path="/" element={<Index />} />

          {/* Static Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/lookup" element={<TrackOrderPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Shop page redirect */}
          <Route path="/shop" element={<Navigate to="/shop/products" replace />} />
          <Route path="/shop/products" element={<ShopLayout><ProductsPage /></ShopLayout>} />

          {/* Arabic Shop Routes */}
          <Route path="/ar" element={<ShopLayout><Navigate to="/ar/products" replace /></ShopLayout>} />
          <Route path="/ar/products" element={<ShopLayout><ProductsPage /></ShopLayout>} />
          <Route path="/ar/products/:slug" element={<ShopLayout><ProductDetailsPage /></ShopLayout>} />
          <Route path="/ar/cart" element={<ShopLayout><CartPage /></ShopLayout>} />
          <Route path="/ar/checkout" element={<ShopLayout><CheckoutPage /></ShopLayout>} />

          {/* English Shop Routes */}
          <Route path="/en" element={<ShopLayout><Navigate to="/en/products" replace /></ShopLayout>} />
          <Route path="/en/products" element={<ShopLayout><ProductsPage /></ShopLayout>} />
          <Route path="/en/products/:slug" element={<ShopLayout><ProductDetailsPage /></ShopLayout>} />
          <Route path="/en/cart" element={<ShopLayout><CartPage /></ShopLayout>} />
          <Route path="/en/checkout" element={<ShopLayout><CheckoutPage /></ShopLayout>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
