import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 10%;
  margin: 20px;
  flex: 1 0;
  padding: 15px;
  background-color: lightgrey;
  text-align: center;
`;
const Icon = styled.div`
  font-size: 3em;
 
`;
const Header = styled.div`
  font-family: var(--headerFont);
  margin-top: 10px;
  margin-bottom: 10px;
`

const ServiceCard = (props) => (
  <Card>
    <Icon>{props.icon}</Icon>
    <div>
      <Header>{props.header}</Header>
      <span>{props.description}</span>
    </div>
  </Card>
);

export default ServiceCard;
