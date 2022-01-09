import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.div`
  padding: 10px;
  display: flex;
`;

const Label = styled.div`
  color: var(--cypisBlue);
  width: 350px;
  font-weight: bold;
`;
const Value = styled.div`
  color: var(--cypisLightBlue);
  font-family: var(--headerFont);
`;

const PricingLabel = ({ pricingText, title }) => (
  <Section>
    <Label>{title}</Label>
    <Value>{pricingText}</Value>
  </Section>
);

PricingLabel.propTypes = {
  pricingText: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default PricingLabel;
