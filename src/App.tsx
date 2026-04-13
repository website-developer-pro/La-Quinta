/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { TrustBar } from "./components/sections/TrustBar";
import { RoomsPreview } from "./components/sections/RoomsPreview";
import { Amenities } from "./components/sections/Amenities";
import { SocialProof } from "./components/sections/SocialProof";
import { LocationHighlight } from "./components/sections/LocationHighlight";
import { SpecialOffers } from "./components/sections/SpecialOffers";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <RoomsPreview />
        <Amenities />
        <SocialProof />
        <LocationHighlight />
        <SpecialOffers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
