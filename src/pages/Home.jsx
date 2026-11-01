import Creators from "../components/Creators";
import GreatWork from "../components/GreatWork";
import Hero from "../components/Hero";
import InspireGrowth from "../components/InspireGrowth";
import Navbar from "../components/Navbar";
import OurWorks from "../components/OurWorks";
import VideoWall from "../components/VideoWall";
import LatestArticle from "../components/LatestArticle";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Creators />
      <InspireGrowth />
      <OurWorks />
      <GreatWork />
      <VideoWall />
      <LatestArticle />
     
    </div>
  );
};

export default Home;