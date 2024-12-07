import { DivTag, TextTag } from "../../StyledComponent";
import AnchorTag from "../../StyledComponent/AnchorTag";
import ImgTag from "../../StyledComponent/ImgTag";
import {
  Download,
  Email,
  Facebook,
  Github,
  Linkedin,
  Location,
  Phone,
  ProfilePic,
  Twitter,
} from "../../assets";
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
        width="296px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <AnchorTag
          href={constants.fbProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </AnchorTag>
        <AnchorTag
          href={constants.twitterProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </AnchorTag>
        <AnchorTag
          href={constants.linkedinProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </AnchorTag>
        <AnchorTag
          href={constants.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </AnchorTag>
      </DivTag>
      <DivTag
        width="350px"
        height="350px"
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
