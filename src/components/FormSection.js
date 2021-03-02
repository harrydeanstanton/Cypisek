import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.div`
  padding: 10px;
  width: 70%;
  background-color: #eeeeee4d;
  font-size: 16px;
`;
const FormSection = ({ children, title }) => (
  <Section>
    <h3>{title}</h3>
    <main>{children}</main>
  </Section>
);

FormSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormSection;
