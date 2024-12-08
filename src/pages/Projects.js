import styled from "styled-components";
import { DivTag, TextTag } from "../StyledComponent";
import PageTitle from "../components/PageTitle";
import constants from "../constants";

const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 6px 6px 0 0;
`;

const CardContainer = styled.a`
  width: calc(33.33% - 16px);
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Work = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px" minHeight="700px">
      <PageTitle label="Projects" />
      <DivTag display="flex" flexWrap="wrap" gap="24px">
        {constants.projects?.map((project) => (
          <CardContainer
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DivTag bsDefault width="100%" borderRadius="6px">
              <StyledImg src={project.imageUrl} />
              <DivTag padding="8px">
                <TextTag fontSize="16px">{project?.projectName || ""}</TextTag>
                <TextTag fontSize="10px" secondaryFont secondary opacity="0.5">
                  {project?.description || ""}
                </TextTag>
              </DivTag>
            </DivTag>
          </CardContainer>
        ))}
      </DivTag>
    </DivTag>
  );
};

export default Work;
