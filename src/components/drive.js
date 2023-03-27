import React from "react";
const divStyle = {
    color: 'black',
    fontSize:30,
    
  };
const Driver = ({ label, value, onChange }) => {
    return (
      <label >
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };
  export default Driver