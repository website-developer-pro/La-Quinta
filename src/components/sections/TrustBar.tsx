import { CheckCircle2, Coffee, Wifi, Car } from "lucide-react";

export function TrustBar() {
  const benefits = [
    { icon: CheckCircle2, text: "Clean & Comfortable Rooms" },
    { icon: Coffee, text: "Free Bright Side Breakfast®" },
    { icon: Wifi, text: "Fast Free Wi-Fi" },
    { icon: Car, text: "Free Parking" },
  ];

  return (
    <div className="w-full bg-slate-50 border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start gap-3 text-sm md:text-base font-medium text-slate-700">
              <benefit.icon className="h-5 w-5 text-primary" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
