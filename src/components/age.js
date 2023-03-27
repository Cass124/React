import React from 'react'

const divStyle = {
    color: 'black',
    fontSize: 30,
    
  };
function Age(){
    return (
      <>
      <label style={divStyle} for="Age">Age: </label>
          <input type="number" id="Age" name="Age"
          max="125"
          
           size="20"></input>
   </> );
  }
  export default Age