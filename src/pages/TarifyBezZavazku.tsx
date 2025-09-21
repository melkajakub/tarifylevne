import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Zap, Shield, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TarifyBezZavazku = () => {
  const vyhody = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Flexibilita",
      description: "Můžete změnit nebo zrušit tarif kdykoliv bez poplatků"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bez rizika",
      description: "Žádné dlouhodobé závazky ani sankce za předčasné ukončení"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Snadná změna",
      description: "Pokud najdete lepší nabídku, můžete okamžitě přejít"
    }
  ];

  const bezZavazku = [
    {
      operator: "SAZKAmobil",
      tarif: "Flex tarify",
      cena: "od 199 Kč",
      popis: "Všechny tarify bez závazku, měsíční výpovědní lhůta"
    },
    {
      operator: "Vodafone",
      tarif: "Bez závazku +",
      cena: "od 299 Kč", 
      popis: "Prémiové služby bez dlouhodobého závazku"
    },
    {
      operator: "O2",
      tarif: "Neon Flex",
      cena: "od 399 Kč",
      popis: "Flexibilní tarify s možností měsíčních změn"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na hlavní stránku
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Tarify bez závazku
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexibilní řešení pro ty, kteří nechtějí dlouhodobé závazky
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {vyhody.map((vyhoda, index) => (
              <Card key={index} className="text-center shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {vyhoda.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{vyhoda.title}</h3>
                  <p className="text-muted-foreground text-sm">{vyhoda.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Co jsou tarify bez závazku?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Tarify bez závazku vám umožňují používat mobilní služby bez nutnosti uzavření dlouhodobé smlouvy. 
                Můžete je kdykoliv změnit nebo zrušit, obvykle s měsíční výpovědní lhůtou.
              </p>

              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Kdo by měl zvážit tarif bez závazku?</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Lidé, kteří často cestují a potřebují flexibility</li>
                  <li>• Ti, kteří chtějí vyzkoušet nového operátora</li>
                  <li>• Uživatelé s měnícími se potřebami</li>
                  <li>• Zákazníci, kteří nechtějí být vázáni dlouhodobě</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Available Options */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Dostupné možnosti</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                {bezZavazku.map((tarif, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{tarif.operator} - {tarif.tarif}</h4>
                          <p className="text-muted-foreground">{tarif.popis}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary">{tarif.cena}</span>
                          <p className="text-sm text-muted-foreground">měsíčně</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comparison */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Srovnání: Se závazkem vs. bez závazku</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-savings-green">✅ Tarify bez závazku</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Maximální flexibilita</li>
                    <li>• Žádné sankce za zrušení</li>
                    <li>• Můžete kdykoliv změnit</li>
                    <li>• Ideální pro testování</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-warning-orange">⚠️ Tarify se závazkem</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Často nižší ceny</li>
                    <li>• Bonusy a slevy na telefony</li>
                    <li>• Sankce za předčasné ukončení</li>
                    <li>• Závazek obvykle 24 měsíců</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="text-center shadow-custom">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Připraveni na změnu?</h3>
              <p className="text-muted-foreground mb-6">
                Podívejte se na všechny dostupné tarify a najděte ten pravý pro vás
              </p>
              <Button asChild size="lg" className="shadow-button">
                <Link to="/nejlevnejsi-tarify-2025">
                  Porovnat všechny tarify
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TarifyBezZavazku;