import styled from "styled-components";

const ImgTag = styled.img`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  padding: ${(props) => props.padding || ""};
  padding-top: ${(props) => props.paddingTop || ""};
  padding-right: ${(props) => props.paddingRight || ""};
  padding-bottom: ${(props) => props.paddingBottom || ""};
  padding-left: ${(props) => props.paddingLeft || ""};
  margin: ${(props) => props.margin || ""};
  margin-top: ${(props) => props.marginTop || ""};
  margin-right: ${(props) => props.marginRight || ""};
  margin-bottom: ${(props) => props.marginBottom || ""};
  margin-left: ${(props) => props.marginLeft || ""};
  border-radius: ${(props) => props.borderRadius || ""};
`;

export default ImgTag;
