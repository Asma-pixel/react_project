import React, { useState } from "react";
import Option from "./feed_img/opt.svg";
import Context from "../Context";
import "./feed.css";
import { useContext } from "react";
import Comments from "./comments/comments";
import AddComments from "./comments/addComments";
function Bonus({ bon }) {
  const { deleteBonus } = useContext(Context);
  const [del, setDel] = useState(null);
  const [comm, setComm] = useState(false);
  document.ondblclick = () => {
    setDel(false);
  };
  const [comments, setComments] = useState([]);
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
  function lineBefore(comments,comm){
    if (comments.length !==0 || comm === true ){ setLine(true);}
    else setLine(false)
  }
let classes = "over";
 if(del === false){
  classes="over_hide";
} else if(del === true) {classes="over_show";}
const[line,setLine]=useState(null);
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
              <ul className={classes}>
                <li onClick={() => deleteBonus(bon.id)}>Удалить</li>
                <li className="important">Важное</li>
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
              <div
                className="addCommentBlock">
                <div className={comm ? "commentImageYellow":"commentImage"} onClick={() => {
                  setComm(Math.abs(comm*1-1));
                  lineBefore({comm,comments});
                }}></div>
                <div className="plusBonus"></div>
              </div>
              <div>
              <div className = {line ? "commentList": "hiddenCommentList"}>
              <Comments comments={comments} key={comments.id} line={line}  />
              <AddComments comm={comm} onCreate={addComment}/> 
              </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
export default Bonus;
