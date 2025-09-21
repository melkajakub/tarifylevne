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
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  <Link to="/tarify-pro-studenty-a-duchodce" className="text-primary hover:underline">
                    Tarify pro studenty a důchodce
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Speciální nabídky se slevami</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  <Link to="/tarify-bez-zavazku" className="text-primary hover:underline">
                    Tarify bez závazku
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Flexibilní řešení bez omezení</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  <Link to="/predplacene-karty-vs-tarify" className="text-primary hover:underline">
                    Předplacené karty vs. tarify
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Co se vám více vyplatí?</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  <Link to="/tip-jak-snizit-ucet" className="text-primary hover:underline">
                    Tip: Jak snížit účet u stávajícího operátora
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Praktické rady pro okamžité úspory</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;