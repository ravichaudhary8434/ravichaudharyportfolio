import { DivTag, TextTag } from "../../StyledComponent";
import AnchorTag from "../../StyledComponent/AnchorTag";
import ImgTag from "../../StyledComponent/ImgTag";
import { Download, Email, Location, Phone, ProfilePic } from "../../assets";
import constants from "../../constants";

const ContactDetails = () => {
  return (
    <DivTag
      bgColor="white"
      marginTop="110px"
      borderRadius="20px"
      width="400px"
      minHeight="700px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="0 25px"
      marginRight="20px"
    >
      <DivTag
        position="relative"
        width="100%"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <DivTag width="200px" height="200px" position="absolute" bottom="0">
          <ImgTag
            src={ProfilePic}
            height="100%"
            width="100%"
            borderRadius="20px"
          />
        </DivTag>
      </DivTag>
      <TextTag
        lineHeight="35.5px"
        secondaryFont
        fontSize="28px"
        fontWeight="bold"
        marginTop="14px"
      >
        {constants.name}
      </TextTag>
      <TextTag
        lineHeight="40px"
        secondary
        secondaryFont
        fontSize="16px"
        fontWeight="500"
        opacity="0.5"
      >
        {constants.headline}
      </TextTag>
      <DivTag
        marginTop="6px"
        width="100%"
        maxWidth="296px"
        display="flex"
        alignItems="center"
        gap="8px"
      >
        {constants.socialProfiles?.map((profile) => (
          <AnchorTag
            href={profile?.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            width="calc(25% - 6px)"
            aspectRatio="1"
            textDecoration="none"
          >
            <DivTag
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="aliceBlue"
              width="100%"
              height="100%"
              borderRadius="6px"
            >
              {profile?.icon}
            </DivTag>
          </AnchorTag>
        ))}
      </DivTag>

      <DivTag
        width="100%"
        borderRadius="20px"
        marginTop="22px"
        bgColor="primary"
        padding="33px 24px"
      >
        <DivTag
          width="100%"
          height="63px"
          display="flex"
          bdGrey
          borderWidth="0 0 1px 0"
          marginBottom="16px"
        >
          <Phone />
          <DivTag marginLeft="10px">
            <TextTag subText opacity="0.5">
              Phone
            </TextTag>
            <TextTag fontSize="14px" fontWeight="600" lineHeight="20px">
              {constants.phone}
            </TextTag>
          </DivTag>
        </DivTag>
        <DivTag
          width="100%"
          height="63px"
          display="flex"
          bdGrey
          borderWidth="0 0 1px 0"
          marginBottom="16px"
        >
          <Email />
          <DivTag marginLeft="10px">
            <TextTag subText opacity="0.5">
              Email
            </TextTag>
            <TextTag fontSize="14px" fontWeight="600" lineHeight="20px">
              {constants.email}
            </TextTag>
          </DivTag>
        </DivTag>
        <DivTag
          width="100%"
          height="63px"
          display="flex"
          bdGrey
          borderWidth="0 0 1px 0"
          marginBottom="16px"
        >
          <Location />
          <DivTag marginLeft="10px">
            <TextTag subText opacity="0.5">
              Location
            </TextTag>
            <TextTag fontSize="14px" fontWeight="600" lineHeight="20px">
              {constants.location}
            </TextTag>
          </DivTag>
        </DivTag>
        <DivTag display="flex" justifyContent="center" alignItems="center">
          <AnchorTag
            href={constants.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download />
          </AnchorTag>
        </DivTag>
      </DivTag>
    </DivTag>
  );
};

export default ContactDetails;
