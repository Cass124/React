import React from 'react'
const divStyle = {
    color: 'black',
    fontSize:30,
    
  };
function Name(){
    return (
      <>
      <label style={divStyle}  for="Name">Name: </label>
          <input  type="text" id="Name" name="Name"
          maxlength="150" 
          
          placeholder="First and Last Name" size="30" ></input>
   </> );
  }
  export default Name
