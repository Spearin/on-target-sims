import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const legacyGames = [
  {
    year: "2015",
    title: "Germany Reforged",
    description:
      "A major expansion that adds new nations, scenarios, and equipment to the Flashpoint Campaigns universe. Experience the Cold War conflict from new perspectives with expanded German forces and additional NATO allies.",
    features: [
      "New playable nations",
      "Additional scenarios",
      "Expanded equipment database",
      "New maps and terrain",
    ],
    storeLink: "https://www.matrixgames.com/game/flashpoint-campaigns-germany-reforged",
  },
  {
    year: "2014",
    title: "Flashpoint Campaigns: Red Storm Player's Edition",
    description:
      "An enhanced version of our original classic, Red Storm Player's Edition brings improved graphics, refined gameplay mechanics, and expanded scenario content while maintaining the authentic Cold War tactical experience that made the series famous.",
    features: [
      "Enhanced graphics and UI",
      "Expanded scenario library",
      "Improved AI behavior",
      "PBEM multiplayer support",
    ],
    storeLink: "https://www.matrixgames.com/game/flashpoint-campaigns-red-storm-players-edition",
  },  
  {
    year: "2005",
    title: "Flashpoint Germany",
    description:
      "The game that started it all. Flashpoint Germany introduced our revolutionary WEGO simultaneous execution system and set the standard for Cold War tactical wargaming. A true classic that laid the foundation for everything that followed.",
    features: [
      "Original WEGO system",
      "Cold War tactical combat",
      "Authentic scenarios",
      "Historical accuracy",
    ],
    storeLink: "https://www.matrixgames.com/game/flashpoint-germany",
  },
];

const LegacyGames = () => {
  return (
    <>
      <Helmet>
        <title>Legacy Games | On Target Simulations</title>
        <meta
          name="description"
          content="Explore the history of On Target Simulations with our legacy titles including Red Storm, Germany Reforged, and the original Flashpoint Germany."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 tactical-grid" />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  Our History
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mt-4 mb-6">
                  Legacy <span className="text-gradient-olive">Titles</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore the evolution of tactical wargaming through our celebrated game series. Each title represents a milestone in Cold War simulation excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                <div className="space-y-16">
                  {legacyGames.map((game, index) => (
                    <div
                      key={game.title}
                      className={`relative flex flex-col md:flex-row gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-primary rounded-full flex items-center justify-center z-10">
                        <Calendar className="w-4 h-4 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 pl-16 md:pl-0 ${
                          index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                        }`}
                      >
                        <div className="card-tactical p-6 md:p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl font-display font-bold text-primary">
                              {game.year}
                            </span>
                            <div className="h-px flex-1 bg-border" />
                          </div>

                          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4 text-foreground">
                            {game.title}
                          </h2>

                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {game.description}
                          </p>

                          <div className="mb-6">
                            <h3 className="text-xs uppercase tracking-wider text-primary mb-3">
                              Key Features
                            </h3>
                            <ul className="grid grid-cols-2 gap-2">
                              {game.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="text-sm text-muted-foreground flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <a
                            href={game.storeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className="border-primary/50 hover:bg-primary/10 uppercase tracking-wider inline-flex items-center gap-2"
                            >
                              View on Matrix Games{" "}
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Legacy Statement */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6">
                  A Decade of Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  From our humble beginnings with Flashpoint Germany in 2013 to the comprehensive Flashpoint Campaigns: Cold War today, we've remained committed to one goal: creating the most authentic and engaging Cold War tactical simulations possible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each game in our catalog represents lessons learned and innovations made. Our legacy titles remain playable and supported, ensuring that fans of traditional wargaming can continue to enjoy these classics while also experiencing our latest innovations.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6">
                Experience Our Latest Title
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Ready to command the battlefield with our most advanced simulation yet?
              </p>
              <a
                href="https://store.steampowered.com/app/1314410/Flashpoint_Campaigns_Southern_Storm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-tactical inline-flex items-center gap-2">
                  Buy Flashpoint Campaigns: Cold War{" "}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LegacyGames;
