import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NejlevnejsiTarify = () => {
  const tarify = [
    {
      operator: "Vodafone",
      tarif: "Basic Lite",
      cena: "204 Kč",
      data: "3 GB + neomezené volání/SMS",
      link: "{AFFILIATE_LINK}"
    },
    {
      operator: "T-Mobile",
      tarif: "NextU 12 GB",
      cena: "248 Kč",
      data: "12 GB + neomezené volání/SMS",
      link: "https://www.t-mobile.cz"
    },
    {
      operator: "O2",
      tarif: "Neo+ Stříbrný",
      cena: "249 Kč",
      data: "Neomezená data 10 Mb/s + neomezené volání/SMS",
      link: "https://www.o2.cz"
    },
    {
      operator: "T-Mobile",
      tarif: "NextU L",
      cena: "353 Kč",
      data: "Neomezená data 20 Mb/s + neomezené volání/SMS",
      link: "https://www.t-mobile.cz"
    },
    {
      operator: "O2",
      tarif: "You 20 Mb/s",
      cena: "399 Kč",
      data: "Neomezená data 20 Mb/s + neomezené volání/SMS",
      link: "https://www.o2.cz"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
              Nejlevnější tarify 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Přehled vybraných tarifů, které patří mezi nejzajímavější v roce 2025
            </p>
          </div>

          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Aktuální přehled tarifů</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Každý rok se mění nabídky mobilních operátorů a mnoho lidí tak platí víc, než musí. 
                Připravili jsme pro vás přehled vybraných tarifů, které patří mezi nejzajímavější v roce 2025. 
                Pro aktuální informace a objednání klikněte na tlačítko u vybraného tarifu.
              </p>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Operátor</TableHead>
                      <TableHead className="font-semibold">Tarif / Balíček</TableHead>
                      <TableHead className="font-semibold">Cena/měsíc</TableHead>
                      <TableHead className="font-semibold">Data + Volání</TableHead>
                      <TableHead className="font-semibold text-center">Objednat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tarify.map((tarif, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{tarif.operator}</TableCell>
                        <TableCell>{tarif.tarif}</TableCell>
                        <TableCell className="font-semibold text-primary">{tarif.cena}</TableCell>
                        <TableCell>{tarif.data}</TableCell>
                        <TableCell className="text-center">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                            onClick={() => window.open(tarif.link, '_blank')}
                          >
                            Objednat
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Upozornění:</strong> Ceny a nabídky se mohou měnit. Pro aktuální informace klikněte na tlačítko Objednat. 
                  Doporučujeme vybírat nejen podle ceny, ale také podle toho, jaké služby skutečně využíváte.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card className="shadow-custom">
            <CardHeader>
              <CardTitle>Mohlo by vás také zajímat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    <Link to="/tarify-pro-studenty-a-duchodce" className="text-primary hover:underline">
                      Tarify pro studenty a důchodce
                    </Link>
                  </h4>
                  <p className="text-sm text-muted-foreground">Speciální nabídky se slevami pro vybrané skupiny</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    <Link to="/tip-jak-snizit-ucet" className="text-primary hover:underline">
                      Jak snížit účet u stávajícího operátora
                    </Link>
                  </h4>
                  <p className="text-sm text-muted-foreground">Praktické rady pro okamžité úspory</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NejlevnejsiTarify;
