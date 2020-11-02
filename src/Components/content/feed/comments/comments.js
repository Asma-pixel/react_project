import React, { useState } from "react";
import Comment from "./comment";
function Comments(props) {
  return (
    <div >
      {props.comments.map((comm) => {
        return <Comment comm={comm} key={comm.id} />;
      })}
    </div>
  );
}
export default Comments;
