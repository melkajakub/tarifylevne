import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Smartphone className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">TarifyLevne.cz</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/nejlevnejsi-tarify-2025" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Nejlevnější tarify
          </Link>
          <Link to="/tarify-pro-studenty-a-duchodce" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Studenti & důchodci
          </Link>
          <Link to="/tarify-bez-zavazku" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Bez závazku
          </Link>
          <Link to="/predplacene-karty-vs-tarify" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Předplacené karty
          </Link>
          <Link to="/tip-jak-snizit-ucet" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Tipy na úspory
          </Link>
        </nav>

        <Button asChild size="sm" className="shadow-button">
          <Link to="/nejlevnejsi-tarify-2025">
            Srovnat tarify
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;