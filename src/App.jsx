import React from "react";
import"./App.css";
import { Navbar, Footer, Main} from "./Container/ExportContainer";
import DarkMode from "./Container/DarkMode";
import Render from "./Container/Render";
import React, { useState } from 'react';
// function App() {
//   return (
    <>
     <Navbar />
     <Footer />
     <Main />
     <DarkMode />
     <Render />
    </>
    // src/App.js

// src/App.js


function App() {
  const [isConditionTrue, setIsConditionTrue] = useState(false);

  const toggleCondition = () => {
    setIsConditionTrue(!isConditionTrue);
  };

  return (
    <div className="App">
      <h1>Conditional Rendering Example</h1>
      <button onClick={toggleCondition}>
        {isConditionTrue ? 'Set to False' : 'Set to True'}
      </button>
      {isConditionTrue ? (
        <p>The condition is true!</p>
      ) : (
        <p>The condition is false.</p>
      )}
    </div>
  );
} 

export default App;


 


