import { DivTag, TextTag } from "../StyledComponent";
import PageTitle from "../components/PageTitle";
import constants from "../constants";
import { Education, Experience } from "../assets";
import ResumeCard from "../components/ResumeCard";

const About = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px" minHeight="700px">
      <PageTitle label="ABOUT ME" />
      <TextTag secondaryFont fontSize="16px" lineHeight="30px" fontWeight="500">
        {constants.BIO}
      </TextTag>
      <DivTag display="flex" justifyContent="space-between">
        <DivTag width="calc(50% - 24px)">
          <DivTag display="flex" alignItems="center">
            <Experience />
            <TextTag fontSize="28px" lineHeight="46px" marginLeft="8px">
              Experience
            </TextTag>
          </DivTag>
          {constants.experience.map((experience, index) => (
            <ResumeCard
              key={index}
              {...experience}
              isPrimary={index % 2 === 0 ? true : false}
            />
          ))}
        </DivTag>
        <DivTag width="calc(50% - 24px)">
          <DivTag display="flex" alignItems="center">
            <Education />
            <TextTag fontSize="28px" lineHeight="46px" marginLeft="8px">
              Education
            </TextTag>
          </DivTag>

          {constants.education.map((education, index) => (
            <ResumeCard
              key={index}
              {...education}
              isPrimary={index % 2 === 0 ? false : true}
            />
          ))}
        </DivTag>
      </DivTag>
      {/* <PageTitle
        label="What I Do!"
        showLine={false}
        marginTop="24px"
        fontSize="32px"
        letterSpacing="0.8px"
      />

      <DivTag display="flex" gap="24px" flexWrap="wrap">
        {constants?.whatIDo?.map((data, index) => (
          <WhatIDoCard
            {...data}
            isPrimary={index % 4 == 0 || index % 4 == 3 ? true : false}
          />
        ))}
      </DivTag> */}
    </DivTag>
  );
};

export default About;
