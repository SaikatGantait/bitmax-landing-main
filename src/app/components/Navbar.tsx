import logo from "../../../public/logo.png";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* <div className="size-10 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-inner"></div>
              </div> */}
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/20 to-red-500/20 blur-xl opacity-60"></div>
            </div>
            <img src={logo.src} className="w-24" />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              Feature
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              Benefit
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              Whitepaper
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="relative group px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105">
            <span className="relative z-10">Get Started</span>
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 