import React, { useState } from "react";
import Option from "./feed_img/opt.svg";
import Context from "./Context";
import "./feed.css";
import { useContext } from "react";
function Bonus({ bon }) {
  const [add, setAdd] = useState(false);
  const { deleteBonus } = useContext(Context);
  return (
    <div className="box-bigger">
      <div className="second-wrap-of-box">
        <div className="first-content">
          <div className="profiletitle">
            <div className="image-circle"></div>
            <span className="title-name">Monica Bellucci</span>
          </div>
          <form className="parent-of-options-and-conditions">
            <h2 className="condition">just now</h2>
            <img
              className="option"
              src={Option}
              onClick={() => {
                setAdd(true);
              }}
              onDoubleClick={() => {
                setAdd(false);
              }}
            />
            <ul className={add ? "over" : "notover"}>
              <li onClick={() => deleteBonus(bon.id)}>Удалить</li>
              <li>Важное</li>
            </ul>
          </form>
        </div>
        <div className="wrap-first-text">
          <div className="first-block-text">
            <span className="first-block-text first-block-text-1st">
              {`+ ${bon.point} `}
              <span className="first-block-text first-block-text-1st-normal">
                to
              </span>
              <a
                className="first-block-text first-block-text first-block-text-1st first-block-text first-block-text-1st-link"
                href=""
              >
                {` ${bon.name}`}
              </a>
            </span>
            <p className="first-block-text first-block-text-2nd">
              {bon.reason}
            </p>
            <img className="man-image" src="" />
            <span className="first-block-text first-block-text-3rd">
              <a
                className="firs-block-text first-block-text first-block-text-3rd first-block-text first-block-text-3rd-link"
                href=""
              >
                Add comment
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bonus;
