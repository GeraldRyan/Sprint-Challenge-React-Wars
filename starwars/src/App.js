import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Crew from './components/Crew'

const App = () =>
{
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState({})

  useEffect(() =>
  {
    axios.get('https://swapi.co/api/people/')
    .then(response =>
      setPeople(response.data.results[0])) // this is the side effect is from the axios get function? 
    .catch("You caught me kid")
    // That's it for the useEffect/Get function, just to produce the object needed
  },[])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
if (people !=={}){
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Crew data={people}/>
    </div>
  );}}


export default App;
