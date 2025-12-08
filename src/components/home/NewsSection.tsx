import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    date: "2024",
    title: "Southern Storm Expansion Released",
    excerpt:
      "Experience new scenarios set in the southern theater of operations with expanded nation coverage.",
  },
  {
    date: "2023",
    title: "Flashpoint Campaigns: Cold War Launches",
    excerpt:
      "The definitive Cold War tactical experience arrives with enhanced graphics and gameplay systems.",
  },
  {
    date: "Ongoing",
    title: "Active Community & Modding",
    excerpt:
      "Join our thriving community creating custom scenarios, mods, and engaging in multiplayer battles.",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative">
      <div className="absolute inset-0 scanline" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Latest Updates
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4">
              News & Updates
            </h2>
          </div>
          <Link
            to="/contact"
            className="mt-4 md:mt-0 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            Subscribe for updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-background border border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <h3 className="font-display text-lg font-bold uppercase mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
