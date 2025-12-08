import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 tactical-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6">
            Ready to Take Command?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of commanders worldwide in the most authentic Cold War tactical experience available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://store.steampowered.com/app/1314410/Flashpoint_Campaigns_Southern_Storm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-tactical w-full sm:w-auto inline-flex items-center gap-2">
                Buy on Steam <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://www.matrixgames.com/game/flashpoint-campaigns-southern-storm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto uppercase tracking-wider inline-flex items-center gap-2"
              >
                Matrix Games <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
