import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled(Link)`
  text-decoration: none;
  color: hsl(0deg 0% 0% / 50%);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: var(--headerFont);
  font-size: 1.5em;

  :hover {
    color: var(--cypisLightBlue);
    ::after {
      width: 100%;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const NavbarLinks = () => (
  <>
    <NavItem to="/" activeClassName="active">
      Strona główna
    </NavItem>
    <NavItem to="/pricing" activeClassName="active">
      Cennik
    </NavItem>
    <NavItem to="/admissions" activeClassName="active">
      Rekrutacja
    </NavItem>
    <NavItem to="/description" activeClassName="active">
      O nas
    </NavItem>
    <NavItem to="/adaptation" activeClassName="active">
      Adaptacja
    </NavItem>
    <NavItem to="/contact" activeClassName="active">
      Kontakt
    </NavItem>
  </>
);

export default NavbarLinks;
