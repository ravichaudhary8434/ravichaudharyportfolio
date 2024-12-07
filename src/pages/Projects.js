import styled from "styled-components";
import { DivTag, TextTag } from "../StyledComponent";
import PageTitle from "../components/PageTitle";
import constants from "../constants";

const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 6px 6px 0 0;
`;

const Work = () => {
  return (
    <DivTag borderRadius="20px" padding="18px 50px" minHeight="700px">
      <PageTitle label="Projects" />
      <DivTag display="flex" flexWrap="wrap" gap="24px">
        {constants.projects?.map((project) => (
          <DivTag bsDefault width="calc(33.33% - 16px)" borderRadius="6px">
            <StyledImg src={project.imageUrl} />
            <DivTag padding="8px">
              <TextTag fontSize="16px">{project?.projectName || ""}</TextTag>
              <TextTag fontSize="10px" secondaryFont secondary opacity="0.5">
                {project?.description || ""}
              </TextTag>
            </DivTag>
          </DivTag>
        ))}
      </DivTag>
    </DivTag>
  );
};

export default Work;
