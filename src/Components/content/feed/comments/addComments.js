import React, { useState } from "react";
import "./comment.css";
function AddComments({ comm, onCreate }) {
  const [comment, setComment] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  function submitComment(event) {
    if (event.keyCode === 13) {
      setIsAdded(true);
    }
    event.preventDefault();
    if (isAdded) {
      onCreate(comment);
      setComment("");
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
        className="comments"
        cols="22"
        rows="2"
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
