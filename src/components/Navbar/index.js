import { DivTag, SpanTag, TextTag } from "../../StyledComponent";
import { Logo } from "../../assets";

const Navbar = () => {
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

export default Navbar;
