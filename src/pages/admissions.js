import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';

// import downloadFile from "../DownloadFiles/S20C-420031811082.pdf"

const Header = styled.h3`
  font-family: var(--headerFont);
  color: hsl(0deg 0% 0% / 50%);
`

const Admissions = () => (
  <Container>
    <Header>Wypełnij lub pobierz kartę zgłoszeniową</Header>
    <ContactForm />
  </Container>
);

export default Admissions;
// <a href={downloadFile} download>Pobierz formularz</a>{` `}
