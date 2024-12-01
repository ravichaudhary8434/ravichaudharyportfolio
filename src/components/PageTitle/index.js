import styled from "styled-components";
import { DivTag, TextTag } from "../../StyledComponent";

const Line = styled(DivTag)`
  width: 252px;
  height: 2px;
  margin-left: 32px;
  background: linear-gradient(91.49deg, #ff9c1a 7.92%, #e80505 108.2%);
`;

const PageTitle = ({
  label,
  showLine = true,
  fontSize = "40px",
  letterSpacing = "1px",
  ...rest
}) => {
  return (
    <DivTag display="flex" alignItems="center" marginBottom="14px" {...rest}>
      <TextTag
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        lineHeight="40px"
        fontWeight="500"
      >
        {label}
      </TextTag>
      {showLine && <Line />}
    </DivTag>
  );
};

export default PageTitle;
