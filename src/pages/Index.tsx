import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, Search, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Plaťte méně za mobil – Srovnání tarifů 2025
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Češi zbytečně přeplácí. Podívejte se, kde můžete ušetřit.
            </p>
            
            <div className="pt-6">
              <Button asChild size="lg" className="hero-gradient text-white shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 h-12 px-10 text-lg">
                <Link to="/nejlevnejsi-tarify-2025">
                  Zjistit nejlevnější tarif
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <PiggyBank className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Ušetříte peníze</h3>
                <p className="text-muted-foreground">
                  Najděte tarif přesně podle vašich potřeb a ušetřete až tisíce korun ročně
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Vše na jednom místě</h3>
                <p className="text-muted-foreground">
                  Srovnáváme tarify všech hlavních operátorů - nemusíte hledat jinde
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Bez složitého hledání</h3>
                <p className="text-muted-foreground">
                  Přehledné tabulky s aktuálními cenami a podmínkami - rychle a jednoduše
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Prozkoumejte naše kategorie</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/nejlevnejsi-tarify-2025">
              <Button variant="default" size="lg" className="w-full h-auto p-6 flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">Nejlevnější tarify 2025</span>
                <span className="text-sm text-muted-foreground">Aktuální přehled nejlevnějších nabídek</span>
              </Button>
            </Link>
            
            <Link to="/tarify-neomezena-data">
              <Button variant="outline" size="lg" className="w-full h-auto p-6 flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">Tarify s neomezenými daty</span>
                <span className="text-sm text-muted-foreground">Neomezené daty od 449 Kč měsíčně</span>
              </Button>
            </Link>
            
            <Link to="/tarify-pro-studenty-a-duchodce">
              <Button variant="outline" size="lg" className="w-full h-auto p-6 flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">Tarify pro studenty a důchodce</span>
                <span className="text-sm text-muted-foreground">Speciální slevy až 30%</span>
              </Button>
            </Link>
            
            <Link to="/tarify-bez-zavazku">
              <Button variant="outline" size="lg" className="w-full h-auto p-6 flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">Tarify bez závazku</span>
                <span className="text-sm text-muted-foreground">Žádné omezení, kdykoliv zrušitelné</span>
              </Button>
            </Link>

            <Link to="/predplacene-karty-vs-tarify">
              <Button variant="outline" size="lg" className="w-full h-auto p-6 flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">Předplacené karty vs tarify</span>
                <span className="text-sm text-muted-foreground">Co se vám více vyplatí?</span>
              </Button>
            </Link>

            <Link to="/tip-jak-snizit-ucet">
              <Button variant="outline" size="lg" className="w-full h-auto p-6 flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">Jak snížit účet za mobil</span>
                <span className="text-sm text-muted-foreground">Praktické tipy na okamžité úspory</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;