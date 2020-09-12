import React, { useState } from "react";
import Bonus from "./bonus";
import "./feed.css";
function Feed(props) {
  return (
    <div className="box-bigger">
      {props.bonus.map((bon) => {
        return <Bonus bon={bon} key={bon.id} />;
      })}
    </div>
  );
}
export default Feed;
