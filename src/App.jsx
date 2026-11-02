import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Work from "./pages/works/Work";
import Services from "./pages/services/Services";
import PageLayout from "./components/PageLayout";
import CaseStudy from "./pages/home/CaseStudey";
import CaseStudyDetails from "./pages/home/CaseStudyDetails"; // Details Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* PageLayout- should contain the common layout for all pages */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />

          {/* Nested Sub-page route */}
          <Route path="/home/casestudy" element={<CaseStudy />} />
          {/* Dynamic Route for individual case study details */}
          <Route path="/work/:id" element={<CaseStudyDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;