import { DivTag } from "../../StyledComponent";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <DivTag
      width="100%"
      height="104px"
      padding="0 100px"
      flexJustifyBtwAlignCenter
    >
      <Logo />
    </DivTag>
  );
};

export default Header;
