import React from 'react'
import {Navbar} from "../components/navbar";
import Textslider from "../components/Textslider";
import Choice from "../components/Choice";
import Cards from "../components/Cards";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Textslider></Textslider>
      <Choice />
      <Cards></Cards>
    </>
  )
}
