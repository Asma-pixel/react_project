import React, { useState } from "react";
import "./content.css";
import Feed from "./feed/feed";
import Form from "./form/form";
function Content() {
  let [points, setPoints] = useState(100);
  const [bonus, setBonus] = useState([]);
  function addBonus({ point, name, reason }) {
    setPoints((points = points - point));
    setBonus(
      bonus.concat([
        {
          id: Date.now(),
          point,
          name,
          reason,
        },
      ])
    );
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
        <Form onCreate={addBonus} helpValid={points} />
        <Feed bonus={bonus} key={bonus.id} />
      </div>
    </div>
  );
}
export default Content;
