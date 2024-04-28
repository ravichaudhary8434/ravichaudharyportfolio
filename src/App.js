import { DivTag } from "./StyledComponent";
import ContactDetails from "./components/ContactDetails";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <DivTag>
      <Header />
      <DivTag flex padding="52px 100px">
        <ContactDetails />
        <HomePage />
      </DivTag>
    </DivTag>
  );
};

export default App;
