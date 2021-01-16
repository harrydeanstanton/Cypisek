/* import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const KopernikMap = () => {
  const data = useStaticQuery(graphql`
    query {
      staticMap {
        childFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ width: '100%' }}
    />
  );
};

export default KopernikMap;
*/
