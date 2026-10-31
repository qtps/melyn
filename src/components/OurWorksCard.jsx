

const BrandMark = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="none" stroke="#2323ff" strokeWidth="2.5" />
    <path
      d="M7.5 13.5c1.5-3.5 7-4.5 9-1M16.5 10.5c-1.5 3.5-7 4.5-9 1"
      fill="none"
      stroke="#2323ff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const OurWorksCard = ({ logoText = "Nexora", stat, description, imageSrc }) => {
  return (
    <div className="w-full h-full bg-white text-black rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-12 flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-10 shadow-xl overflow-hidden">
      {/* Left: brand, metric, link */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
        <div className="flex items-center gap-2">
          <BrandMark />
          <span className="font-['Bebas_Neue'] text-2xl sm:text-3xl leading-none tracking-wide">
            {logoText}
          </span>
        </div>

        <div>
          <h3 className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-8xl leading-none">
            {stat}
          </h3>
          <p className="mt-2 text-xs md:text-base uppercase text-gray-700 max-w-xs leading-relaxed">
            {description}
          </p>
        </div>

        <button
          type="button"
          className="group flex items-center gap-2 text-xs md:text-base uppercase text-black hover:text-blue-600 transition-colors self-start"
        >
          <span>View project</span>
          <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </button>
      </div>

      {/* Right: project preview */}
      <div className="w-full md:w-1/2 h-36 sm:h-48 md:h-full shrink-0 md:shrink rounded-lg md:rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
        {imageSrc ? (
          <img src={imageSrc} alt={logoText} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-xs sm:text-sm">[ Project preview image ]</span>
        )}
      </div>
    </div>
  );
};

export default OurWorksCard;
