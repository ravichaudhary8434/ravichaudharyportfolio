import styled, { css } from "styled-components";

const TextTag = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: ${(props) => props.lineHeight || ""};
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
  color: ${(props) => props.theme.colors.black};
  opacity: ${(props) => props.opacity || ""};

  ${(props) =>
    props.primaryFont &&
    css`
      font-family: "Poppins", sans-serif;
      font-style: normal;
    `}

  ${(props) =>
    props.secondaryFont &&
    css`
      font-family: "Raleway", sans-serif;
      font-style: normal;
    `}

    ${(props) =>
    props.red &&
    css`
      color: ${(props) => props.theme.colors.red};
    `}

  ${(props) =>
    props.brightYellow &&
    css`
      color: ${(props) => props.theme.colors.brightYellow};
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.secondaryFont};
    `}

  ${(props) =>
    props.subText &&
    css`
      color: ${(props) => props.theme.colors.subText};
    `}
`;

export default TextTag;
