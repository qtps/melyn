import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import melynHero from "../../assets/images/we-are-melyn.png";
import melyn2 from "../../assets/images/we-are-melyn-2.png";
import melyn3 from "../../assets/images/we-are-melyn-3.png";    

gsap.registerPlugin(ScrollTrigger);

const Melyn = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const heroImgRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading text reveal animation (bottom to top reveal)
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Main Hero Banner Image reveal
      gsap.fromTo(
        heroImgRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroImgRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Staggered reveal for cards & content sections
      cardsRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container mx-auto px-6 py-16 font-sans overflow-hidden">
      {/* Heading Section */}
      <div className="overflow-hidden mb-8 md:mb-12">
        <h1
          ref={headingRef}
          className="text-5xl ms:text-6xl mm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wide text-black uppercase font-bebas leading-none"
        >
          WE’RE MELYN
        </h1>
      </div>

      {/* Main Top Banner Image */}
      <div 
        ref={heroImgRef}
        className="w-full h-80 sm:h-112.5 md:h-150 bg-gray-200 overflow-hidden mb-12 md:mb-16"
      >
        {melynHero ? (
          <img
            src={melynHero}
            alt="We're Melyn Team"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-sm">
            <img src={melynHero} alt="Melyn Hero Placeholder" />
          </div>
        )}
      </div>

      {/* Content & Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-12">
          {/* Founded Badge */}
          <div 
            ref={(el) => (cardsRef.current[0] = el)}
            className="space-y-4"
          >
            <span className="inline-block bg-amber-400 text-black font-extrabold px-3 py-1 text-sm md:text-base uppercase tracking-wider font-bebas">
              FOUNDED IN 2019
            </span>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide uppercase leading-relaxed max-w-sm">
              WE STARTED WITH A CLEAR MISSION TO HELP BUSINESSES GROW AND THRIVE IN THE DIGITAL WORLD THROUGH INNOVATIVE MARKETING STRATEGIES.
            </p>
          </div>

          {/* Left Card Image */}
          <div 
            ref={(el) => (cardsRef.current[1] = el)}
            className="w-full h-87.5 sm:h-96 bg-gray-200 overflow-hidden"
          >
            {melyn2 ? (
              <img
                src={melyn2}
                alt="Melyn Workspace"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-sm">
                [ OFFICE IMAGE PLACEHOLDER ]
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 space-y-10 md:pt-4">
          <div 
            ref={(el) => (cardsRef.current[2] = el)}
            className="space-y-4 text-xs sm:text-sm font-semibold text-gray-700 tracking-wide uppercase leading-relaxed max-w-xl"
          >
            <p>
              MELYN WAS BORN OUT OF THE DESIRE TO BRIDGE THE GAP BETWEEN BRANDS AND THEIR AUDIENCES WITH AUTHENTIC, DATA-DRIVEN CAMPAIGNS.
            </p>
            <p>
              FROM DAY ONE, MELYN FOCUSED ON DELIVERING MEASURABLE RESULTS, COMBINING CREATIVITY WITH TECHNOLOGY TO BOOST ONLINE VISIBILITY AND ENGAGEMENT.
            </p>

            <div className="pt-2">
              <a
                href="#hire-us"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                HIRE US <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div 
            ref={(el) => (cardsRef.current[3] = el)}
            className="w-full h-100 sm:h-120 bg-gray-200 overflow-hidden"
          >
            {melyn3 ? (
              <img
                src={melyn3}
                alt="Melyn Team Member"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-sm">
                [ MEMBER IMAGE PLACEHOLDER ]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Melyn;