import { useRef, useEffect } from "react";
import gsap from "gsap";
import serviceHeroImg from "../../assets/images/serviceHero.png";



const ServiceHero = () => {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const count1Ref = useRef(null);
  const count2Ref = useRef(null);

  // Placeholder Image
  const heroImg = serviceHeroImg;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Left side animation
      gsap.from(leftSideRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 2. Right side animation
      gsap.from(rightSideRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power3.out",
      });

      // 3. Counter Animation for 40M+
      const obj1 = { val: 0 };
      gsap.to(obj1, {
        val: 40,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          if (count1Ref.current) {
            count1Ref.current.textContent = `${Math.round(obj1.val)}M+`;
          }
        },
      });

      // 4. Counter Animation for 8X
      const obj2 = { val: 0 };
      gsap.to(obj2, {
        val: 8,
        duration: 1.2,
        ease: "power1.out",
        onUpdate: () => {
          if (count2Ref.current) {
            count2Ref.current.textContent = `${Math.round(obj2.val)}X`;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="mx-auto w-full max-w-7xl overflow-hidden px-5 py-12 font-sans sm:px-8 md:py-20 lg:px-10"
    >
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Side Content */}
        <div ref={leftSideRef} className="flex flex-col lg:col-span-6">
          <h1 className="mb-6 font-bebas text-4xl leading-[0.95] text-black sm:text-6xl md:text-7xl lg:text-[80px]">
            EVERYTHING YOU NEED <br />
            TO GROW ONLINE
          </h1>

          <p className="mb-10 max-w-lg text-sm uppercase leading-relaxed text-neutral-800 sm:text-base">
            WITH THE RIGHT GUIDANCE AND RESOURCES, YOU CAN ATTRACT MORE
            VISITORS, CONVERT THEM INTO LOYAL CUSTOMERS, AND SCALE YOUR BUSINESS
            WITH CONFIDENCE
          </p>

          {/* Interactive Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <button className="group relative cursor-pointer flex items-center justify-center gap-3 bg-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:scale-95">
              <span>HIRE US</span>
              <span className="text-base transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                &rarr;
              </span>
            </button>

            {/* Secondary Button */}
            <button className="cursor-pointer flex items-center justify-center border-2 border-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.02] hover:bg-black hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:scale-95">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Right Side Content (Image + Cards) */}
        <div ref={rightSideRef} className="flex flex-col gap-5 lg:col-span-6">
          {/* Main Hero Image */}
          <div className="w-full overflow-hidden bg-neutral-200">
            <img
              src={heroImg}
              alt="Team working together"
              className="h-75 w-full object-cover sm:h-105 md:h-115"
            />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {/* Stat Box 1 */}
            <div className="flex flex-col justify-between bg-[#d8b4fe] p-4 sm:p-6 md:p-8">
              <span
                ref={count1Ref}
                className="font-bebas text-3xl leading-none text-black sm:text-5xl md:text-6xl"
              >
                0M+
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase leading-tight tracking-wider text-black sm:mt-6 sm:text-xs md:text-sm">
                IN CLIENT REVENUE GENERATED
              </p>
            </div>

            {/* Stat Box 2 */}
            <div className="flex flex-col justify-between bg-[#facc15] p-4 sm:p-6 md:p-8">
              <span
                ref={count2Ref}
                className="font-bebas text-3xl leading-none text-black sm:text-5xl md:text-6xl"
              >
                0X
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase leading-tight tracking-wider text-black sm:mt-6 sm:text-xs md:text-sm">
                AVERAGE ROI ACHIEVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;