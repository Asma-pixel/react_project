import React, { useState } from "react";
import "./form.css";
import gif from "./form_img/gif.svg";
import Gif from "./form_img/GIF-img.svg";
function Form({ onCreate, helpValid }) {
  const [point, setPoint] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const dataObj = {
    point: "",
    name: "",
    reason: "",
  };
  function submitHandler(event) {
    event.preventDefault();
    if (
      point.replace(/\s+/g, "") !== "" &&
      name.replace(/\s+/g, "") !== "" &&
      point <= helpValid
    ) {
      dataObj.point = point;
      dataObj.name = name;
      dataObj.reason = reason;
      onCreate(dataObj);
      setPoint("");
      setName("");
      setReason("");
      console.log(dataObj);
      console.log(name);
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
                value={point}
                onChange={(event) => setPoint(event.target.value)}
              />
            </label>
            <label className="text-int">
              to
              <input
                className="text-int__point"
                type="text"
                placeholder="alex"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className="text-int">
              <input
                className="text-int__point-1"
                type="text"
                placeholder="for the reason"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
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
