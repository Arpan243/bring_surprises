import React, {  useEffect } from 'react';
import {Home} from "./Screens/Home";
import {HandMadeGifts} from './Screens/HandMadeGifts';
import {  Route, Routes } from "react-router-dom";
import { Gallery } from './Screens/Gallery';
import { Services } from './Screens/Services';
import { About } from './Screens/About';
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
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/HandMadeGifts" element={<HandMadeGifts/>}/>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
      </Routes>
    </>
  );
}

export default App;
