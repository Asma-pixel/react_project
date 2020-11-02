import React, { useState } from "react";
import "./comment.css";
function AddComments({ comm, onCreate,lineBeforeComments }) {
  const [comment, setComment] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [isValid, setIsValid] = useState(true);
  function submitComment(event) {
    if (event.keyCode === 13) {
      setIsAdded(true);
    }
    event.preventDefault();
    if (isAdded && comment.replace(/\s+/g, "") !== "") {
      onCreate(comment);
      setComment("");
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
  const [line,setLine]=useState(false);
  return (
    <form
      className={comm ? "addComments" : "noAddComments"}
      onSubmit={submitComment}
    >
      <input
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        className={isValid ? "comments-write" : "comments-write-error"}
        type="textarea"
        placeholder="Write your comment"
      ></input>
      <div className="give-block">
          <div className="gif-image"></div>
          <div className="gif-image-gif"></div>
      <div className="wrap-add">
      <button className="add" type="submit" onClick={() => {setIsAdded(true);} }>
       Add
      </button>
      </div>
      </div>
    </form>
  );
}
export default AddComments;
