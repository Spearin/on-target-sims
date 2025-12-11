import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>On Target Simulations | Flashpoint Campaigns Cold War Wargame</title>
        <meta
          name="description"
          content="Experience authentic Cold War tactical combat with Flashpoint Campaigns. Command NATO and Warsaw Pact forces in the most detailed WEGO wargame simulation."
        />
        <meta
          name="keywords"
          content="wargame, cold war, tactical simulation, Flashpoint Campaigns, military strategy, WEGO"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
