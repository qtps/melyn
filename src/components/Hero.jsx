import HeroTop from "../assets/images/hero-top.png";
import HeroBottom from "../assets/images/hero-bottom.png";
import HeroMiddle from "../assets/images/hero.png";
const Hero = () => {
  return (
    <div className="py-16  container mx-auto px-4">
      <div className=" ">
        <div className="">
          <img src={HeroTop} alt="Hero Top" />
        </div>
        <div className="relative w-full h-auto bg-blueviolet-400 flex flex-col items-center justify-center gap-4 py-8">
          <span className="uppercase absolute left-0 bottom-6">[ it's creativity & consistency ]</span>
          <img src={HeroMiddle} alt="Hero Middle" />
          <span className="uppercase absolute right-0 top-6 py-10">[ Marketing isn't magic ]</span>
        </div>

        <div className="relative w-full h-45 ">
          <img src={HeroBottom} alt="Hero Bottom" className="absolute bottom-0 right-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
