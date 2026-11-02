import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "ABOUT US", to: "/about" },
    { label: "SERVICES", to: "/services" },
    { label: "WORK", to: "/work" },
  ];

  const linkStyleClass =
    "relative py-1 text-black hover:text-gray-600 transition-all duration-200 uppercase active:scale-95 transform origin-center select-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-16">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                <img src={logo} alt="Logo" className="w-5 h-5" />
              </div>
              <span className="text-4xl font-bold tracking-tight text-black select-none">
                melyn
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm font-light tracking-wide ${linkStyleClass}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center space-x-2 bg-black text-white px-5 py-2.5 text-xs font-semibold tracking-wider hover:bg-gray-800 transition-all duration-200 active:scale-95 uppercase select-none shadow-sm active:shadow-none"
            >
              <span>HIRE US</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>

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

      {/* smooth transition for mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-200 ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="container mx-auto px-4 space-y-4">
          <div className="flex flex-col items-start space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`text-base font-light ${linkStyleClass}`}
              >
                {item.label}
              </Link>
            ))}
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
      </div>
    </nav>
  );
};

export default Navbar;
