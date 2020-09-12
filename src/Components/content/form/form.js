import React, { useState } from "react";
import "./form.css";
function Form() {
  return (
    <div className="box">
      <div className="first-wrap">
        <div className="wrap-text">
          <div className="firstblock-text">
            <label className="text-int">
              Give
              <input className="text-int__point" type="text" placeholder="5" />
            </label>
            <label className="text-int">
              to
              <input
                className="text-int__point"
                type="text"
                placeholder="alex"
              />
            </label>
            <label className="text-int">
              <input
                className="text-int__point-1"
                type="text"
                placeholder="for the reason"
              />
            </label>
          </div>
        </div>
        <div className="give-block">
          <img className="gif-image" src="img\gif.svg" />
          <img className="gif-image-gif" src="img\GIF-img.svg" />
          <div className="wrap-button">
            <input className="but" type="button" value="Give" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
