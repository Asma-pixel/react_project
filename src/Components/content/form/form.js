import React, { useState } from "react";
import "./form.css";
import gif from "./form_img/gif.svg";
import Gif from "./form_img/GIF-img.svg";
function Form({ onCreate, helpValid, AddSidebar }) {
  const [addSidebar, setAddSidebar] = useState(false);
  const [point, setPoint] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [isValidPoint, setIsValidPoint] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidHelp, setIsValidHelp] = useState(true);
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
      point <= helpValid &&
      point !== 0
    ) {
      dataObj.point = point;
      dataObj.name = name;
      dataObj.reason = reason;
      onCreate(dataObj);
      setPoint("");
      setName("");
      setReason("");
      setIsValidPoint(true);
      setIsValidName(true);
      setIsValidHelp(true);
    }
    if (
      point.replace(/\s+/g, "") === "" ||
      point === 0 ||
      isNaN(point) === true
    ) {
      setIsValidPoint(false);
      setPoint("");
    } else setIsValidPoint(true);
    if (name.replace(/\s+/g, "") === "") {
      setIsValidName(false);
    } else setIsValidName(true);

    if (point >= helpValid) {
      setIsValidHelp(false);
    } else setIsValidHelp(true);
  }
  return (
    <div>
      <div className="content__titles">
        <div
          className="wrapper-sandwich"
          onClick={() => {
            setAddSidebar(true);
            AddSidebar(addSidebar);
          }}
        >
          <div className="sandwich"></div>
        </div>
        <span
          className={
            isValidHelp ? "content__titles-bold" : "content__titles-bold-red"
          }
        >
          {helpValid} points{" "}
          <span className="normal">to show one's gratitude</span>
        </span>
      </div>
      <div
        className={
          isValidPoint && isValidName && isValidHelp ? "box" : "box-error"
        }
      >
        <form className="first-wrap" onSubmit={submitHandler}>
          <div className="wrap-text">
            <div className="firstblock-text">
              <label
                className={
                  isValidPoint && isValidHelp ? "text-int" : "text-int-error"
                }
              >
                Give
                <input
                  className="point"
                  type="text"
                  placeholder="5"
                  value={point}
                  onChange={(event) => setPoint(event.target.value)}
                />
              </label>
              <label className={isValidName ? "text-int" : "text-int-error"}>
                to
                <input
                  className="point"
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
    </div>
  );
}
export default Form;
