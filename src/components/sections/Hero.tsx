import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern hotel room" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="max-w-2xl text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Reliable comfort at a great value.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium max-w-xl">
            Clean, consistent, and convenient stays. Book direct for the best rates and perks.
          </p>
        </div>

        {/* Booking Widget */}
        <Card className="mt-8 w-full max-w-4xl p-2 md:p-4 bg-white/95 backdrop-blur shadow-xl rounded-xl">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="grid gap-2 w-full">
              <Label htmlFor="check-in" className="text-xs font-semibold uppercase text-muted-foreground">Check In</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="check-in" type="date" className="pl-9" />
              </div>
            </div>
            <div className="grid gap-2 w-full">
              <Label htmlFor="check-out" className="text-xs font-semibold uppercase text-muted-foreground">Check Out</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="check-out" type="date" className="pl-9" />
              </div>
            </div>
            <div className="grid gap-2 w-full">
              <Label htmlFor="guests" className="text-xs font-semibold uppercase text-muted-foreground">Guests</Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <select id="guests" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9">
                  <option>1 Room, 2 Adults</option>
                  <option>1 Room, 1 Adult</option>
                  <option>2 Rooms, 4 Adults</option>
                </select>
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto px-8 text-base font-semibold">
              Check Rates
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
