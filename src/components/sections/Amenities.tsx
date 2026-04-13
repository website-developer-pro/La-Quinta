import { Coffee, Wifi, Car, Dumbbell, Waves, Briefcase } from "lucide-react";

export function Amenities() {
  const amenities = [
    {
      icon: Coffee,
      title: "Free Bright Side Breakfast®",
      description: "Start your day right with waffles, fresh fruit, pastries, and unlimited coffee."
    },
    {
      icon: Wifi,
      title: "Fast Free Wi-Fi",
      description: "Stay connected with high-speed internet access throughout the hotel."
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Ample free parking available for all guests, including large vehicles."
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Keep up with your routine in our fully equipped 24/7 fitness center."
    },
    {
      icon: Waves,
      title: "Outdoor Pool",
      description: "Relax and unwind in our seasonal outdoor swimming pool."
    },
    {
      icon: Briefcase,
      title: "Business Center",
      description: "Access computers, printing, and fax services whenever you need them."
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Hotel Amenities</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for a comfortable and productive stay, all included in your rate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col items-start">
              <div className="bg-primary/10 p-4 rounded-xl text-primary mb-6">
                <amenity.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
              <p className="text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
