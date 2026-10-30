import smileImg from "../assets/icons/smile.svg";

const InspireGrowth = () => {
  return (
    <div className="container mx-auto px-4">
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
    </div>
  );
};

export default InspireGrowth;
