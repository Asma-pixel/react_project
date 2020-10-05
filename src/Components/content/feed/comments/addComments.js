import React, { useState } from "react";
import "./comment.css";
function AddComments({ comm, onCreate }) {
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
  return (
    <form
      className={comm ? "addComments" : "noAddComments"}
      onSubmit={submitComment}
    >
      <input
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        className={isValid ? "comments" : "comments-error"}
        type="textarea"
        placeholder="Write your comment"
      ></input>
      <button className="add" type="submit" onClick={() => setIsAdded(true)}>
        Comment
      </button>
    </form>
  );
}
export default AddComments;
