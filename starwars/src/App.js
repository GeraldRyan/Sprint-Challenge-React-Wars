import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Crew from './components/Crew'

const App = () =>
{
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([])

  useEffect(() =>
  {
    axios.get('https://swapi.co/api/people/')
    .then(response =>{
      response.data.results.unshift({name: "Jar Jar Binks", gender: 'male', height: 195, mass:90})
      response.data.results.push({name: "Captain Picard", gender: 'male', height: 150, mass:150})
      setPeople(response.data.results)}) // this is the side effect is from the axios get function? 
    .catch("You caught me kid")
    // That's it for the useEffect/Get function, just to produce the object needed
  },[])
//
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Crew data={people}/>
    </div>
  );}


export default App;
