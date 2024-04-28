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
  top: ${(props) => props.top || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
  left: ${(props) => props.left || ""};
  border-width: ${(props) => `${props.borderWidth} !important` || ""};

  ${(props) =>
    props.bgCard &&
    css`
      background-color: ${(props) => props.theme.colors.bgCard};
    `}

  ${(props) =>
    props.bgIcon &&
    css`
      background-color: ${(props) => props.theme.colors.bgIcon};
    `}

  ${(props) =>
    props.bgPrimary &&
    css`
      background-color: ${(props) => props.theme.colors.bgPrimary};
    `}

  ${(props) =>
    props.bdGrey &&
    css`
      border: solid ${(props) => props.theme.sepColor};
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.flexCol &&
    css`
      display: flex;
      flex-direction: column;
    `}

  ${(props) =>
    props.flexCenter &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.flexAlignCenter &&
    css`
      display: flex;
      align-items: center;
    `}

  ${(props) =>
    props.flexJustifyBtwAlignCenter &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}

    ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}

    ${(props) =>
    props.absolute &&
    css`
      position: absolute;
    `}
`;

export default DivTag;
