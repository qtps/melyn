import { useRef, useEffect } from "react";
import gsap from "gsap";
import monir from "../assets/images/monir.png";
import robi from "../assets/images/robi.png";

const creatorsData = [
  {
    id: 1,
    name: "SARAH T.",
    role: "ECOMMERCE BRAND OWNER",
    quote: "“MELYN COMPLETELY TRANSFORMED OUR....”",
    avatarBg: "bg-cyan-400",
    imgSrc: monir,
    link: "#",
  },
  {
    id: 2,
    name: "ALEX M.",
    role: "CONTENT CREATOR",
    quote: "“INCREDIBLE CONSISTENCY AND SPEED!”",
    avatarBg: "bg-pink-400",
    imgSrc: robi,
    link: "#",
  },
  {
    id: 3,
    name: "DANIEL K.",
    role: "MARKETING DIRECTOR",
    quote: "“OUTSTANDING RESULTS FROM DAY ONE.”",
    avatarBg: "bg-emerald-400",
    imgSrc: "",
    link: "#",
  },
  {
    id: 4,
    name: "EMMA R.",
    role: "AGENCY FOUNDER",
    quote: "“THE BEST DECISION FOR OUR BRAND.”",
    avatarBg: "bg-purple-400",
    imgSrc: "",
    link: "#",
  },
];

const Creators = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null); // GSAP animation reference thakar jonno

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const ctx = gsap.context(() => {
      // Animation-ti reference variable-e rekhe dewa hoyeche
      tweenRef.current = gsap.to(slider, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  // Mouse hover korle animation thambe
  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  // Mouse soriye nile animation abar chalu hobe
  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  const duplicatedData = [...creatorsData, ...creatorsData];

  return (
    <>
      <section className="container mx-auto border-y border-gray-200 bg-white overflow-hidden py-6">
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* 1. left side fixed header */}
          <div className="w-full lg:w-1/3 xl:w-1/4 px-6 py-4 bg-white z-10 flex items-center gap-3 border-b lg:border-b-0 lg:border-r border-gray-200 shrink-0">
            <span className="text-2xl md:text-3xl">❤️</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-black uppercase tracking-tight leading-tight">
              BY 50K+ CREATORS <br /> & BRANDS
            </h2>
          </div>

          {/* 2. right side animated slider section */}
          <div
            className="w-full lg:w-2/3 xl:w-3/4 overflow-hidden relative py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={sliderRef}
              className="flex items-center gap-8 w-max whitespace-nowrap"
            >
              {duplicatedData.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 bg-gray-50/50 p-2 md:p-3 rounded-xl min-w-85 md:min-w-105 shrink-0 border border-gray-100 transition-all hover:bg-gray-100/80 hover:shadow-sm"
                >
                  {/* Image Placeholder */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden shrink-0 flex items-center justify-center ${item.avatarBg}`}
                  >
                    {item.imgSrc ? (
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-xs font-semibold">
                        [ Image ]
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col justify-center space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-200 text-gray-800 text-xs font-bold px-2 py-0.5 rounded tracking-wide">
                        {item.name}
                      </span>
                      <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-medium">
                        {item.role}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm font-semibold text-gray-900 tracking-tight uppercase">
                      {item.quote}
                    </p>

                    {/* Learn More Hyperlink */}
                    <a
                      href={item.link || "#"}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-700 hover:text-black uppercase tracking-wider transition-colors pt-1 cursor-pointer"
                    >
                      LEARN MORE <span className="text-xs">➔</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <p className="container mx-auto text-start text-sm md:text-xl font-medium text-black mt-4 md:mt-12 px-4 mb-4">
        [ We blend creativity, strategy <br /> and technology to help brands <br /> grow online ]
      </p>
    </>
  );
};
export default Creators;
