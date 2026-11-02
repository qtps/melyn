
import { Link } from "react-router-dom";

const OurWorksCard = ({ logoText, stat, description, imageSrc, logoSrc, slug }) => {
  return (
    <div className="w-full h-full bg-[#f4f5f5] text-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-stretch justify-between gap-6 shadow-lg">
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${logoText} logo`}
              className="w-6 h-6 object-contain"
            />
          ) : (
            <span className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center text-xs font-bold">
              ◈
            </span>
          )}
          <span className="text-black font-semibold">{logoText}</span>
        </div>

        <div>
          <h3 className="font-['Bebas_Neue'] text-6xl sm:text-8xl font-bold leading-none tracking-tight text-black">
            {stat}
          </h3>
          <p className="mt-3 text-xs sm:text-sm font-semibold uppercase text-gray-600 tracking-wider max-w-xs leading-relaxed">
            {description}
          </p>
        </div>

        {/* 📍 Route Fix: relative position and z-index to ensure click event works properly */}
        <Link
          to={slug || `#`}
          className="relative z-30 inline-flex items-center gap-2 text-xs sm:text-sm uppercase font-bold text-black hover:text-blue-600 transition-colors self-start mt-2 pointer-events-auto"
        >
          <span>View project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>
      </div>

      <div className="w-full md:w-1/2 min-h-55 sm:min-h-70 bg-gray-200 rounded-xl overflow-hidden relative flex items-center justify-center">
        {imageSrc ? (
          <img src={imageSrc} alt={logoText} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
            [ Image Placeholder ]
          </div>
        )}
      </div>
    </div>
  );
};

export default OurWorksCard;