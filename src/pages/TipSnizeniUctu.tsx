import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageSquare, Lightbulb, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TipSnizeniUctu = () => {
  const tipy = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Zavolejte na zákaznickou linku",
      description: "Zeptejte se na aktuální slevy a promoakce",
      tip: "Řekněte, že zvažujete přechod ke konkurenci - často nabídnou slevu"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Změňte svůj tarif",
      description: "Možná platíte za služby, které nevyužíváte",
      tip: "Projděte si statistiky spotřeby za posledních 6 měsíců"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Vypněte drahé služby",
      description: "SMS zprávy, roaming, prémiové služby",
      tip: "Zkontrolujte si účet - možná máte aktivované služby o kterých nevíte"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Vyjednejte věrnostní slevu",
      description: "Dlouhodobí zákazníci často mají nárok na slevy",
      tip: "Připomeňte si, jak dlouho jste zákazníkem a jaký máte měsíční obrat"
    }
  ];

  const kroky = [
    {
      krok: "1.",
      akce: "Analyzujte svou spotřebu",
      detail: "Podívejte se na účty za posledních 3-6 měsíců a zjistěte, co skutečně využíváte"
    },
    {
      krok: "2.",
      akce: "Připravte si argumenty",
      detail: "Vyhledejte konkurenční nabídky jako argument pro vyjednávání"
    },
    {
      krok: "3.",
      akce: "Zavolejte operátorovi",
      detail: "Buďte zdvořilí, ale rozhodní. Zmiňte možnost přechodu k jinému operátorovi"
    },
    {
      krok: "4.",
      akce: "Vyjednejte podmínky",
      detail: "Požádejte o slevu, změnu tarifu nebo zrušení nevyužívaných služeb"
    }
  ];

  const uspesneVety = [
    "Zdravím, jsem dlouhodobý zákazník a rád bych projednal možnosti úspor na mém tarifu.",
    "Vidím, že nabízíte novým zákazníkům výhodné tarify. Mohl bych získat podobnou nabídku?",
    "Zvažuji přechod k jinému operátorovi kvůli cenám. Máte nějakou nabídku pro stávající zákazníky?",
    "Platím za služby, které nevyužívám. Mohli byste mi pomoct optimalizovat můj tarif?"
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
              Jak snížit účet u stávajícího operátora
            </h1>
            <p className="text-xl text-muted-foreground">
              Praktické rady pro okamžité úspory bez změny operátora
            </p>
          </div>

          {/* Quick Stats */}
          <Card className="shadow-custom bg-accent/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Až 40% úspora</h3>
              <p className="text-muted-foreground">
                Tolik můžete ušetřit správným vyjednáváním s vaším operátorem
              </p>
            </CardContent>
          </Card>

          {/* Main Tips */}
          <div className="grid md:grid-cols-2 gap-6">
            {tipy.map((tip, index) => (
              <Card key={index} className="shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{tip.description}</p>
                      <div className="bg-accent/50 p-3 rounded-lg">
                        <p className="text-sm font-medium">💡 Tip: {tip.tip}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Step by Step Guide */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Krok za krokem k úspoře</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {kroky.map((krok, index) => (
                <div key={index} className="flex gap-4 p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {krok.krok}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{krok.akce}</h4>
                    <p className="text-sm text-muted-foreground">{krok.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Successful Phrases */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Jak se vyjadřovat při vyjednávání</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Použijte tyto věty při rozhovoru se zákaznickým centrem:
              </p>
              <div className="space-y-3">
                {uspesneVety.map((veta, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-accent/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-savings-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{veta}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* When to Consider Switching */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Kdy zvážit změnu operátora?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Pokud vám operátor nenabídne uspokojivé řešení, možná je čas na změnu:
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Signály pro změnu operátora:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Odmítá poskytnout jakoukoliv slevu nebo úpravu tarifu</li>
                  <li>• Váš tarif je výrazně dražší než konkurence (více než 20%)</li>
                  <li>• Máte problémy s pokrytím nebo kvalitou služeb</li>
                  <li>• Končí vám závazek a můžete přejít bez sankcí</li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <Button asChild variant="outline" size="lg">
                  <Link to="/nejlevnejsi-tarify-2025">
                    Porovnat nabídky jiných operátorů
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Success Story */}
          <Card className="shadow-custom bg-savings-green/5 border-savings-green/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Příběh úspěchu</h3>
              <blockquote className="text-center space-y-2">
                <p className="text-muted-foreground italic">
                  "Platila jsem 890 Kč měsíčně za tarif, který jsem skoro nevyužívala. 
                  Po telefonátu s operátorem a poukázání na konkurenční nabídky mi snížili 
                  účet na 450 Kč. Ušetřím přes 5 000 Kč ročně!"
                </p>
                <cite className="text-sm font-medium">– Marie, 34 let, Praha</cite>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TipSnizeniUctu;