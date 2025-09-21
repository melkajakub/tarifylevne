import { Smartphone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold text-primary">LevnéTarify.cz</span>
          </div>
          
          <p className="text-center text-muted-foreground max-w-md">
            LevnéTarify.cz – srovnáváme, abyste ušetřili.
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a 
              href="mailto:info@levnetarify.cz" 
              className="hover:text-primary transition-colors"
            >
              info@levnetarify.cz
            </a>
          </div>
          
          <div className="text-xs text-muted-foreground text-center">
            <p>© 2025 LevnéTarify.cz. Všechna práva vyhrazena.</p>
            <p className="mt-1">Ceny a nabídky se mohou měnit. Vždy si ověřte aktuální podmínky u operátora.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;