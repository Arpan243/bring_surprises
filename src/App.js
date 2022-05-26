import React, { useState, useEffect } from 'react';
import Home from "./Home";
// import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Home></Home>
    
    </>
  );
}

export default App;
