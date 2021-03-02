import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 6rem auto 4rem auto;
  margin-top: clamp(1rem, 5vw, 6rem);
  background: white;
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  //box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
const Container = ({ children }) => (
  <Wrapper>
    <main>{children}</main>
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
