import React from 'react';
import styled from 'styled-components';

const BranchContainer = styled.div`
  text-align: center;
  height: 200px;
  width: 400px;
  align-self: center;
  padding: 15px;
  line-height: 30px;
  //border: 7px solid var(--cypisYellow);
`;

const Name = styled.div`
  font-family: var(--headerFont);
`;
const Address = styled.div`
  white-space: nowrap;
`;

const Branch = (props) => (
  <BranchContainer>
    <Name>{props.name}</Name>
    <Address>{props.address}</Address>
    <Address>telefon: {props.phone}</Address>
    <Address>email: {props.mail}</Address>
  </BranchContainer>
);

export default Branch;
