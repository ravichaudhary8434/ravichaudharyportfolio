import { DivTag, TextTag } from "../StyledComponent";
import PageTitle from "../components/PageTitle";
import constants from "../constants";
import styled from "styled-components";

const Icon = styled.span`
  i {
    font-size: 28px;
  }
`;

const Skills = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px" minHeight="700px">
      <PageTitle label="Technical Skills" />
      <DivTag display="flex" flexDirection="column" gap="24px">
        {constants.technicalSkills?.map((data) => (
          <DivTag display="flex" gap="24px" width="100%">
            <TextTag secondaryFont subText width="180px" fontSize="26px">
              {data?.category}:
            </TextTag>
            <DivTag
              width="calc(100% - 180px)"
              display="flex"
              gap="24px"
              flexWrap="wrap"
            >
              {data?.skills?.map((skill) => (
                <DivTag
                  bgColor="icon"
                  height="48px"
                  borderRadius="8px"
                  display="flex"
                  alignItems="center"
                  padding="0 8px"
                  letterSpacing="0.24px"
                  gap="8px"
                  width="calc(33.33% - 16px)"
                >
                  <Icon>{skill.icon}</Icon>
                  <TextTag
                    secondaryFont
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    {skill.skill}
                  </TextTag>
                </DivTag>
              ))}
            </DivTag>
          </DivTag>
        ))}
      </DivTag>
    </DivTag>
  );
};

export default Skills;
