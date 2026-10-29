import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white  border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* navmenu left section */}
          <div className="flex items-center space-x-16">
                      {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
              <img src={logo} alt="Logo" className="w-5 h-5" />
            </div>
            <span className="text-4xl font-bold tracking-tight text-black">
              melyn
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-light tracking-wide text-black hover:text-gray-600 transition-colors uppercase"
            >
              ABOUT US   
            </a>
            <a
              href="#services"
              className="text-sm font-light tracking-wide text-black hover:text-gray-600 transition-colors uppercase"
            >
              SERVICES
            </a>
            <a
              href="#work"
              className="text-sm font-light tracking-wide text-black hover:text-gray-600 transition-colors uppercase"
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
              className="hidden sm:inline-flex items-center space-x-2 bg-black text-white px-5 py-2.5 text-xs font-semibold tracking-wider hover:bg-gray-800 transition-colors uppercase"
            >
              <span>HIRE US</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Menu Circle Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-gray-50 transition-colors focus:outline-none"
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
          <div className="flex flex-col space-y-3 pt-2">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-black hover:text-gray-600 uppercase"
            >
              ABOUT US
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-black hover:text-gray-600 uppercase"
            >
              SERVICES
            </a>
            <a
              href="#work"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-black hover:text-gray-600 uppercase"
            >
              WORK
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-2 bg-black text-white px-5 py-3 text-xs font-semibold tracking-wider uppercase"
              >
                <span>HIRE US</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
