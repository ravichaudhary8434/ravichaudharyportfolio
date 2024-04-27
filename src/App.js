import { DivTag } from "./StyledComponent";
import ContactDetails from "./components/ContactDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <DivTag>
      <Navbar />
      <DivTag padding="52px 100px">
        <ContactDetails />
      </DivTag>
    </DivTag>
  );
};

export default App;
