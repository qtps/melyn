import tubeLight from "../../assets/icons/tube-light.svg";
import together from "../../assets/icons/together.svg";
import communitie from "../../assets/icons/communite.svg";

const focusAreas = [
  {
    title: "INNOVATION FIRST",
    description:
      "WE EMBRACE CREATIVITY AND THE LATEST DIGITAL TRENDS TO CRAFT UNIQUE MARKETING SOLUTIONS.",
    icon: tubeLight,
  },
  {
    title: "RESULTS-DRIVEN",
    description:
      "EVERY CAMPAIGN WE CREATE IS FOCUSED ON MEASURABLE GROWTH AND DELIVERING REAL VALUE.",
    icon: together,
  },
  {
    title: "CLIENT-CENTERED",
    description:
      "WE BUILD LASTING PARTNERSHIPS BY UNDERSTANDING OUR CLIENTS’ GOALS AND TREATING THEIR SUCCESS AS OUR OWN.",
    icon: communitie,
  },
];

const WeFocus = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 font-sans sm:px-8 md:py-20 lg:px-10">
      <h2 className="mb-8 text-4xl leading-none text-black sm:text-5xl md:mb-12 md:text-6xl lg:text-7xl font-bebas">
        WE FOCUS ON WHAT MATTERS
      </h2>

      <div className="bg-[#08785f] p-5 sm:p-8 lg:p-12">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {focusAreas.map(({ title, description, icon }) => (
            <article
              key={title}
              className="group flex min-h-64 flex-col bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 sm:min-h-72 sm:p-7 lg:p-8"
            >
              <img
                src={icon}
                alt={title}
                className="mb-5 h-12 w-12 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6"
              />
              <h3 className="mb-5 text-2xl leading-none text-black transition-colors duration-300 group-hover:text-[#08785f] sm:text-3xl font-bebas">
                {title}
              </h3>
              <p className="mt-auto max-w-sm text-xs leading-relaxed text-neutral-800 sm:text-[13px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeFocus;
