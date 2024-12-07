import styled from "styled-components";
import constants from "../../constants";
import { DivTag, TextTag } from "../../StyledComponent";
import PageTitle from "../PageTitle";

const Icon = styled.span`
  i {
    font-size: 28px;
  }
`;

const Skills = () => {
  return (
    <DivTag width="100%" padding="12px 0">
      <PageTitle label="TECHNICAL SKILLS" fontSize="26px" showLine={false} />

      <DivTag display="flex" gap="24px" flexWrap="wrap">
        {constants.technicalSkills.map((skill) => (
          <DivTag
            bgColor="icon"
            height="48px"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            padding="0 8px"
            letterSpacing="0.24px"
            gap="8px"
            width="calc(25% - 19.2px)"
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
  );
};

export default Skills;
