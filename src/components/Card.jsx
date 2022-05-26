import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';

export const Card = (props) => {
  return (
    <>
      {/* <!--image row start--> */}
      <div className="row" data-aos="fade-right">
        {/* <!--image card start--> */}
        <div className="image">
          <img src={props.imgsrc} alt="" />
          <div className="details">
            <h2>
              <span>{props.title}</span>
            </h2>
            <p>{props.details}</p>
            <div className="more">
              {/* <a href={props.link} className="read-more">
                Read <span>More</span>
              </a> */}
              <Link to={props.link} className="read-more">Read <span>More</span></Link>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
      </div>
      {/* <!--image row end--></> */}
    </>
  )
}
