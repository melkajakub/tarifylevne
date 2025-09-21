import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TarifyStudenti = () => {
  const studentTarify = [
    {
      operator: "O2",
      tarif: "Student tarif",
      sleva: "50%",
      popis: "Sleva pro studenty do 26 let na vybrané tarify"
    },
    {
      operator: "Vodafone", 
      tarif: "Red Student",
      sleva: "30%",
      popis: "Speciální ceny pro střední a vysoké školy"
    },
    {
      operator: "T-Mobile",
      tarif: "Twist Student", 
      sleva: "25%",
      popis: "Výhodné tarify s neomezenými daty ve školách"
    }
  ];

  const duchodciTarify = [
    {
      operator: "SAZKAmobil",
      tarif: "Senior balíček",
      vynoha: "Jednoduchost",
      popis: "Přehledné účtování, velká tlačítka v aplikaci"
    },
    {
      operator: "O2",
      tarif: "Neon Senior",
      vynoha: "Podpora 24/7",
      popis: "Bezplatná technická podpora pro seniory"
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
              Tarify pro studenty a důchodce
            </h1>
            <p className="text-xl text-muted-foreground">
              Speciální nabídky se slevami a výhodami pro vybrané skupiny
            </p>
          </div>

          {/* Student Section */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Tarify pro studenty
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Většina operátorů nabízí speciální tarify pro studenty s výraznými slevami. 
                Často stačí prokázat studium na střední nebo vysoké škole.
              </p>

              <div className="grid gap-4">
                {studentTarify.map((tarif, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{tarif.operator} - {tarif.tarif}</h4>
                          <p className="text-muted-foreground">{tarif.popis}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-savings-green">{tarif.sleva}</span>
                          <p className="text-sm text-muted-foreground">sleva</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Jak získat studentskou slevu?</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Prokažte se platným průkazem studenta</li>
                  <li>• Věk obvykle do 26 let</li>
                  <li>• Sleva platí po dobu studia</li>
                  <li>• Někdy je potřeba každoročně obnovit doklad</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Senior Section */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Tarify pro důchodce
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Operátoři často přizpůsobují své tarify potřebám seniorů - jednoduché ovládání, 
                lepší zákaznická podpora a přehledné účtování.
              </p>

              <div className="grid gap-4">
                {duchodciTarify.map((tarif, index) => (
                  <Card key={index} className="border-l-4 border-l-savings-green">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{tarif.operator} - {tarif.tarif}</h4>
                          <p className="text-muted-foreground">{tarif.popis}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-primary">{tarif.vynoha}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Výhody senior tarifů:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Jednoduchá aplikace s velkými tlačítky</li>
                  <li>• Bezplatná technická podpora</li>
                  <li>• Přehledné účtování bez skrytých poplatků</li>
                  <li>• Možnost platby na pobočce</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="text-center shadow-custom">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Chcete se dozvědět více?</h3>
              <p className="text-muted-foreground mb-6">
                Podívejte se na kompletní přehled všech dostupných tarifů
              </p>
              <Button asChild size="lg" className="shadow-button">
                <Link to="/nejlevnejsi-tarify-2025">
                  Zobrazit všechny tarify
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

export default TarifyStudenti;