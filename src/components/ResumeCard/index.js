import DivTag from "../../StyledComponent/DivTag";
import TextTag from "../../StyledComponent/TextTag";

const ResumeCard = ({ duration, title, organization, isPrimary = true }) => {
  return (
    <DivTag
      padding="24px 12px"
      bgPaleOrange={isPrimary ? true : null}
      bgPapayaWhip={isPrimary ? null : true}
      borderRadius="20px"
      margin="24px 0"
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
