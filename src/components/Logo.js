import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 100px;

  @media (max-width: 768px) {
    flex: 0 1 45px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "cypisek-logo" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img
        style={{ borderRadius: '25%' }}
        fluid={data.file.childImageSharp.fluid}
        alt="logo"
      />
    </LogoWrap>
  );
};

export default Logo;
