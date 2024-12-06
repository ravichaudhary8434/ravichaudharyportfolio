import DivTag from "../../StyledComponent/DivTag";
import TextTag from "../../StyledComponent/TextTag";

const ResumeCard = ({ duration, title, organization, isPrimary = true }) => {
  return (
    <DivTag
      padding="24px 12px"
      bgColor={isPrimary ? "paleOrange" : "aliceBlue"}
      borderRadius="20px"
      margin="24px 0"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"
    >
      <TextTag fontWeight="300" subText opacity="0.5">
        {duration}
      </TextTag>
      <TextTag fontWeight="700">{title}</TextTag>
      <TextTag fontWeight="500">{organization}</TextTag>
    </DivTag>
  );
};

export default ResumeCard;
