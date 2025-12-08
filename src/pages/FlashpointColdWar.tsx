import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ImageGallery from "@/components/ui/ImageGallery";
import { ExternalLink, Monitor, HardDrive, Cpu, MemoryStick } from "lucide-react";

const nations = [
  { name: "United States", flag: "🇺🇸" },
  { name: "Soviet Union", flag: "🇷🇺" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "West Germany", flag: "🇩🇪" },
  { name: "East Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Czechoslovakia", flag: "🇨🇿" },
];

const screenshots = [
  {
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1314410/ss_1a3c6f0c8e5b4d2f9e8b7a6c5d4e3f2a1b0c9d8e.jpg?t=1699000000",
    alt: "Flashpoint Campaigns tactical map view",
    caption: "Detailed tactical map with unit positions",
  },
  {
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1314410/ss_2b4d6f8e0a2c4e6f8a0b2c4d6e8f0a2b4c6d8e0f.jpg?t=1699000000",
    alt: "Tank combat in Flashpoint Campaigns",
    caption: "Armored warfare across European terrain",
  },
  {
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1314410/ss_3c5e7f9a1b3d5f7a9b1c3d5e7f9a1b3c5d7e9f1a.jpg?t=1699000000",
    alt: "Artillery support operations",
    caption: "Coordinate devastating artillery strikes",
  },
  {
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1314410/ss_4d6f8a0c2e4f6a8c0d2e4f6a8c0d2e4f6a8c0d2e.jpg?t=1699000000",
    alt: "Air support mission",
    caption: "Call in close air support",
  },
  {
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1314410/ss_5e7f9b1d3f5a7b9d1e3f5a7b9d1e3f5a7b9d1e3f.jpg?t=1699000000",
    alt: "Infantry operations",
    caption: "Mechanized infantry in action",
  },
  {
    src: "https://cdn.akamai.steamstatic.com/steam/apps/1314410/ss_6f8a0c2e4g6b8c0e2f4g6b8c0e2f4g6b8c0e2f4g.jpg?t=1699000000",
    alt: "Night operations",
    caption: "Night combat operations",
  },
];

const FlashpointColdWar = () => {
  return (
    <>
      <Helmet>
        <title>Flashpoint Campaigns: Cold War | On Target Simulations</title>
        <meta
          name="description"
          content="Flashpoint Campaigns: Cold War - Command NATO and Warsaw Pact forces in authentic Cold War tactical scenarios with revolutionary WEGO gameplay."
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
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  The Definitive Cold War Experience
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mt-4 mb-6">
                  Flashpoint Campaigns:{" "}
                  <span className="text-gradient-olive">Cold War</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience the most authentic Cold War tactical wargame ever created. Command forces from 10 nations across 60+ scenarios using our revolutionary simultaneous execution (WEGO) system.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://store.steampowered.com/app/1314410/Flashpoint_Campaigns_Southern_Storm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-tactical inline-flex items-center gap-2">
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
                      className="border-primary/50 hover:bg-primary/10 uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      Matrix Games <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-12 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <VideoEmbed
                  videoId="QK6o-3g8qAA"
                  title="Flashpoint Campaigns: Southern Storm Gameplay Trailer"
                />
              </div>
            </div>
          </section>

          {/* Tabbed Content */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="gameplay" className="max-w-5xl mx-auto">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
                  <TabsTrigger
                    value="gameplay"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs py-3"
                  >
                    Gameplay
                  </TabsTrigger>
                  <TabsTrigger
                    value="nations"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs py-3"
                  >
                    Nations
                  </TabsTrigger>
                  <TabsTrigger
                    value="scenarios"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs py-3"
                  >
                    Scenarios
                  </TabsTrigger>
                  <TabsTrigger
                    value="equipment"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground uppercase tracking-wider text-xs py-3"
                  >
                    Equipment
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="gameplay" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="card-tactical p-6">
                      <h3 className="font-display text-xl font-bold uppercase mb-4 text-primary">
                        WEGO Turn System
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Both players plan their orders simultaneously, then watch them execute at the same time. This creates an authentic fog of war experience where you can't react instantly to enemy movements.
                      </p>
                    </div>
                    <div className="card-tactical p-6">
                      <h3 className="font-display text-xl font-bold uppercase mb-4 text-primary">
                        Command & Control
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Experience realistic communication delays and command hierarchies. Orders take time to reach units, simulating the challenges of Cold War era communications.
                      </p>
                    </div>
                    <div className="card-tactical p-6">
                      <h3 className="font-display text-xl font-bold uppercase mb-4 text-primary">
                        Realistic Combat
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Detailed combat modeling accounts for weapon ranges, ammunition types, terrain effects, and crew quality. Every engagement tells a story.
                      </p>
                    </div>
                    <div className="card-tactical p-6">
                      <h3 className="font-display text-xl font-bold uppercase mb-4 text-primary">
                        Multiplayer
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Play against opponents worldwide with PBEM (Play By Email) support. Take your time planning the perfect strategy.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="nations" className="space-y-6">
                  <p className="text-muted-foreground text-center mb-8">
                    Command forces from 10 playable nations, each with unique equipment and capabilities.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {nations.map((nation) => (
                      <div
                        key={nation.name}
                        className="card-tactical p-4 text-center hover:border-primary/50 transition-colors"
                      >
                        <span className="text-4xl mb-2 block">{nation.flag}</span>
                        <span className="text-xs uppercase tracking-wider text-foreground">
                          {nation.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="scenarios" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl font-bold uppercase mb-4">
                      60+ Authentic Scenarios
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      From small engagements to massive operations, experience the full spectrum of Cold War tactical combat across meticulously researched scenarios.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border p-6">
                      <h4 className="font-display font-bold uppercase text-primary mb-2">
                        Fulda Gap
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Defend against the Soviet onslaught through Germany's most critical corridor.
                      </p>
                    </div>
                    <div className="bg-card border border-border p-6">
                      <h4 className="font-display font-bold uppercase text-primary mb-2">
                        North German Plain
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Armored warfare across open terrain where tanks reign supreme.
                      </p>
                    </div>
                    <div className="bg-card border border-border p-6">
                      <h4 className="font-display font-bold uppercase text-primary mb-2">
                        Southern Storm
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        New scenarios covering the southern theater of operations.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="equipment" className="space-y-6">
                  <p className="text-muted-foreground text-center mb-8">
                    Command over 500 historically accurate unit types from both NATO and Warsaw Pact arsenals.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="card-tactical p-6">
                      <h3 className="font-display text-xl font-bold uppercase mb-4 text-primary">
                        NATO Forces
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• M1 Abrams Main Battle Tank</li>
                        <li>• Leopard 2 Main Battle Tank</li>
                        <li>• M2 Bradley IFV</li>
                        <li>• AH-64 Apache Attack Helicopter</li>
                        <li>• A-10 Thunderbolt II</li>
                      </ul>
                    </div>
                    <div className="card-tactical p-6">
                      <h3 className="font-display text-xl font-bold uppercase mb-4 text-accent">
                        Warsaw Pact Forces
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• T-80 Main Battle Tank</li>
                        <li>• T-72 Main Battle Tank</li>
                        <li>• BMP-2 IFV</li>
                        <li>• Mi-24 Hind Attack Helicopter</li>
                        <li>• Su-25 Frogfoot</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Screenshot Gallery */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  Gallery
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mt-4">
                  Screenshots
                </h2>
              </div>
              <ImageGallery images={screenshots} columns={3} />
            </div>
          </section>

          {/* System Requirements */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  Technical
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mt-4">
                  System Requirements
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="card-tactical p-6">
                  <h3 className="font-display text-lg font-bold uppercase mb-6 text-primary">
                    Minimum
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Monitor className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">OS</span>
                        <p className="text-sm text-foreground">Windows 10</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Processor</span>
                        <p className="text-sm text-foreground">Intel Core i5 or equivalent</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MemoryStick className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Memory</span>
                        <p className="text-sm text-foreground">8 GB RAM</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HardDrive className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Storage</span>
                        <p className="text-sm text-foreground">10 GB available space</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-tactical p-6">
                  <h3 className="font-display text-lg font-bold uppercase mb-6 text-primary">
                    Recommended
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Monitor className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">OS</span>
                        <p className="text-sm text-foreground">Windows 10/11</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Processor</span>
                        <p className="text-sm text-foreground">Intel Core i7 or equivalent</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MemoryStick className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Memory</span>
                        <p className="text-sm text-foreground">16 GB RAM</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HardDrive className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Storage</span>
                        <p className="text-sm text-foreground">20 GB SSD</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-6">
                Ready to Take Command?
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://store.steampowered.com/app/1314410/Flashpoint_Campaigns_Southern_Storm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-tactical inline-flex items-center gap-2">
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
                    className="border-primary/50 hover:bg-primary/10 uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    Matrix Games <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FlashpointColdWar;
