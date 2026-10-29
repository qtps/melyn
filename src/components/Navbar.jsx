import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common styles for nav links (Hover underline + Active click effect)
  const linkStyleClass =
    "relative py-1 text-black hover:text-gray-600 transition-all duration-200 uppercase active:scale-95 transform origin-center select-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="w-full bg-white border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* navmenu left section */}
          <div className="flex items-center space-x-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 cursor-pointer ">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                <img src={logo} alt="Logo" className="w-5 h-5" />
              </div>
              <span className="text-4xl font-bold tracking-tight text-black select-none">
                melyn
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className={`text-sm font-light tracking-wide ${linkStyleClass}`}
              >
                ABOUT US   
              </a>
              <a
                href="#services"
                className={`text-sm font-light tracking-wide ${linkStyleClass}`}
              >
                SERVICES
              </a>
              <a
                href="#work"
                className={`text-sm font-light tracking-wide ${linkStyleClass}`}
              >
                WORK
              </a>
            </div>
          </div>

          {/* Right Action Area (CTA & Menu Icon) */}
          <div className="flex items-center space-x-4">
            {/* Hire Us Button */}
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center space-x-2 bg-black text-white px-5 py-2.5 text-xs font-semibold tracking-wider hover:bg-gray-800 transition-all duration-200 active:scale-95 uppercase select-none shadow-sm active:shadow-none"
            >
              <span>HIRE US</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>

            {/* Menu Circle Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="md:hidden w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-gray-50 transition-all duration-150 active:scale-90 focus:outline-none select-none"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col items-start space-y-4 pt-2">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`text-base font-light ${linkStyleClass}`}
            >
              ABOUT US
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className={`text-base font-light ${linkStyleClass}`}
            >
              SERVICES
            </a>
            <a
              href="#work"
              onClick={() => setIsOpen(false)}
              className={`text-base font-light ${linkStyleClass}`}
            >
              WORK
            </a>
            <div className="pt-2 w-full">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group w-full inline-flex items-center justify-center space-x-2 bg-black text-white px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 select-none"
              >
                <span>HIRE US</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;