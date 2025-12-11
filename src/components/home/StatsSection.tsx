import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 110, suffix: "+", label: "Scenarios" },
  { end: 80, suffix: "+", label: "Maps" },
  { end: 10, suffix: "", label: "Nations" },
  { end: 900, suffix: "+", label: "Unit Types" },
];

const StatsSection = () => {
  return (
    <section id="stats"className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 topo-overlay opacity-20" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            By The Numbers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mt-4">
            Massive Scale Warfare
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
