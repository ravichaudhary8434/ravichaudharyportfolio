import styled from "styled-components";
import { DivTag, TextTag } from "../../StyledComponent";

const Line = styled(DivTag)`
  width: 252px;
  height: 2px;
  margin-left: 32px;
  background: linear-gradient(91.49deg, #ff9c1a 7.92%, #e80505 108.2%);
`;

const PageTitle = ({ label }) => {
  return (
    <DivTag flexAlignCenter marginBottom="14px">
      <TextTag fontSize="40px" lineHeight="40px" fontWeight="500">
        {label}
      </TextTag>
      <Line />
    </DivTag>
  );
};

export default PageTitle;
