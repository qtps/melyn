const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4f6f6] text-black py-12 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Section: Brand Name & Tagline */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 md:mb-24">
          
          {/* Main Large Brand Title */}
          <h1 className="text-[18vw] lg:text-[13rem] font-black leading-none tracking-wider uppercase font-['Bebas_Neue'] text-black">
            MELYN
          </h1>

          {/* Right Side Tagline */}
          <div className="max-w-md">
            <h2 className="text-3xl xs:text-4xl ms:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
              LET’S CREATE <br /> SOMETHING BEAUTIFUL
            </h2>
          </div>
        </div>

        {/* Middle Section: Links, Contact, and CTA Button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-end pt-8 border-t border-gray-200/60 pb-12">
          
          {/* Column 1: Company Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
              COMPANY
            </span>
            <a href="#about" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              ABOUT US
            </a>
            <a href="#work" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              WORK
            </a>
            <a href="#services" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              SERVICES
            </a>
          </div>

          {/* Column 2: Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
              FOLLOW US
            </span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              FACEBOOK
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              LINKEDIN
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              X (TWITTER)
            </a>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
              CONTACT US
            </span>
            <a href="mailto:melyn@gmail.com" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              MELYN@GMAIL.COM
            </a>
            <a href="tel:+0014567859" className="text-sm font-extrabold uppercase hover:text-gray-600 transition-colors">
              +001 456 7859
            </a>
          </div>

          {/* Column 4: CTA Button */}
          <div className="flex sm:justify-end items-end mt-4 sm:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-all group"
            >
              <span>HIRE US</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <p>&copy; {currentYear} MELYN. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-black transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#terms" className="hover:text-black transition-colors">
              TERMS & CONDITIONS
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;