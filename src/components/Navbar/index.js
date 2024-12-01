import styled, { css } from "styled-components";
import { DivTag, TextTag } from "../../StyledComponent";
import { Link, useLocation } from "react-router-dom";

const NavLinkWrapper = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.icon};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 20px;

  i {
    color: ${(props) => props.theme.colors.subText};
    opacity: 0.5;
    font-size: 18px;
  }

  ${(props) =>
    props.active &&
    css`
      background: linear-gradient(91.49deg, #ff9c1a 7.92%, #e80505 108.2%);

      i,
      div {
        opacity: 1;
        color: #fff;
      }
    `}
`;

const NavLink = ({ label, path, iconClass }) => {
  const location = useLocation();

  return (
    <NavLinkWrapper active={location.pathname === path ? true : null} to={path}>
      <i class={iconClass} />
      <TextTag
        fontSize="12px"
        fontWeight="600"
        secondaryFont
        lineHeight="20px"
        marginTop="4px"
      >
        {label}
      </TextTag>
    </NavLinkWrapper>
  );
};

const Navbar = () => {
  return (
    <DivTag
      bdGrey
      height="100px"
      padding="0 32px"
      borderWidth="2px"
      borderRadius="20px"
    >
      <DivTag display="flex" alignItems="center" height="100%" margin="0 -20px">
        <NavLink iconClass="fa-solid fa-house" label="Home" path="/" />
        <NavLink
          iconClass="fa-regular fa-file-lines"
          label="Resume"
          path="/resume"
        />
        <NavLink iconClass="fa-solid fa-briefcase" label="Work" path="/work" />
        <NavLink
          iconClass="fa-solid fa-id-badge"
          label="Contact"
          path="/contact"
        />
      </DivTag>
    </DivTag>
  );
};

export default Navbar;
