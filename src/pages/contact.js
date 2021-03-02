import React from 'react';
import styled from 'styled-components';
import GoogleMap from '../components/GoogleMaps';
import Branch from '../components/Branch';

const MapWrapper = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px;
  display: flex;
`;
const centerKopernika = {
  lat: 52.6212190155508,
  lng: 16.57429126944747,
};
const BranchWrapper = styled.div`
  justify-content:center;
`
const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Contact = () => (
  <ContactWrapper>
    <BranchWrapper>
      <Branch
        name="kopernika"
        address="ul Kopernika 4, 64-500 Szamotuły"
        phone="123 456 789"
        mail="zlobekcypisek.kopernika@gmial.com"
      />
      <Branch
        name="łąkowa"
        address="ul Łąkowa 9, 64-500 Szamotuły"
        phone="123 456 789"
        mail="zlobekcypisek.lakowa@gmial.com"
      />
    </BranchWrapper>
    <GoogleMap placeName="Szamotuły, Polska" />
  </ContactWrapper>
);

export default Contact;
