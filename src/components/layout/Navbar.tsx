import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6 md:hidden" />
          <a href="/" className="flex items-center gap-2">
            {/* La Quinta Logo Placeholder */}
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-primary tracking-tight">LA QUINTA</span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground">INN & SUITES</span>
            </div>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#rooms" className="transition-colors hover:text-primary">Rooms & Suites</a>
          <a href="#amenities" className="transition-colors hover:text-primary">Amenities</a>
          <a href="#location" className="transition-colors hover:text-primary">Location</a>
          <a href="#offers" className="transition-colors hover:text-primary">Offers</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground mr-4">
            <Phone className="h-4 w-4" />
            <span>1-800-531-5900</span>
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
    </header>
  );
}
