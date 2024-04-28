import { DivTag, TextTag } from "../StyledComponent";
import PageTitle from "../components/PageTitle";
import constants from "../constants";

const About = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px">
      <PageTitle label="About Me" />
      <TextTag fontSize="16px" lineHeight="30px" fontWeight="500">
        {constants.BIO}
      </TextTag>
    </DivTag>
  );
};

export default About;
