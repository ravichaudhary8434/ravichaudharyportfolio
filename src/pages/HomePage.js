import { DivTag } from "../StyledComponent";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <DivTag width="100%">
      <DivTag flexJustifyBtwAlignCenter>
        <span></span>
        <Navbar />
      </DivTag>
    </DivTag>
  );
};

export default HomePage;
