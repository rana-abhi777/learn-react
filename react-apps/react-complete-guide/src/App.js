import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

function App() {
  return (
    <div className="App">
      <h1>Hello React App!</h1>
      <Person name="John" age="28" />
      <Person name="Doe" age="29">My hobbies: Racing</Person>
      <Person name="Rock" age="35" />
    </div>
  );
}

export default App;
