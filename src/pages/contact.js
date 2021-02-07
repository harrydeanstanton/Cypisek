import React from 'react';
import styled from 'styled-components';
import GoogleMap from '../components/GoogleMaps';


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
const Contact = () => (
  <>
    <p>Placówki</p>
    <GoogleMap placeName="Szamotuły, Polska" />
  </>
);

export default Contact;
