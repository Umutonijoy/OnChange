import React from 'react';
import {useState} from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLaststName] = useState('');

  function changeF(c){
    setFirstName(c.target.value);
  }
  function changeL(c){
    setLaststName(c.target.value);
  }
  
  return (
    <>
    <form>
    <input placeholder='First Name' value={firstName} name="firstName" onChange={changeF}></input><br/>
    <input placeholder='Last Name' value={lastName} name="lastName" onChange={changeL}></input>

    <div>
    <p>First Name:{firstName} </p>
    </div>

    <div>
    <p>Last Name:{lastName} </p>
    </div>
    </form>
    </>
    );
}

export default App;