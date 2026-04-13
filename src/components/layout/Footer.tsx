export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-xl font-bold leading-none text-white tracking-tight">LA QUINTA</span>
              <span className="text-[10px] font-medium tracking-widest text-slate-400">INN & SUITES</span>
            </div>
            <p className="text-sm text-slate-400">
              Reliable comfort at a great value. A Wyndham Hotel.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Hotel</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manage Reservation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Rate Guarantee</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Wyndham Hotels & Resorts, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Wyndham Rewards</span>
            <span>By Wyndham</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
