import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CreditCard, Smartphone, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PredplaceneKarty = () => {
  const srovnani = [
    {
      kategorie: "Kontrola nákladů",
      predplacene: "Perfektní - utratíte jen co máte",
      tarify: "Horší - můžete překročit limit",
      winner: "predplacene"
    },
    {
      kategorie: "Cena za služby",
      predplacene: "Vyšší jednotkové ceny",
      tarify: "Nižší ceny, výhodnější balíčky",
      winner: "tarify"
    },
    {
      kategorie: "Flexibilita",
      predplacene: "Vysoká - dobijete dle potřeby",
      tarify: "Nižší - pevné měsíční platby",
      winner: "predplacene"
    },
    {
      kategorie: "Pohodlnost",
      predplacene: "Horší - musíte dobíjet",
      tarify: "Lepší - automatické platby",
      winner: "tarify"
    }
  ];

  const doporuceni = [
    {
      typ: "Předplacené karty",
      icon: <CreditCard className="h-6 w-6" />,
      vhodne: [
        "Lidé s nepravidelnými příjmy",
        "Ti, kteří chtějí mít kontrolu nad výdaji",
        "Uživatelé s minimálním používáním mobilu",
        "Rodiče pro děti (kontrola nákladů)"
      ]
    },
    {
      typ: "Měsíční tarify",
      icon: <Smartphone className="h-6 w-6" />,
      vhodne: [
        "Pravidelní uživatelé internetu",
        "Lidé s pevnými příjmy",
        "Ti, kteří chtějí pohodlí",
        "Uživatelé s vysokou spotřebou dat"
      ]
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
              Předplacené karty vs. tarify
            </h1>
            <p className="text-xl text-muted-foreground">
              Co se vám více vyplatí? Podrobné srovnání obou možností
            </p>
          </div>

          {/* Quick Answer */}
          <Card className="shadow-custom bg-accent/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Rychlá odpověď</h3>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-background rounded-lg">
                  <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-2">Předplacené karty</h4>
                  <p className="text-sm text-muted-foreground">
                    Vyplatí se při <strong>nižší spotřebě</strong> nebo když potřebujete <strong>kontrolu nad náklady</strong>
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-2">Měsíční tarify</h4>
                  <p className="text-sm text-muted-foreground">
                    Výhodnější při <strong>pravidelném používání</strong> a potřebě <strong>velkého množství dat</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Comparison */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Detailní srovnání</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {srovnani.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">{item.kategorie}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className={`p-3 rounded-lg ${item.winner === 'predplacene' ? 'bg-savings-green/10 border-savings-green/20' : 'bg-muted/50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <CreditCard className="h-4 w-4" />
                          <span className="text-sm font-medium">Předplacené</span>
                          {item.winner === 'predplacene' && <TrendingUp className="h-4 w-4 text-savings-green" />}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.predplacene}</p>
                      </div>
                      <div className={`p-3 rounded-lg ${item.winner === 'tarify' ? 'bg-savings-green/10 border-savings-green/20' : 'bg-muted/50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Smartphone className="h-4 w-4" />
                          <span className="text-sm font-medium">Tarify</span>
                          {item.winner === 'tarify' && <TrendingUp className="h-4 w-4 text-savings-green" />}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.tarify}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            {doporuceni.map((doporuc, index) => (
              <Card key={index} className="shadow-custom">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {doporuc.icon}
                    {doporuc.typ}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Vhodné pro:</h4>
                  <ul className="space-y-2">
                    {doporuc.vhodne.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Practical Example */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Praktický příklad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Spotřeba: 5 GB dat + 100 minut volání měsíčně</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Předplacená karta
                  </h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Data: 5 GB × 10 Kč/GB = 50 Kč</li>
                    <li>• Volání: 100 min × 2 Kč/min = 200 Kč</li>
                    <li>• <strong>Celkem: ~400 Kč/měsíc</strong></li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg bg-savings-green/10">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Měsíční tarif
                  </h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• SAZKAmobil 5 GB: 299 Kč</li>
                    <li>• Zahrnuje neomezené SMS</li>
                    <li>• <strong>Celkem: 299 Kč/měsíc</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Výsledek:</strong> Při této spotřebě je výhodnější měsíční tarif - ušetříte ~100 Kč měsíčně!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="text-center shadow-custom">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Potřebujete poradit s výběrem?</h3>
              <p className="text-muted-foreground mb-6">
                Podívejte se na aktuální nabídku tarifů a najděte nejlepší řešení pro sebe
              </p>
              <Button asChild size="lg" className="shadow-button">
                <Link to="/nejlevnejsi-tarify-2025">
                  Srovnat dostupné tarify
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

export default PredplaceneKarty;