import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import CountdownTimer from "@/components/CountdownTimer";
import ProductHero from "@/components/ProductHero";
import FeaturesSection from "@/components/FeaturesSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import JaydenCollection from "@/components/JaydenCollection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";
import FloatingBuyButton from "@/components/FloatingBuyButton";
import LivePurchaseNotification from "@/components/LivePurchaseNotification";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden pt-16 sm:pt-20">
      <CountdownTimer />
      <SpecialOfferBanner />
      <ProductHero />
      <VideoTestimonials />
      <FeaturesSection />
      <JaydenCollection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
      <FloatingBuyButton />
      <LivePurchaseNotification />
    </div>
  );
};

export default Index;
