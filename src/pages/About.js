import { DivTag, TextTag } from "../StyledComponent";
import PageTitle from "../components/PageTitle";
import WhatIDoCard from "../components/WhatIDoCard";
import constants from "../constants";

const About = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px" height="700px">
      <PageTitle label="ABOUT ME" />
      <TextTag fontSize="16px" lineHeight="30px" fontWeight="500">
        {constants.BIO}
      </TextTag>
      <PageTitle
        label="What I Do!"
        showLine={false}
        marginTop="24px"
        fontSize="32px"
        letterSpacing="0.8px"
      />

      <DivTag flex gap="24px">
        {constants?.whatIDo?.map((data) => (
          <WhatIDoCard {...data} />
        ))}
      </DivTag>
    </DivTag>
  );
};

export default About;
