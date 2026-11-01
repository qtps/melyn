const awards = [
  {
    name: "TOP SOCIAL MEDIA CAMPAIGN AWARD",
    category: "SOCIAL MEDIA MARKETING",
  },
  { name: "BEST AGENCY 2025", category: "WEB DESIGN" },
  { name: "BRANDING INNOVATOR", category: "BRANDING" },
  { name: "RISING STAR", category: "ANALYTICS" },
  { name: "DESIGN PRO", category: "WEB DESIGN" },
];

const HonorsAwards = () => {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 font-sans sm:px-8 md:gap-10 md:py-20 lg:grid-cols-12 lg:px-10">
      <h2 className="text-5xl leading-[0.95] text-black sm:text-6xl md:text-7xl font-bebas lg:col-span-3">
        HONORS AND
        <br />
        AWARDS
      </h2>

      <ul className="lg:col-span-9">
        {awards.map((award) => (
          <li
            key={award.name}
            className="group flex min-h-20 items-center justify-between gap-5 border-b border-neutral-200 py-5 pl-0 text-xs text-neutral-800 transition-all duration-300 hover:bg-neutral-50 hover:pl-3 focus-within:bg-neutral-50 focus-within:pl-3 sm:min-h-22 sm:text-sm"
          >
            <span className="transition-colors duration-300 group-hover:text-[#08785f] group-focus-within:text-[#08785f]">
              {award.name}
            </span>
            <span className="text-right transition-colors duration-300 group-hover:text-[#08785f] group-focus-within:text-[#08785f]">
              {award.category}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HonorsAwards;