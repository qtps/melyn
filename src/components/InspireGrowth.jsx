import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import smileImg from "../assets/icons/smile.svg";
import InspireGrowthCard from "./InspireGrowthCard";
import MagnifyingGlassIcon from "../assets/icons/magnifi-glass-1.svg";
import ppcImg from "../assets/icons/magnifi-glass-2.svg";
import brandingImg from "../assets/icons/file-icons.svg";

// GSAP Plugin Register
gsap.registerPlugin(ScrollTrigger);

const InspireGrowth = () => {
  const containerRef = useRef(null);

  const cardsData = [
    {
      id: 1,
      title: "SEARCH ENGINE OPTIMIZATION",
      badgeText: "SEO",
      badgeBgColor: "#ffcc00",
      description: "SEO IS THE PROCESS OF IMPROVING YOUR WEBSITE'S VISIBILITY ON SEARCH ENGINES LIKE GOOGLE.",
      imageSrc: MagnifyingGlassIcon,
      bgColor: "#f4f7f6",
      hoverBgColor: "#e8f0ed" 
    },
    {
      id: 2,
      title: "PAY-PER-CLICK ADVERTISING",
      badgeText: "PPC",
      badgeBgColor: "#e090ff",
      description: "IS ONE OF THE FASTEST WAYS TO DRIVE TRAFFIC TO YOUR BUSINESS. PLACING ADS ON LIKE GOOGLE",
      imageSrc: ppcImg,
      bgColor: "#f4f7f6",
      hoverBgColor: "#f4f7f6"
    },
    {
      id: 3,
      title: "BRAND STRATEGY AND IDENTITY DESIGN",
      badgeText: "BRANDING",
      badgeBgColor: "#00e5ff",
      description: "WE CRAFT BRAND STRATEGIES THAT DEFINE WHO YOU ARE AND HOW THE WORLD SEES YOU",
      imageSrc: brandingImg,
      bgColor: "#f4f7f6",
      hoverBgColor: "#e8f0ed"
    },
  ];

  // GSAP Stagger Scroll Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".inspire-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.25, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", 
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-4" ref={containerRef}>
      {/* Header Section */}
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center justify-center text-center py-16">
        <h4 className="pb-5 text-sm ms:text-base md:text-lg">
          Together, we transform
        </h4>

        <h2 className="text-2xl xs:text-3xl ms:text-4xl mm:text-5xl md:text-6xl lg:text-7xl font-['Bebas_Neue'] tracking-wider leading-tight">
          BUILDING{" "}
          <span className="relative inline-block">
            CONNECTI
            <span className="relative inline-block">
              ON
              <img
                src={smileImg}
                alt="Smile"
                className="w-18 h-18
                           xs:w-8 xs:h-8 
                           ms:w-10 ms:h-10
                           mm:w-12 mm:h-12 
                           md:w-14 md:h-14
                           lg:w-16 lg:h-16 
                           absolute left-1/2 -top-1/3 -translate-x-1/2 translate-y-1/4
                           pointer-events-none select-none z-10"
              />
            </span>
            S
          </span>{" "}
          THAT INSPIRE GROWTH
        </h2>
      </div>

      {/* Cards List Section with GSAP Stagger */}
      <div className="space-y-6 pb-16 max-w-5xl mx-auto">
        {cardsData.map((card) => (
          <InspireGrowthCard
            key={card.id}
            title={card.title}
            badgeText={card.badgeText}
            badgeBgColor={card.badgeBgColor}
            description={card.description}
            imageSrc={card.imageSrc}
            bgColor={card.bgColor}
            hoverBgColor={card.hoverBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default InspireGrowth;