import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function SpecialOffers() {
  return (
    <section id="offers" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Special Offers</h2>
          <p className="text-primary-foreground/80 text-lg">
            Book direct to unlock exclusive savings and perks you won't find anywhere else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 text-yellow-300 font-semibold mb-4">
                <Clock className="w-4 h-4" />
                <span>Limited Time</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Weekend Getaway</h3>
              <p className="text-white/80 mb-6">
                Save up to 15% when you stay 2 or more nights over the weekend. Includes late checkout.
              </p>
              <Button variant="secondary" className="w-full sm:w-auto text-primary">Claim Offer</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white backdrop-blur">
            <CardContent className="p-8">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                Wyndham Rewards®
              </div>
              <h3 className="text-2xl font-bold mb-2">Member Rate</h3>
              <p className="text-white/80 mb-6">
                Join Wyndham Rewards for free and save 10% or more on our Best Available Rate.
              </p>
              <Button variant="secondary" className="w-full sm:w-auto text-primary">Join & Save</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
