import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50 text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready for a comfortable stay?</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Book direct today for our Best Rate Guarantee, free breakfast, and flexible cancellation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto px-10 text-lg h-14">
            Book Your Room Now
          </Button>
          <p className="text-sm text-muted-foreground sm:hidden">
            No credit card required for most bookings.
          </p>
        </div>
        <p className="text-sm text-muted-foreground mt-6 hidden sm:block">
          No credit card required for most bookings. Free cancellation up to 24 hours before check-in.
        </p>
      </div>
    </section>
  );
}
