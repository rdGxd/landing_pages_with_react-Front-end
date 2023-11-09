import P from "prop-types";
import { LogoLink } from "../LogoLink";
import { NavLinks } from "../NavLinks";
import { SectionContainer } from "../SectionContainer";
import * as Styled from "./styles";

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
