import React, { useState } from "react";
import "./content.css";
import Feed from "./feed/feed";
import Form from "./form/form";
function Content() {
  const [points, setPoints] = useState(100);
  const [bonus, setBonus] = useState([]);
  function addBonus(points, receiverName, reason) {
    setBonus(
      bonus.concat([
        {
          points,
          id: Date.now(),
          receiverName,
          reason,
        },
      ])
    );
    console.log(bonus);
  }
  return (
    <div className="parent-of-content">
      <div className="content">
        <div className="content__titles">
          <div className="sandwich"></div>
          <span className="content__titles-bold">
            {points} points
            <span className="content__titles-normal">
              to show one's gratitude
            </span>
          </span>
        </div>
        <Form onCreate={addBonus} />
        <Feed bonus={bonus} key={bonus.id} />
      </div>
    </div>
  );
}
export default Content;
