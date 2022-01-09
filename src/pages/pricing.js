import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "../components/Container";
import PricingLabel from "../components/PricingLabel";

const Header = styled.div`
  font-size: 1.5em;
  font-family: var(--headerFont);
  color: var(--cypisBlue);
`;
const PricingContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const Description = styled.div`
  padding: 20px;
  padding-left: 10px;
  color: var(--cypisBlue);
  --font-family: var(--headerFont);
  font-weight: bold;
  line-height: 1.5em;
`;
const Price = styled.span`
  color: var(--cypisLightBlue);
  font-family: var(--headerFont);
`;
const Pricing = () => (
  <Container>
    <Header> Cennik</Header>
    <PricingContainer>
      <PricingLabel pricingText="300 zł" title="Opłata rezerwacyjna: " />
      <PricingLabel pricingText="1200 zł" title="Czesne: " />
      <PricingLabel
        pricingText="10 zł dziennie"
        title="Wyżywienie- dieta podstawowa: "
      />
      <PricingLabel
        pricingText="13 zł dziennie"
        title="Wyżywienie- dieta z wykluczeniami: "
      />

      <Description>
        Miejsca w obu placówkach są dotowane przez Urząd Miasta i Gminy
        Szamotuły. <br /> Wysokość miesięcznej dotacji wynosi{" "}
        <Price>300 zł </Price>, kwota ta jest odliczana od czesnego.
      </Description>
    </PricingContainer>
  </Container>
);

export default Pricing;
