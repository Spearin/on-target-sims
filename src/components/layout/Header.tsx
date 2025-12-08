import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Flashpoint Campaigns: Cold War", path: "/flashpoint-cold-war" },
  { name: "Legacy Games", path: "/legacy-games" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Target className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-45" />
              <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-foreground">
                On Target
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground -mt-1">
                Simulations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm uppercase tracking-wider font-medium ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://www.matrixgames.com/game/flashpoint-campaigns-cold-war"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-tactical text-xs">Buy Now</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`py-3 px-4 text-sm uppercase tracking-wider font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://store.steampowered.com/app/3170350/Flashpoint_Campaigns_Cold_War/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button className="btn-tactical w-full text-xs">Buy Now</Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
