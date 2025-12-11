import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ImageGallery from "@/components/ui/ImageGallery";
import { Computer, ExternalLink, Monitor, HardDrive, Cpu, MemoryStick } from "lucide-react";
import FlagEmoji from "@/components/FlagEmoji";

const nations = [
  { name: "United States", flagProps: { countryCode: "US", title: "United States" } },
  { name: "United Kingdom", flagProps: { countryCode: "GB", title: "United Kingdom" } },
  { name: "West Germany", flagProps: { countryCode: "DE", title: "West Germany" } },
  { name: "Soviet Union", flagProps: { name: "SU", title: "Soviet Union" } },
  { name: "East Germany", flagProps: { name: "DDR", title: "East Germany" } },
  { name: "France", flagProps: { countryCode: "FR", title: "France" } },
  { name: "Canada", flagProps: { countryCode: "CA", title: "Canada" } },
  { name: "Belgium", flagProps: { countryCode: "BE", title: "Belgium" } },
  { name: "Poland", flagProps: { countryCode: "PL", title: "Poland" } },
  { name: "Czechoslovakia", flagProps: { countryCode: "CZ", title: "Czechoslovakia" } },
];

const guideUrlForNation = (name: string) =>
  `https://ontargetsimulations.com/guides/coldwar/reference/Forces/${encodeURIComponent(name)}/`;

const screenshots = [
  {
    src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170350/9b184cfb3ea2ad751b3969aa5ff933885ee2c59b/ss_9b184cfb3ea2ad751b3969aa5ff933885ee2c59b.1920x1080.jpg?t=1763650804",
    alt: "Multinational Forces",
    caption: "Authentic force structures",
  },
  {
    src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170350/fd566ce5880339c274537ea0b1e8d938a3066806/ss_fd566ce5880339c274537ea0b1e8d938a3066806.1920x1080.jpg?t=1763650804",
    alt: "Tank combat in Flashpoint Campaigns",
    caption: "Armored warfare across European terrain",
  },
  {
    src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170350/f87536ed4e717e9ab93b985f5492ddef01541266/ss_f87536ed4e717e9ab93b985f5492ddef01541266.1920x1080.jpg?t=1763650804",
    alt: "Artillery support operations",
    caption: "Coordinate tactical transport, including air assault",
  },
  {
    src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170350/8c8f859bd083d47296f5949f7ab3e429cf4db2c7/ss_8c8f859bd083d47296f5949f7ab3e429cf4db2c7.1920x1080.jpg?t=1763650804",
    alt: "Air support mission",
    caption: "Call in close air support",
  },
  {
    src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170350/2df1adb7f7aee944586258486b5e91ce54ba8d72/ss_2df1adb7f7aee944586258486b5e91ce54ba8d72.1920x1080.jpg?t=1763650804",
    alt: "SOPs",
    caption: "Set Standard Operating Procedures for your units",
  },
  {
    src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170350/0923bdbc31781e17c2a15798ec357c289818587b/ss_0923bdbc31781e17c2a15798ec357c289818587b.1920x1080.jpg?t=1763650804",
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
            <div className="absolute inset-0 tactical-grid bg-[url('images/time-to-dance.png')] bg-center bg-cover bg-no-repeat" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background " />
            
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
                  Experience the most authentic Cold War tactical wargame ever created. Command forces from 10 nations across 100+ scenarios using our revolutionary simultaneous execution (WEGO) system.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://store.steampowered.com/app/3170350/Flashpoint_Campaigns_Cold_War/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-tactical inline-flex items-center gap-2">
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
                      className="border-primary/50 hover:bg-primary/10 tracking-wider inline-flex items-center gap-2"
                    >
                      Buy on Matrix Games <ExternalLink className="w-4 h-4" />
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
                  videoId="juRyXUCDyz8"
                  title="Flashpoint Campaigns: Cold War Gameplay Trailer"
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
                    RTFM
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
                        Play against opponents worldwide with PBEM++, Play By Email Classic (PBEM) and Hot Seat support.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="nations" className="space-y-6 nations-tab" data-testid="nations-tab">
                  <p className="text-muted-foreground text-center mb-8">
                    Command forces from 10 playable nations, each with unique equipment and capabilities.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 nations-grid">
                    {nations.map((nation) => (
                      <a
                        key={nation.name}
                        href={guideUrlForNation(nation.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flag-card group card-tactical p-4 text-center hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                      >
                        <span className="text-4xl mb-2 block transition-all duration-300 ease-out">
                          <FlagEmoji {...nation.flagProps} className="h-10 w-12" />
                        </span>
                        <span className="text-xs uppercase tracking-wider text-foreground transition-colors group-hover:text-primary">
                          {nation.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="scenarios" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl font-bold uppercase mb-4">
                      Read the Field Manuals
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Over 700 pages of documentation including detailed field manuals covering gameplay mechanics, custom content creation, and tactical doctrines to help you master the battlefield and extend the game.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border p-6">
                      <h4 className="font-display font-bold uppercase text-primary mb-2">
                        Gameplay Manuals
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Detailed information on the game's fundamentals, including navigating its interface, and in-depth looks at the systems.
                      </p>
                    </div>
                    <div className="bg-card border border-border p-6">
                      <h4 className="font-display font-bold uppercase text-primary mb-2">
                        Operational Guides
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn more about the chronology of WWIII, view TO&E tables, read the Scenario and Campaign descriptions and study the Maps.
                      </p>
                    </div>
                    <div className="bg-card border border-border p-6">
                      <h4 className="font-display font-bold uppercase text-primary mb-2">
                        User Content Guides
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn how to extend the game by creating new Scenarios, constructing Maps, editing Data, every step of the way.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="equipment" className="space-y-6">
                  <p className="text-muted-foreground text-center mb-8">
                    Command over 900 historically accurate unit types from both NATO and Warsaw Pact arsenals.
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
                      <Computer className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">OS</span>
                        <p className="text-sm text-foreground">Windows 10</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Processor</span>
                        <p className="text-sm text-foreground">3 GHz or faster</p>
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
                      <Monitor className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Resolution</span>
                        <p className="text-sm text-foreground">1920x1080</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HardDrive className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Storage</span>
                        <p className="text-sm text-foreground">2 GB available space</p>
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
                      <Computer className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">OS</span>
                        <p className="text-sm text-foreground">Windows 11 64-bit</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Processor</span>
                        <p className="text-sm text-foreground">3 GHz or faster</p>
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
                      <Monitor className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Resolution</span>
                        <p className="text-sm text-foreground">2560x1440</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HardDrive className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Storage</span>
                        <p className="text-sm text-foreground">2 GB SSD</p>
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
                  href="https://store.steampowered.com/app/3170350/Flashpoint_Campaigns_Cold_War/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-tactical inline-flex items-center gap-2">
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
                    className="border-primary/50 hover:bg-primary/10 tracking-wider inline-flex items-center gap-2"
                  >
                    Buy on Matrix Games <ExternalLink className="w-4 h-4" />
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
