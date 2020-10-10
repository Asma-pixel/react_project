import React, { useState } from "react";
import Option from "./feed_img/opt.svg";
import Context from "../Context";
import "./feed.css";
import { useContext } from "react";
import Comments from "./comments/comments";
import AddComments from "./comments/addComments";
function Bonus({ bon }) {
  const { deleteBonus } = useContext(Context);
  const [del, setDel] = useState(false);
  const [comm, setComm] = useState(false);
  document.ondblclick = () => {
    setDel(false);
    setComm(false);
  };
  const [comments, setComments] = useState([
    {
      id: 0,
      comment: "Thanks",
    },
  ]);
  function addComment(comment) {
    setComments(
      comments.concat([
        {
          id: Date.now(),
          comment,
        },
      ])
    );
  }
  return (
    <div>
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
                alt="opt"
                onClick={() => {
                  setDel(true);
                }}
              />
              <ul className={del ? "over" : "notover"}>
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
                  {`  ${bon.name}`}
                </a>
              </span>
              <p className="first-block-text first-block-text-2nd">
                {bon.reason}
              </p>
              <img className="man-image" src="" />
              <Comments comments={comments} key={comments.id} />
              <span
                className="first-block-text first-block-text-3rd"
                onClick={() => {
                  setComm(true);
                }}
              >
                Add comment
              </span>
            </div>
          </div>
        </div>
      </div>
      <AddComments comm={comm} onCreate={addComment} />
    </div>
  );
}
export default Bonus;
