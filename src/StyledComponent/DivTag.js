import styled, { css } from "styled-components";

const DivTag = styled.div`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  min-width: ${(props) => props.minWidth || ""};
  min-height: ${(props) => props.minHeight || ""};
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
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: ${(props) => props.alignItems || ""};
  flex-direction: ${(props) => props.flexDirection || ""};
  flex-wrap: ${(props) => props.flexWrap || ""};
  flex-grow: ${(props) => props.flexGrow || ""};
  gap: ${(props) => props.gap || ""};
  top: ${(props) => props.top || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
  left: ${(props) => props.left || ""};
  position: ${(props) => props.position || ""};
  border-width: ${(props) => `${props.borderWidth} !important` || ""};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor] || bgColor};
  box-shadow: ${(props) => props.boxShadow || ""};

  ${(props) =>
    props.bdGrey &&
    css`
      border: solid ${({ theme }) => theme.colors.sepColor};
    `}

  ${(props) =>
    props.bsDefault &&
    css`
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
    `}
`;

export default DivTag;
