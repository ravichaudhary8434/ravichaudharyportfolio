import styled, { css } from "styled-components";

const SpanTag = styled.span`
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
`;

export default SpanTag;
