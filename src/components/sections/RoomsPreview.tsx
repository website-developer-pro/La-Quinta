import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Users, Maximize, Coffee } from "lucide-react";

export function RoomsPreview() {
  const rooms = [
    {
      title: "Standard King Room",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 109,
      features: ["1 King Bed", "Sleeps 2", "Free Wi-Fi", "Mini-Fridge"],
    },
    {
      title: "Double Queen Room",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 119,
      features: ["2 Queen Beds", "Sleeps 4", "Free Wi-Fi", "Work Desk"],
    },
    {
      title: "King Suite with Sofa Bed",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 149,
      features: ["1 King Bed + Sofa", "Sleeps 4", "Living Area", "Microwave"],
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Rooms & Suites</h2>
            <p className="text-lg text-muted-foreground">
              Relax in our spacious, clean rooms designed for your comfort. Every stay includes our signature free breakfast.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">View All Rooms</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{room.title}</h3>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground block">From</span>
                    <span className="text-2xl font-bold text-primary">${room.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
