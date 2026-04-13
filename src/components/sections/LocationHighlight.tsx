import { MapPin, Plane, Car, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationHighlight() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Perfectly Located</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're flying in, driving through, or exploring the city, our location puts you exactly where you need to be.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">International Airport</h4>
                  <p className="text-muted-foreground">Just 5 miles away. Free 24/7 airport shuttle available.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Highway Access</h4>
                  <p className="text-muted-foreground">Immediate access to I-95. Perfect for road trippers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dining & Shopping</h4>
                  <p className="text-muted-foreground">Walking distance to 10+ restaurants and a major shopping center.</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="gap-2">
              <MapPin className="w-4 h-4" />
              Get Directions
            </Button>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border">
            {/* Map Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Map view" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
