import './App.css';
import * as React from 'react';
import Driver from './components/drive'
import styled from 'styled-components';

const divStyle = {
  color: 'black',
  background: 'palegreen',
  fontSize: 15,
  borderRadius: 10,
  width: 150,
  
  
  
};
const divStyle1 = {
  color: 'black',
  fontSize: 15,
  width: 15,
  marginTop: 10,
  
};


export default function App(){


  
 
  const handleYesChange = () => {
    setFavorite('Yes');
  };
  const handleNoChange = () => {
    setFavorite('No');
  };
  function handleChange(event) {
    setFavoriteSeason(event.target.value);
  }
  
  const [favorite, setFavorite] = React.useState("");
  const [name, setName] =React.useState("");
  const [age,setAge]=React.useState("");
  const [favoriteSeason, setFavoriteSeason]=React.useState("");
  const [showResult, setShowResult] = React.useState(false);
  const [showS, showSeason] = React.useState('');
  const [showA, showAge] = React.useState('');
  const [showN, showName] = React.useState('');
  const [showD, showDriver] = React.useState('');


  const Button=styled.button`
   
  `;
  
  function clickMe(event){
    if ((favorite=="")||(name=="") ||(favoriteSeason=="")|| (age=="") ){
      alert("please fill out all fields")
    }
   
    else{
      event.preventDefault();
      showSeason(favoriteSeason);
      showAge(age);
      showName(name);
      showDriver(favorite)
    setShowResult(true);
    }
  
  }
  return (
    <div className="App-header">
     
    <>
    <form onSubmit={clickMe}>
      <p style={{color:'Black', fontSize:40, background: 'palegreen',borderRadius: 10,size:30}}>Please Fill Out All Fields Before Submitting</p>
    <div className="App" style={{alignItems:'center'}}></div>
      
      <label   for="Name">Name: </label>
          <input  type="text" value={name} style={{width:150, color:'black', background: 'palegreen',borderRadius: 10}} onChange={(event => setName(event.target.value))} id="Name" name="Name"
          maxlength="150" placeholder="First and Last Name" size="30" ></input>
      <div>
      <label  for="Age">Age: </label>
          <input type="number" value={age} style={{width:150, color:'black', background: 'palegreen',borderRadius: 10}} onChange={(event => setAge(event.target.value))} id="Age" name="Age"
          max="125" placeholder="0-125"
          
           size="20"></input>
      </div>
      
      <label   htmlFor="season-select">Choose your favorite season:</label>
      <select style={divStyle} id="season-select" value={favoriteSeason} onChange={handleChange}>
        <option style= {divStyle} value="">Choose season--</option>
        <option style= {divStyle} value="Spring">Spring</option>
        <option style= {divStyle} value="Summer">Summer</option>
        <option style= {divStyle} value="Fall">Fall</option>
        <option style= {divStyle} value="Winter">Winter</option>
      </select>
      
      <div>
        <label>Can You Drive A Car?</label>
        <div></div>
      <Driver
        opt
        label="Yes"
        style={{fontSize:20, color:'#e57979' }}
        value={favorite === 'Yes'}
        onChange={handleYesChange}
        
      />
      <Driver
        
        label="No"
        value={favorite === 'No'}
        onChange={handleNoChange}
      />
      <div></div>
      <Button style={{background:'palegreen'}} onClick={clickMe}> Submit</Button>
    </div>
    <div>
    
    </div>
    {showResult && <><p>The User Entered: </p>
    <p style={{ marginLeft: '30px' , color: 'palegreen'}}>Name: {showN}</p>
    <p style={{ marginLeft: '30px' , color: 'palegreen'}}>Age: {showA} Years Old </p>
    <p style={{ marginLeft: '30px' , color: 'palegreen'}}>{showS} is your favorite season.</p>
    <p style={{ marginLeft: '30px' , color: 'palegreen'}}>Can you drive? {showD}</p></>
      }
    </form>
    </>
    
    </div>
  );
}