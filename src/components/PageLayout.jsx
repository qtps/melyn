import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import VideoWall from "./VideoWall";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <VideoWall />
      <Footer />
    </>
  );
};

export default PageLayout;
