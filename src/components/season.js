import { findByText } from '@testing-library/react';
import React from 'react'
import styled from 'styled-components';

const Seasons = styled.label `
color:green;
background-color:black;
font-size:30px;
border: 2px solid green;
border-width: 4px;
border-color: 'blue';
`;

const divStyle = {
    color: 'blue',
    background: 'green',
    fontSize: 30,
    width: 150,
    borderRadius: 10,
    marginTop: 10,
    
  };

function Season(){
    return(
      <>
      <Seasons > 
        Pick your favorite season: 
        <select style={divStyle}>
          <option style={divStyle} value="Spring" >Spring</option>
          <option  style={divStyle} value="Summer">Summer</option>
          <option  style={divStyle} value="Fall">Fall</option>
          <option  style={divStyle} value="Winter">Winter</option>
        </select>
     
        </Seasons></>
    )
  }
  export default Seasons