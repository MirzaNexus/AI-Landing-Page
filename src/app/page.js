import Clients from "@/components/clients/Clients";
import CtaSection from "@/components/cta-section/CtaSection";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import LogoTicker from "@/components/logoticker/LogoTicker";
import Pricing from "@/components/pricing/Pricing";
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Clients />
      <Pricing />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default page;
