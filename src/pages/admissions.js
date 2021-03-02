import React from 'react';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';

// import downloadFile from "../DownloadFiles/S20C-420031811082.pdf"

const Admissions = () => (
  <Container>
    <h1>Rekrutacja</h1>
    <ContactForm />
  </Container>
);

export default Admissions;
// <a href={downloadFile} download>Pobierz formularz</a>{` `}
