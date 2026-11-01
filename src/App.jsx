import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import Services from "../src/pages/Services";
import PageLayout from "./components/PageLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;