import React from 'react';
import styled from 'styled-components';
import Branches from '../components/Branches';
import Container from '../components/Container';
import Services from '../components/Services';

const Banner = styled.div`
  background-color: #fff7b9;
  height: 400px;
  display: flex;
  justify-content: center;
  font-family: var(--headerFont);
  color: #d12f2a;
  font-size: 3em;
  align-items: center;
`

const IndexPage = () => (
  <>
    <Banner>
        <span>Żłobek Cypisek</span>
    </Banner>
    <Container>
      <Branches />
      <Services />
    </Container>
  </>
);

export default IndexPage;
