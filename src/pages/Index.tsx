import NotificationBar from "@/components/NotificationBar";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import ProductHero from "@/components/ProductHero";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <SpecialOfferBanner />
      <ProductHero />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
