import React from "react";
import Typewriter from "typewriter-effect";
import "./Textslider.css";

const Textslider = () => {
  return (
    <>
      <div className="body">
        <span className="text">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            options={{
              strings: [
                "Make Surprises",
                "Make Your Day Special",
                "Give Your Love an Awsome Aneversery",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </>
  );
};

export default Textslider;
