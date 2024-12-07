import { DivTag } from "../StyledComponent";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

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
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<About />} />
        </Routes>
      </DivTag>
    </DivTag>
  );
};

export default HomePage;
