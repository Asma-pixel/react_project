import React, { useState } from "react";
function Comment({ comm }) {
  return (
    <div>
      <form className="parent-of-options-and-conditions">
        <h2 className="condition">just now</h2>
      </form>
      <div>{comm.comment}</div>
    </div>
  );
}
export default Comment;
