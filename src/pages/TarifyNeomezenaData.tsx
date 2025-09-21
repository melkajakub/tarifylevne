import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const TarifyNeomezenaData = () => {
  const neomezeneDataTarify = [
    {
      operator: "Vodafone",
      tariff: "Neomezený Basic+ se slevou",
      price: "449 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.vodafone.cz/osobni/pausal/"
    },
    {
      operator: "Vodafone", 
      tariff: "#jetovtobě Basic+",
      price: "479 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.vodafone.cz/osobni/pausal/"
    },
    {
      operator: "T-Mobile",
      tariff: "NextU neomezeně",
      price: "495 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.t-mobile.cz/tarify"
    },
    {
      operator: "Vodafone",
      tariff: "Neomezený Basic+",
      price: "499 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.vodafone.cz/osobni/pausal/"
    },
    {
      operator: "T-Mobile",
      tariff: "Student neomezeně",
      price: "700 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.t-mobile.cz/tarify"
    },
    {
      operator: "O2",
      tariff: "You NEO",
      price: "749 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.o2.cz/osobni/volani/mobilni-tarify"
    },
    {
      operator: "T-Mobile",
      tariff: "NextU neomezeně XL",
      price: "905 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.t-mobile.cz/tarify"
    },
    {
      operator: "T-Mobile",
      tariff: "Neomezeně XL",
      price: "930 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.t-mobile.cz/tarify"
    },
    {
      operator: "O2",
      tariff: "NEO+ Stříbrný",
      price: "949 Kč",
      data: "Neomezená data",
      calls: "Neomezené volání",
      sms: "Neomezené SMS",
      orderLink: "https://www.o2.cz/osobni/volani/mobilni-tarify"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zpět na hlavní stránku
            </Button>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nejlevnější tarify s neomezenými daty 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kompletní přehled aktuálních nabídek mobilních tarifů s neomezenými daty od všech hlavních operátorů v České republice. Porovnání cen a podmínek.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Operátor</TableHead>
                      <TableHead>Tarif</TableHead>
                      <TableHead className="text-center">Cena měsíčně</TableHead>
                      <TableHead className="text-center">Data</TableHead>
                      <TableHead className="text-center">Volání</TableHead>
                      <TableHead className="text-center">SMS</TableHead>
                      <TableHead className="text-center">Objednat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {neomezeneDataTarify.map((tariff, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{tariff.operator}</TableCell>
                        <TableCell>{tariff.tariff}</TableCell>
                        <TableCell className="text-center font-semibold text-primary">
                          {tariff.price}
                        </TableCell>
                        <TableCell className="text-center">{tariff.data}</TableCell>
                        <TableCell className="text-center">{tariff.calls}</TableCell>
                        <TableCell className="text-center">{tariff.sms}</TableCell>
                        <TableCell className="text-center">
                          <Button
                            variant="default"
                            size="sm"
                            asChild
                          >
                            <a
                              href={tariff.orderLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1"
                            >
                              Objednat
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Výhody neomezených dat
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Žádné limity na spotřebu dat</li>
                  <li>• Ideální pro streamování videa a hudby</li>
                  <li>• Vhodné pro práci z domova</li>
                  <li>• Bez dodatečných poplatků za překročení</li>
                  <li>• Možnost využít telefon jako hotspot</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Na co si dát pozor
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rychlost může být omezena po dosažení určitého limitu</li>
                  <li>• Kontrolujte pokrytí v místě užívání</li>
                  <li>• Zkontrolujte podmínky pro roaming v EU</li>
                  <li>• Pozor na aktivační poplatky</li>
                  <li>• Ověřte délku závazku</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Poznámka k cenám
            </h2>
            <p className="text-muted-foreground">
              Uvedené ceny jsou aktuální k září 2025 a mohou se lišit podle aktuálních akcí a slev jednotlivých operátorů. 
              Doporučujeme ověřit si aktuální podmínky přímo u operátora před objednáním tarifu.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Související články</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/nejlevnejsi-tarify-2025">
                <Button variant="outline">
                  Nejlevnější tarify 2025
                </Button>
              </Link>
              <Link to="/tarify-pro-studenty-a-duchodce">
                <Button variant="outline">
                  Tarify pro studenty a důchodce
                </Button>
              </Link>
              <Link to="/tarify-bez-zavazku">
                <Button variant="outline">
                  Tarify bez závazku
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TarifyNeomezenaData;