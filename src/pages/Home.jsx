import Creators from "../components/Creators";
import GreatWork from "../components/GreatWork";
import Hero from "../components/Hero";
import InspireGrowth from "../components/InspireGrowth";
import OurWorks from "../components/OurWorks";
import LatestArticle from "../components/LatestArticle";
const Home = () => {
  return (
    <div>
      <Hero />
      <Creators />
      <InspireGrowth />
      <OurWorks />
      <GreatWork />
      <LatestArticle />
    </div>
  );
};

export default Home;