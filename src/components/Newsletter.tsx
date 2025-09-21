import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Děkujeme za registraci!",
        description: "Budeme vás informovat o nejlepších nabídkách.",
      });
    }
  };

  return (
    <Card className="p-6 bg-accent/50 border-primary/20 shadow-custom">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            {isSubmitted ? <CheckCircle className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
          </div>
        </div>

        {!isSubmitted ? (
          <>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Nepropásněte nejlevnější nabídky
              </h3>
              <p className="text-muted-foreground">
                Jednou za měsíc vám pošleme srovnání zdarma
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Váš e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center"
              />
              <Button type="submit" className="w-full shadow-button">
                Přihlásit se k odběru
              </Button>
            </form>
          </>
        ) : (
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-savings-green">
              Registrace dokončena!
            </h3>
            <p className="text-muted-foreground">
              Brzy vám pošleme nejlepší nabídky
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Newsletter;