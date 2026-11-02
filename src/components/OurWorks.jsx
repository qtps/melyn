import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurWorksCard from "./OurWorksCard";

import nexora from "../assets/images/nexora.png";
import fyntra from "../assets/images/fyntra.png";
import trivexa from "../assets/images/tirvexa.png";
import Project4 from "../assets/images/project-4.png";

import nexoraLogo from "../assets/icons/nexora.svg";
import fyntraLogo from "../assets/icons/fyntra.svg";
import trivexaLogo from "../assets/icons/trivexa.svg";

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  {
    id: 1,
    logoText: "Nexora",
    stat: "115.9%",
    description: "INCREASE IN ORGANIC VISITS AFTER 1 MONTH",
    imageSrc: nexora,
    logoSrc: nexoraLogo,
    slug: "/home/casestudy",
  },
  {
    id: 2,
    logoText: "Fyntra",
    stat: "240%",
    description: "BOOST IN USER ENGAGEMENT ACROSS ALL PLATFORMS",
    imageSrc: fyntra,
    logoSrc: fyntraLogo,
    slug: "/home/casestudy", 
  },
  {
    id: 3,
    logoText: "Trivexa",
    stat: "3.5X",
    description: "GROWTH IN CONVERSION RATE WITHIN 90 DAYS",
    imageSrc: trivexa,
    logoSrc: trivexaLogo,
    slug: "/home/casestudy", 
  },
  {
    id: 4,
    logoText: "Pulse",
    stat: "85%",
    description: "REDUCTION IN CUSTOMER ACQUISITION COST",
    imageSrc: Project4,
    slug: "/home/casestudy", 
  },
];

// Desktop: cards behind peek out to the left
const desktopState = (depth) => ({
  x: -depth * 40,
  y: 0,
  scaleX: 1,
  scaleY: 1 - depth * 0.085,
  opacity: 1 - depth * 0.07,
});

// Mobile: cards behind peek out underneath
const mobileState = (depth) => ({
  x: 0,
  y: depth * 14,
  scaleX: 1 - depth * 0.05,
  scaleY: 1,
  opacity: 1 - depth * 0.08,
});

const STAR_POINTS = Array.from({ length: 20 }, (_, i) => {
  const angle = (i * Math.PI) / 10 - Math.PI / 2;
  const r = i % 2 === 0 ? 48 : 33;
  return `${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`;
}).join(" ");

const SmileySticker = () => (
  <svg
    viewBox="0 0 100 100"
    aria-hidden="true"
    className="absolute -right-4 -bottom-2 sm:-right-8 sm:-bottom-5 md:-right-12 md:-bottom-8 w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 rotate-12 z-10 pointer-events-none"
  >
    <polygon
      points={STAR_POINTS}
      fill="#C9A0F5"
      stroke="#C9A0F5"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <circle cx="39" cy="46" r="3" fill="#1a1a1a" />
    <circle cx="61" cy="46" r="3" fill="#1a1a1a" />
    <path
      d="M37 57 Q50 70 63 57"
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

const OurWorks = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".work-card-wrapper");
      const mm = gsap.matchMedia();

      const buildStack = ({ stateFor, exitVars, scrollPerCard }) => {
        // Arrange cards in initial stacked positions
        cards.forEach((card, i) => {
          gsap.set(card, { ...stateFor(i), xPercent: 0, yPercent: 0 });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${(cards.length - 1) * scrollPerCard}%`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          tl.to(
            card,
            { ...exitVars, opacity: 0, autoAlpha: 0, ease: "none" },
            i,
          );
          cards.slice(i + 1).forEach((behind, offset) => {
            tl.to(behind, { ...stateFor(offset), ease: "none" }, i);
          });
        });
      };

      mm.add("(min-width: 768px)", () =>
        buildStack({
          stateFor: desktopState,
          exitVars: { xPercent: 140 },
          scrollPerCard: 100,
        }),
      );

      mm.add("(max-width: 767px)", () =>
        buildStack({
          stateFor: mobileState,
          exitVars: { yPercent: -140 },
          scrollPerCard: 90,
        }),
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto min-h-screen text-white flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:py-12 relative overflow-hidden"
      style={{
        backgroundColor: "#00664F",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Heading */}
      <div className="w-full text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-14 z-30">
        <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-widest uppercase text-white/90 mb-2 sm:mb-3">
          Growth Impact Speed
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-normal uppercase leading-[0.95] font-['Bebas_Neue'] tracking-wide">
          The difference we make through our{" "}
          <span className="relative inline-block">
            work
            <SmileySticker />
          </span>
        </h2>
      </div>

      {/* Card stack container */}
      <div className="relative w-full max-w-5xl mx-auto z-20 md:pl-28 pt-2 pb-12 md:py-0">
        <div className="relative h-130 sm:h-120 md:h-117.5">
          {WORKS.map((work, index) => (
            <div
              key={work.id}
              className="work-card-wrapper absolute inset-0 will-change-transform"
              style={{ zIndex: WORKS.length - index }}
            >
              <OurWorksCard {...work} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;