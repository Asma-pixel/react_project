import React from "react";
import Bonus from "./bonus";
import "./feed.css";
function Feed(props) {
  return (
    <div>
      {props.bonus.map((bon) => {
        return <Bonus bon={bon} key={bon.id} />;
      })}
    </div>
  );
}
export default Feed;
