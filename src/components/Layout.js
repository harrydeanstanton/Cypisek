import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyles';

const SiteBorderStyles = styled.div`
  margin: 12rem auto 4rem auto;
  margin-top: clamp(1rem, 5vw, 2rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <SiteBorderStyles>
      <main>{children}</main>
    </SiteBorderStyles>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
