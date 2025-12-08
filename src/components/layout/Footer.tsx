import { Link } from "react-router-dom";
import { Target, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Target className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold uppercase tracking-wider">
                  On Target
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-1">
                  Simulations
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting authentic military simulations with decades of combined expertise in wargame design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/flashpoint-cold-war" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Flashpoint Campaigns: Cold War
                </Link>
              </li>
              <li>
                <Link to="/legacy-games" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Legacy Games
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Buy Games */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">
              Buy Our Games
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://store.steampowered.com/app/3170350/Flashpoint_Campaigns_Cold_War/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Steam <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.matrixgames.com/game/flashpoint-campaigns-cold-war"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Matrix Games <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-foreground">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://forums.matrixgames.com/viewforum.php?f=12037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Matrix Forums <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@ontargetsimulations.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" /> Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} On Target Simulations. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Published by{" "}
            <a
              href="https://www.matrixgames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Matrix Games
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
