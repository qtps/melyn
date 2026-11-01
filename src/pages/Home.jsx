import Creators from "../components/Creators";
import GreatWork from "../components/GreatWork";
import Hero from "../components/Hero";
import InspireGrowth from "../components/InspireGrowth";
import Navbar from "../components/Navbar";
import OurWorks from "../components/OurWorks";
import VideoWall from "../components/VideoWall";
import LatestArticle from "../components/LatestArticle";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;