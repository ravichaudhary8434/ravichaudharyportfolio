import { DivTag } from "./StyledComponent";
import ContactDetails from "./components/ContactDetails";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <DivTag display="flex" padding="32px 100px">
      <ContactDetails />
      <HomePage />
    </DivTag>
  );
};

export default App;
