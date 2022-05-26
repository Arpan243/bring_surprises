import React from "react";
import Card from "./Card";
import "./Cards.css";
import data from "./data";
// import HandMadeGifts from "../Screens/HandMadeGifts";

function sec1card(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      details={val.description}
      link={val.link}
    ></Card>
  );
}

const Cards = () => {
  return (
    <>
      <div className="container">{data.map(sec1card)}</div>
    </>
  );
};

export default Cards;
