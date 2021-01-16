import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';

const Navigation = styled.nav`
  height: 100px;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  margin: 0 auto;
  max-width: 1400px;

  width: 100%;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    margin-bottom: ${(props) => (props.open ? '0px' : '400px')};
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    justify-content: flex-start;
    //padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 100px;
    left: ${(props) => (props.open ? '-100%' : '0')};
    //display: ${(props) => (props.open ? 'none' : 'flex')};
    height: fit-content;

    //background-color: ${(props) => (props.open ? 'red' : 'blue')};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {navbarOpen ? (
        <Navigation>
          <Logo />
          <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
            <Hamburger open />
          </Toggle>
          <Navbox>
            <NavbarLinks />
          </Navbox>
        </Navigation>
      ) : (
        <Navigation open>
          <Logo />
          <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
            <Hamburger />
          </Toggle>
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        </Navigation>
      )}
    </>
  );
};

export default Navbar;
