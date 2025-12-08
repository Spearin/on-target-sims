import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Award, Users, Briefcase, Shield, Crosshair } from "lucide-react";

const expertise = [
  {
    icon: Award,
    title: "Decades of Experience",
    description:
      "Our team brings together decades of combined experience in wargame design, military simulation development, and software engineering.",
  },
  {
    icon: Shield,
    title: "Military Authenticity",
    description:
      "Deep expertise in Cold War era tactics, equipment, and doctrine ensures every scenario reflects historical accuracy.",
  },
  {
    icon: Users,
    title: "Passionate Wargamers",
    description:
      "We're not just developers—we're dedicated wargamers who understand what makes a compelling tactical simulation.",
  },
  {
    icon: Crosshair,
    title: "Simulation Excellence",
    description:
      "Specialists in combat modeling, AI development, and user experience design for complex strategy games.",
  },
];

const services = [
  "Military training simulations",
  "Serious games development",
  "Custom scenario design",
  "Simulation consulting",
  "Tactical analysis tools",
  "Educational software",
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | On Target Simulations</title>
        <meta
          name="description"
          content="Learn about On Target Simulations, the studio behind Flashpoint Campaigns. Decades of combined expertise in wargame design and military simulation."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 tactical-grid" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6">
                  About <span className="text-gradient-olive">On Target</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Crafting authentic military simulations with passion and precision since 2013.
                </p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary">
                      Our Story
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mt-4 mb-6">
                      A Passion for Authenticity
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        On Target Simulations was founded by a group of dedicated wargamers and simulation professionals who shared a common vision: to create the most authentic and engaging Cold War tactical experience possible.
                      </p>
                      <p>
                        What started as a passion project has evolved into a studio known for pushing the boundaries of what wargaming can achieve. Our revolutionary WEGO turn system, pioneered in Flashpoint Germany, has become the gold standard for turn-based tactical combat.
                      </p>
                      <p>
                        Today, we continue to refine and expand our simulations, driven by the same commitment to authenticity and gameplay excellence that has defined us from the beginning.
                      </p>
                    </div>
                  </div>
                  <div className="card-tactical p-8 bg-card">
                    <h3 className="font-display text-xl font-bold uppercase mb-6 text-primary">
                      Our Mission
                    </h3>
                    <p className="text-foreground italic text-lg leading-relaxed">
                      "To deliver the most authentic and immersive Cold War tactical wargaming experience, honoring both the history and the players who seek to understand it."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  Our Team
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mt-4">
                  Combined Expertise
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                  Our studio brings together specialists in wargame design, military history, software development, and simulation technology.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {expertise.map((item) => (
                  <div
                    key={item.title}
                    className="bg-background border border-border p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="card-tactical p-8">
                    <h3 className="font-display text-xl font-bold uppercase mb-4 text-primary">
                      Published by Matrix Games
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We're proud to partner with Matrix Games, the world's leading publisher of complex strategy and wargaming titles. This partnership allows us to focus on what we do best—creating exceptional simulations—while Matrix handles global distribution and marketing.
                    </p>
                    <a
                      href="https://www.matrixgames.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm uppercase tracking-wider"
                    >
                      Visit Matrix Games →
                    </a>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary">
                      Professional Services
                    </span>
                    <h2 className="font-display text-3xl font-bold uppercase mt-4 mb-6">
                      Beyond Gaming
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Our expertise extends beyond commercial wargaming. We offer professional services for organizations requiring serious games and military training simulations.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Briefcase className="w-4 h-4 text-primary" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  Our Philosophy
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mt-4 mb-8">
                  Authenticity Above All
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-display font-bold uppercase text-primary mb-2">
                      Historical Accuracy
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Every scenario, unit, and mechanic is researched and validated against historical sources.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-primary mb-2">
                      Gameplay First
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Simulation depth must serve the player experience, not hinder it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-primary mb-2">
                      Community Driven
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our players are partners in development, shaping features and content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
