import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import work1 from '../assets/images/work-1.png';
import work2 from '../assets/images/work-2.png';
import work3 from '../assets/images/work-3.png';
import work4 from '../assets/images/work-4.png';
import work5 from '../assets/images/work-5.png';
import ThumbsUp from '../assets/icons/thumbs-up.svg';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: 'WIREFLOW',
    subtitle: 'COMPLETE REBRANDING PROJECT',
    tags: [
      { name: 'BRANDING', bg: 'bg-purple-100 text-purple-600' },
      { name: 'UI/UX', bg: 'bg-indigo-100 text-indigo-600' },
    ],
    image: work1, 
  },
  {
    id: 2,
    title: 'ADLIFT',
    subtitle: 'COMPLETE REBRANDING PROJECT',
    tags: [
      { name: 'APPS', bg: 'bg-blue-100 text-blue-600' },
      { name: 'DEVELOPMENT', bg: 'bg-purple-100 text-purple-600' },
      { name: 'PPC', bg: 'bg-orange-100 text-orange-600' },
    ],
    image: work2,
  },
  {
    id: 3,
    title: 'TARGETFLOW',
    subtitle: 'COMPLETE REBRANDING PROJECT',
    tags: [
      { name: 'ECOMMERCE', bg: 'bg-teal-100 text-teal-600' },
      { name: 'APP DESIGN', bg: 'bg-rose-100 text-rose-600' },
    ],
    image: work3,
  },
  {
    id: 4,
    title: 'STORYGRID',
    subtitle: 'COMPLETE REBRANDING PROJECT',
    tags: [
      { name: 'BRANDING', bg: 'bg-sky-100 text-sky-600' },
      { name: 'UI/UX', bg: 'bg-indigo-100 text-indigo-600' },
      { name: 'APP DESIGN', bg: 'bg-rose-100 text-rose-600' },
    ],
    image: work4,
  },
  {
    id: 5,
    title: 'SOCIALSYNC',
    subtitle: 'COMPLETE REBRANDING PROJECT',
    tags: [
      { name: 'MARKETING', bg: 'bg-cyan-100 text-cyan-600' },
      { name: 'SEO', bg: 'bg-purple-100 text-purple-600' },
      { name: 'APP DESIGN', bg: 'bg-rose-100 text-rose-600' },
    ],
    image: work5,
  },
];

const GreatWork = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP ScrollTrigger animation
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
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
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="container mx-auto px-6 py-16 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-16 border-b pb-6 gap-4">
        <div>
          <span className="text-xs tracking-widest text-gray-500 uppercase font-semibold">
            FEATURED WORK
          </span>
          
          <h2 className="text-3xl mm:text-4xl md:text-5xl font-black tracking-tight text-black mt-2 leading-none uppercase">
            {/* Line 1: WE DO + Icon */}
            <span className="flex items-center  whitespace-nowrap">
              <span>WE DO</span>
              <img 
                src={ThumbsUp} 
                alt="Thumbs Up" 
                className="w-16 h-16 ms:w-18 ms:h-18 mm:w-18 mm:h-18 md:w-26 md:h-26 inline-block object-contain" 
              />
            </span>

            {/* Line 2: GREAT WORK strictly on new line */}
            <span className="block mt-1">
              GREAT WORK
            </span>
          </h2>
        </div>

        <div>
          <a
            href="#all-works"
            className="text-xs font-semibold tracking-wider text-black hover:opacity-70 transition-opacity uppercase whitespace-nowrap"
          >
            [ SEE ALL WORKS ]
          </a>
        </div>
      </div>

      {/* Grid Layout (Staggered 2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`group cursor-pointer ${
              index % 2 !== 0 ? 'md:mt-24' : ''
            }`}
          >
            {/* Image Placeholder with Hover Zoom */}
            <div className="relative w-full h-80 ms:h-96 md:h-120 bg-gray-100 overflow-hidden mb-5">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition-colors duration-500">
                  <span className="text-sm tracking-widest font-mono">
                    ASSET PLACEHOLDER ({project.title})
                  </span>
                </div>
              )}
            </div>

            {/* Content & Tags */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-black tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 tracking-wide font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 justify-end">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider ${tag.bg}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatWork;