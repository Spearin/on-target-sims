import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/ui/VideoEmbed";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("stats");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid" />
      <div className="absolute inset-0 topo-overlay opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background bg-[url('images/bg-cw.png')] bg-center bg-cover bg-no-repeat" />
      
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
                Available Now
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
                href="https://store.steampowered.com/app/3170350/Flashpoint_Campaigns_Cold_War/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-tactical w-full sm:w-auto inline-flex items-center gap-2">
                Buy on Steam <ExternalLink className="w-4 h-4" />
              </Button>
              </a>
              <a
                href="https://www.matrixgames.com/game/flashpoint-campaigns-cold-war"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto tracking-wider inline-flex items-center gap-2"
                >
                  Buy on Matrix Games <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="animate-fade-up animation-delay-300">
            <VideoEmbed
              videoId="juRyXUCDyz8"
              title="Flashpoint Campaigns: Cold War - Release Trailer"
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
