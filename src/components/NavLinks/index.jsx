import P from "prop-types";
import { MenuLink } from "../MenuLink";
import * as Styled from "./styles";

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      <h1>
        {links.map((link) => (
          <MenuLink key={link.link} {...link} />
        ))}
      </h1>
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTabe: P.bool,
    }),
  ),
};
