import HeroTop from "../assets/images/hero-top.png";
import HeroBottom from "../assets/images/hero-bottom.png";
import HeroMiddle from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="py-8 md:py-16 container mx-auto px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        {/* Top Header Image / Text */}
        <div className="w-full max-w-2xl self-start  md:mb-10 md:pl-12 z-10  lg:pl-15 xl:-mb-3">
          <img
            src={HeroTop}
            alt="Hero Top"
            className="w-auto h-12 sm:h-20 md:h-28 lg:h-42 xl:pl-40 2xl:pl-50 object-contain"
          />
        </div>

        {/* Middle Section with Image and Side Texts */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center my-4 md:my-0">
          {/* Right Top Bracket Text on Mobile (Desktop Side) */}
          <span className="uppercase text-xs md:text-sm tracking-wider text-gray-700 md:absolute md:right-0 md:-top-10 mb-2 md:mb-0">
            [ Marketing isn't magic ]
          </span>

          {/* Main Hero Center Image */}
          <div className="w-full max-w-xl px-2">
            <img
              src={HeroMiddle}
              alt="Hero Middle"
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Left Bottom Bracket Text on Mobile (Desktop Side) */}
          <span className="uppercase text-xs md:text-sm tracking-wider text-gray-700 md:absolute md:left-0 md:-bottom-10 mt-2 md:mt-0">
            [ it's creativity & consistency ]
          </span>
        </div>

        {/* Bottom Header Image / Text */}
        <div className="w-full max-w-2xl self-end   md:mt-13 z-10 flex  lg:pl-40 xl:pl-7  justify-start  ">
          <img
            src={HeroBottom}
            alt="Hero Bottom"
            className="w-auto h-12 sm:h-20 md:h-28 lg:h-42 xl:-mt-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
