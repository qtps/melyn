const BrandMark = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true">
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
    <div className="w-full min-h-110 bg-gray-100 text-black p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8 shadow-2xl overflow-hidden">
      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <BrandMark />
          <span className="font-['Bebas_Neue'] text-xl sm:text-2xl md:text-3xl leading-none tracking-wide">
            {logoText}
          </span>
        </div>

        <div className="my-auto md:my-0">
          <h3 className="font-['Bebas_Neue'] text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight">
            {stat}
          </h3>
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-base uppercase text-gray-700 max-w-xs leading-snug md:leading-relaxed">
            {description}
          </p>
        </div>

        <button
          type="button"
          className="group flex items-center gap-1.5 text-xs md:text-base uppercase font-semibold text-black hover:text-blue-600 transition-colors self-start mt-1 md:mt-0"
        >
          <span>View project</span>
          <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </button>
      </div>

      {/* Image / Preview Side */}
      <div className="w-full md:w-1/2 h-40 sm:h-52 md:h-full shrink-0 md:shrink rounded-md md:rounded-md overflow-hidden bg-red-100 flex items-center justify-center ">
        {imageSrc ? (
          <img src={imageSrc} alt={logoText} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-xs sm:text-sm font-medium">
            [ Project preview image ]
          </span>
        )}
      </div>
    </div>
  );
};

export default OurWorksCard;