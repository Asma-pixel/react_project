import React, { useState } from "react";
import "./form.css";
import gif from "./form_img/gif.svg";
import Gif from "./form_img/GIF-img.svg";
function Form({ onCreate }) {
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (value.replace(/\s+/g, "") !== "") {
      onCreate(value.trim());
      setValue("");
    }
  }
  return (
    <div className="box">
      <form className="first-wrap" onSubmit={submitHandler}>
        <div className="wrap-text">
          <div className="firstblock-text">
            <label className="text-int">
              Give
              <input
                className="text-int__point"
                type="text"
                placeholder="5"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
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
          <img className="gif-image" src={gif} />
          <img className="gif-image-gif" src={Gif} />
          <div className="wrap-button">
            <input className="but" type="submit" value="Give" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
