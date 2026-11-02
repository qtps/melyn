import { useEffect } from "react";
import { Link } from "react-router-dom";
import nexoraImg from "../../assets/images/nexora.png";
import fyntraImg from "../../assets/images/fyntra.png";
import trivexaImg from "../../assets/images/tirvexa.png";
import nexoraIcon from "../../assets/icons/nexora.svg";
import fyntraIcon from "../../assets/icons/fyntra.svg";
import trivexaIcon from "../../assets/icons/trivexa.svg";

const caseStudiesData = [
  {
    id: 1,
    company: "Nexora",
    stat: "115.9%",
    description: "INCREASE IN ORGANIC VISITS AFTER 1 MONTH",
    slug: "/work/nexora",
    imageSrc: nexoraImg,
    icons: nexoraIcon,
  },
  {
    id: 2,
    company: "Fyntra",
    stat: "3.4X",
    description: "HIGHER CONVERSION RATE AFTER WEBSITE REDESIGN",
    slug: "/work/fyntra",
    imageSrc: fyntraImg,
    icons: fyntraIcon,
  },
  {
    id: 3,
    company: "Trivexa",
    stat: "250%",
    description: "BOOST IN PAID AD ROI WITHIN 1 MONTH",
    slug: "/work/trivexa",
    imageSrc: trivexaImg,
    icons: trivexaIcon,
  },
];

const CaseStudy = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="animate-fade-up text-5xl sm:text-7xl font-bold font-['Bebas_Neue'] tracking-wider text-center mb-10 text-black uppercase">
        We Drive Results
      </h2>

      <div className="flex flex-col gap-8">
        {caseStudiesData.map((item, index) => (
          <div
            key={item.id}
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
            className="animate-fade-up opacity-0 group w-full bg-[#f4f5f5] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-stretch justify-between gap-6 transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
              {/* Dynamic imported icon implementation */}
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                <img
                  src={item.icons}
                  alt={`${item.company} icon`}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-black font-semibold">{item.company}</span>
              </div>

              <div>
                <h3 className="font-['Bebas_Neue'] text-6xl sm:text-8xl font-bold leading-none tracking-tight text-black">
                  {item.stat}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-semibold uppercase text-gray-600 tracking-wider max-w-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Link
                to={item.slug}
                className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase font-bold text-black group-hover:text-blue-600 transition-colors self-start mt-2"
              >
                <span>View project</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>

            <div className="w-full md:w-1/2 min-h-55 sm:min-h-70 bg-gray-200 rounded-xl overflow-hidden relative flex items-center justify-center">
              {item.imageSrc ? (
                <img src={item.imageSrc} alt={item.company} className="w-full h-full object-cover" />
              ) : (
                <div className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
                  [ Image Placeholder ]
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;