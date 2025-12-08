import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/ui/VideoEmbed";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid" />
      <div className="absolute inset-0 topo-overlay opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block animate-fade-up">
              <span className="text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 px-4 py-2">
                Flashpoint Campaigns
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight animate-fade-up animation-delay-100">
              Command the{" "}
              <span className="text-gradient-olive">Cold War</span>{" "}
              Battlefield
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Experience the tension of Cold War tactical combat. Lead NATO and Warsaw Pact forces through authentic scenarios with our revolutionary WEGO turn system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <a
                href="https://store.steampowered.com/app/1314410/Flashpoint_Campaigns_Southern_Storm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-tactical w-full sm:w-auto">
                  Buy on Steam
                </Button>
              </a>
              <a
                href="https://www.matrixgames.com/game/flashpoint-campaigns-southern-storm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto uppercase tracking-wider"
                >
                  Matrix Games
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 animate-fade-up animation-delay-400">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary">10</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Nations</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary">60+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Scenarios</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary">80+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Maps</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="animate-fade-up animation-delay-300">
            <VideoEmbed
              videoId="QK6o-3g8qAA"
              title="Flashpoint Campaigns: Southern Storm - Official Trailer"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
