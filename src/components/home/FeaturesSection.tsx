import { Clock, Users, Map, Shield, Radio, Target } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "WEGO Turn System",
    description:
      "Experience simultaneous execution where both sides plan and execute orders at the same time, creating authentic fog of war.",
  },
  {
    icon: Radio,
    title: "Command & Control",
    description:
      "Realistic C2 systems simulate communication delays and the challenges of commanding units across the battlefield.",
  },
  {
    icon: Users,
    title: "10 Playable Nations",
    description:
      "Lead forces from USA, USSR, UK, West Germany, East Germany, and more in authentic Cold War scenarios.",
  },
  {
    icon: Map,
    title: "80+ Detailed Maps",
    description:
      "Fight across meticulously crafted terrain from the Fulda Gap to the North German Plain.",
  },
  {
    icon: Shield,
    title: "Authentic Equipment",
    description:
      "Command historically accurate units from M1 Abrams to T-80s, with detailed combat modeling.",
  },
  {
    icon: Target,
    title: "Asynchronous Multiplayer",
    description:
      "Play against opponents worldwide with PBEM support, perfect for strategic thinking.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 tactical-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Core Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4">
            Revolutionary Wargaming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Flashpoint Campaigns delivers an unparalleled Cold War tactical experience with features designed by wargaming veterans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-tactical p-6 group hover:border-primary/50 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
