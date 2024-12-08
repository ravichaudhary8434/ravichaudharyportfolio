import styled from "styled-components";

const AnchorTag = styled.a`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  text-decoration: ${(props) => props.textDecoration || ""};
  aspect-ratio: ${(props) => props.aspectRatio || ""};
`;

export default AnchorTag;
