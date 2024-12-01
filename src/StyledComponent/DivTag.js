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
  gap: ${(props) => props.gap || ""};
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
    props.bgPaleOrange &&
    css`
      background-color: ${(props) => props.theme.paleOrange};
    `}

  ${(props) =>
    props.bgPapayaWhip &&
    css`
      background-color: ${(props) => props.theme.papayaWhip};
    `}

  ${(props) =>
    props.bgPrimary &&
    css`
      background-color: ${(props) => props.theme.colors.bgPrimary};
    `}

  ${(props) =>
    props.bgOrangeGradient &&
    css`
      background: linear-gradient(91.49deg, #ff9c1a 7.92%, #e80505 108.2%);
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
    props.flexJustifyBtw &&
    css`
      display: flex;
      justify-content: space-between;
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
