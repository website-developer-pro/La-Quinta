import { Star } from "lucide-react";

export function SocialProof() {
  const reviews = [
    {
      name: "Sarah M.",
      type: "Business Traveler",
      text: "Exceptionally clean and quiet. The Wi-Fi was fast enough for my video calls, and the bed was incredibly comfortable. Will definitely stay here again.",
      rating: 5
    },
    {
      name: "The Johnson Family",
      type: "Family Vacation",
      text: "Perfect stop on our road trip. The kids loved the waffle maker at breakfast, and the room was spacious enough for all four of us.",
      rating: 5
    },
    {
      name: "David R.",
      type: "Weekend Getaway",
      text: "Great value for the price. The staff was very welcoming, and the location is super convenient to the highway and local restaurants.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Loved by our guests</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.5/5 Average Rating</span>
          </div>
          <p className="text-muted-foreground">Based on over 1,200 verified reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
