import { UserRound } from "lucide-react";

const teamMembers = [
  { name: "ALBERT FLORES", role: "SEO SPECIALIST", color: "bg-amber-400" },
  { name: "CODY FISHER", role: "SEO SPECIALIST", color: "bg-purple-300" },
  { name: "FLOYD MILES", role: "SEO SPECIALIST", color: "bg-orange-200" },
  { name: "DEVON LANE", role: "SEO SPECIALIST", color: "bg-cyan-400" },
];

const OurTeam = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 font-sans sm:px-8 md:py-20 lg:px-10">
      <h2 className="mb-8 text-5xl leading-none text-black sm:mb-12 sm:text-6xl md:text-7xl font-bebas">
        OUR TEAM
      </h2>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4 md:gap-x-7">
        {teamMembers.map((member, index) => (
          <article
            key={member.name}
            className={`group transition-transform duration-300 ease-out hover:-translate-y-2 focus-within:-translate-y-2 ${
              index % 2 === 1 ? "md:-mt-8" : ""
            }`}
          >
            <div
              role="img"
              aria-label={`${member.name} portrait will be added here`}
              className={`flex aspect-[4/5] items-center justify-center transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/15 ${member.color}`}
            >
              <UserRound
                aria-hidden="true"
                className="h-16 w-16 text-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
                strokeWidth={1.2}
              />
            </div>
            <h3 className="mt-4 text-2xl leading-none text-black transition-colors duration-300 group-hover:text-[#08785f] sm:mt-5 sm:text-3xl font-bebas">
              {member.name}
            </h3>
            <p className="mt-2 text-[11px] text-neutral-800 transition-colors duration-300 group-hover:text-[#08785f] sm:text-xs">
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;