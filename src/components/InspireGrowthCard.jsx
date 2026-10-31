

const InspireGrowthCard = ({ title, badgeText, badgeBgColor, description, imageSrc, bgColor, hoverBgColor }) => {
  return (
    <div 
      className="inspire-card p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 min-h-55 transition-colors duration-500 ease-in-out cursor-pointer group"
      style={{ 
        '--bg-color': bgColor || '#f3f6f5',
        '--hover-bg-color': hoverBgColor || '#e8f0ed',
        backgroundColor: 'var(--bg-color)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-bg-color)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
    >
      {/* Left Content Area */}
      <div className="flex-1 space-y-4">
        {/* Title & Badge Section */}
        <div className="relative inline-block pr-10">
          <h2 className="font-['Bebas_Neue'] text-2xl md:text-4xl font-light uppercase -tracking-widertext-black leading-tight group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h2>
          {badgeText && (
            <span
              className="absolute -bottom-2 right-0 transform rotate-12 text-black text-[10px] md:text-xs font-bold px-2.5 py-1 uppercase shadow-sm group-hover:rotate-0 transition-transform duration-300"
              style={{ backgroundColor: badgeBgColor || '#ffeb3b' }}
            >
              {badgeText}
            </span>
          )}
        </div>

        {/* Description Text */}
        <p className="text-xs md:text-sm uppercase text-gray-700 tracking-wide max-w-sm pt-1 font-medium">
          {description}
        </p>
      </div>

      {/* Right Image Placeholder Area */}
      <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-contain" 
          />
        ) : (
          <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center text-gray-400 text-xs text-center p-2">
            Image Here
          </div>
        )}
      </div>
    </div>
  );
};

export default InspireGrowthCard;



