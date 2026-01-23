import NotificationBar from "@/components/NotificationBar";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import ProductHero from "@/components/ProductHero";
import FeaturesSection from "@/components/FeaturesSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import JaydenCollection from "@/components/JaydenCollection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <SpecialOfferBanner />
      <ProductHero />
      <FeaturesSection />
      <VideoTestimonials />
      <JaydenCollection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
