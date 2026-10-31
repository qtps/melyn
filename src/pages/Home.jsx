import Creators from "../components/Creators";
import FeatureWorks from "../components/FeatureWorks";
import Hero from "../components/Hero";
import InspireGrowth from "../components/InspireGrowth";
import Navbar from "../components/Navbar";
import OurWorks from "../components/OurWorks";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Creators />
      <InspireGrowth />
      <OurWorks />
      <FeatureWorks />
     
    </div>
  );
};

export default Home;