import { DivTag, TextTag } from "../../StyledComponent";

const WhatIDoCard = ({ title, description, icon, isPrimary }) => {
  return (
    <DivTag
      padding="12px 25px"
      borderRadius="20px"
      bgColor={isPrimary ? "paleOrange" : "aliceBlue"}
      width="calc(50% - 12px)"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
    >
      <DivTag display="flex" alignItems="center" gap="8px" marginBottom="8px">
        {icon}
        <TextTag fontSize="24px" fontWeight="600" lineHeight="20px">
          {title}
        </TextTag>
      </DivTag>
      <TextTag
        secondaryFont
        fontSize="14px"
        fontWeight="400"
        lineHeight="20px"
        letterSpacing="0.35px"
      >
        {description}
      </TextTag>
    </DivTag>
  );
};

export default WhatIDoCard;
