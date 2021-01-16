import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';
import Awesome from './AwesomeElement';
import Bilangual from './BilangualLogo';
import MrMelody from './MrMelodyLogo';
import Logosensoryka from './LogsensorykaLogo';
import Sensoplastyka from './SensoplastykaLogo';

const header = {
  first: 'zajęcia kulinarne',
  second: 'Zajęcia plastyczne',
  third: 'Język angielski',
  fourth: 'Sensoplastyka',
  fifth: 'Zajęcia muzyczne z j angielskim',
  sixth: 'Teatr',
  seventh: 'Logosensoryka',
  eighth: 'Zajęcia motoryczne',
};
const desc = {
  first: 'Opis zajęć kulinarnych',
  second: 'Opis zajęć plastycznych',
  third: 'Program Dwujęzyczne Dzieci',
  fourth: 'Opis sensoplastyki',
  fifth: 'Prowadzone przez Mr Melody',
  sixth: 'Interaktywne przedstawienia prowadzone przez KULTURKA',
  seventh: 'Opis logosensoryki',
  eighth: 'Opis zajęć motorycznych',
};
/* const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 250px 50px;
  grid-gap: 5px;
  
`;
*/
const CardGroup = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
const Header = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-family: var(--headerFont);
  margin-bottom: 20px;
  color: var(--cypisLightBlue);
`;

class Services extends React.Component {
  render() {
    return (
      <>
        <Header>Nauka poprzez zabawę</Header>
        <CardGroup>
          <ServiceCard
            icon={<Awesome name="pizza-slice" />}
            header={header.first}
            description={desc.first}
          />
          <ServiceCard
            icon={<Awesome name="paint-brush" />}
            header={header.second}
            description={desc.second}
          />
          <ServiceCard
            icon={<Awesome name="theater-masks" />}
            header={header.sixth}
            description={desc.sixth}
          />
          <ServiceCard
            icon={<Awesome name="child" />}
            header={header.eighth}
            description={desc.eighth}
          />
        </CardGroup>
        <CardGroup>
          <ServiceCard
            icon={<MrMelody />}
            header={header.fifth}
            description={desc.fifth}
          />

          <ServiceCard
            icon={<Logosensoryka />}
            header={header.seventh}
            description={desc.seventh}
          />
          <ServiceCard
            icon={<Bilangual />}
            header={header.third}
            description={desc.third}
          />
          <ServiceCard
            icon={<Sensoplastyka />}
            header={header.fourth}
            description={desc.fourth}
          />
        </CardGroup>
      </>
    );
  }
}

export default Services;
