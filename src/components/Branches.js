import React from "react";
import styled from "styled-components";
import Branch from "./Branch";

const BranchWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: space-around;
  color: var(--cypisBlue);
  flex-wrap: wrap;
`;

const Header = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-family: var(--headerFont);
  color: var(--cypisLightBlue);
`;

const Branches = () => (
  <>
    <Header>Nasze Placówki</Header>
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
  </>
);

export default Branches;
