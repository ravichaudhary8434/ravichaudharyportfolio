import { DivTag } from "../StyledComponent";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <DivTag width="100%">
      <DivTag display="flex" justifyContent="space-between" alignItems="center">
        <span></span>
        <Navbar />
      </DivTag>
      <DivTag bgColor="white" width="100%" marginTop="10px" borderRadius="20px">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </DivTag>
    </DivTag>
  );
};

export default HomePage;
