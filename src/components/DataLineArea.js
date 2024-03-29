import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  display: inline-block;
  background: white;
  height: auto;
  width: 400px;
  border: 2px solid #eee;
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 40%;
`;

const DataLineWrapper = styled.div`
  display: flex;
  margin: 10px 0 10px;
`;

const DataLineArea = (props) => (
  <DataLineWrapper>
    <StyledLabel htmlFor={props.name}>{props.label} </StyledLabel>
    <StyledTextArea
      type={props.type}
      name={props.name}
      onChange={props.OnChange}
      onBlur={props.onlur}
      value={props.value}
    />
  </DataLineWrapper>
);
export default DataLineArea;
