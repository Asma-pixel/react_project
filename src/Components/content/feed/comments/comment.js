import React, { useState } from "react";
import "./comment.css";
function Comment({ comm }) {
  return (
    <div className="commentBox">
      <div className="profileTitle">
        <div className="image-circle-comment"></div>
        <span className="name">
          J. Lennon
          <span className="comment">{comm.comment}</span>
        </span>
      </div>
      <form className="parent-of-conditions">
        <h2 className="condition">just now</h2>
      </form>
    </div>
  );
}
export default Comment;
