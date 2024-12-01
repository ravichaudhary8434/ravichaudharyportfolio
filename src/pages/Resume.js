import { DivTag, TextTag } from "../StyledComponent";
import { Education, Experience } from "../assets";
import PageTitle from "../components/PageTitle";
import ResumeCard from "../components/ResumeCard";
import constants from "../constants";

const Resume = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px">
      <PageTitle label="Resume" />
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
    </DivTag>
  );
};

export default Resume;
