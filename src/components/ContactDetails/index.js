import { DivTag, TextTag } from "../../StyledComponent";
import ImgTag from "../../StyledComponent/ImgTag";
import {
  Download,
  Email,
  Facebook,
  Github,
  Linkedin,
  Location,
  Phone,
  Twitter,
} from "../../assets";

const ImgUrl =
  "https://media.licdn.com/dms/image/D4D03AQFW1unfuBcGrw/profile-displayphoto-shrink_400_400/0/1681057458251?e=1719446400&v=beta&t=Zv9kjIWYVim38gIMGsbdc1M_MnOhH8bbPpDL-qZpTG8";

const ContactDetails = () => {
  return (
    <DivTag
      bgCard
      marginTop="100px"
      borderRadius="20px"
      width="400px"
      height="700px"
      flexCol
      flexAlignCenter
    >
      <DivTag relative width="100%" height="100px" flexCenter>
        <DivTag width="200px" height="200px" absolute bottom="0">
          <ImgTag src={ImgUrl} height="100%" width="100%" borderRadius="20px" />
        </DivTag>
      </DivTag>
      <TextTag
        lineHeight="35.5px"
        secondaryFont
        fontSize="28px"
        fontWeight="bold"
        marginTop="14px"
      >
        Ravi Chaudhary
      </TextTag>
      <TextTag
        lineHeight="40px"
        secondary
        secondaryFont
        fontSize="16px"
        fontWeight="500"
        opacity="0.5"
      >
        Full Stack Developer
      </TextTag>
      <DivTag marginTop="6px" width="296px" flexJustifyBtwAlignCenter>
        <Facebook />
        <Twitter />
        <Linkedin />
        <Github />
      </DivTag>
      <DivTag
        width="350px"
        height="350px"
        borderRadius="20px"
        marginTop="22px"
        bgPrimary
        padding="33px 24px"
      >
        <DivTag
          width="100%"
          height="63px"
          flex
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
              +91-8434133302
            </TextTag>
          </DivTag>
        </DivTag>
        <DivTag
          width="100%"
          height="63px"
          flex
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
              ravichaudhary8434@gmail.com
            </TextTag>
          </DivTag>
        </DivTag>
        <DivTag
          width="100%"
          height="63px"
          flex
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
              Gurugram, Haryana
            </TextTag>
          </DivTag>
        </DivTag>
        <DivTag flexCenter>
          <Download />
        </DivTag>
      </DivTag>
    </DivTag>
  );
};

export default ContactDetails;
