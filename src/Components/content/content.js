import React, { useState } from "react";
import "./content.css";
import Feed from "./feed/feed";
import Form from "./form/form";
import Context from "./feed/Context";
function Content() {
  let [points, setPoints] = useState(100);
  const [bonus, setBonus] = useState([{ id: 0, point: 5, name: "fad" }]);
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
  function deleteBonus(id) {
    setBonus(bonus.filter((bon) => bon.id !== id));
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
        <Context.Provider value={{ deleteBonus }}>
          <Form onCreate={addBonus} helpValid={points} />
          <Feed bonus={bonus} key={bonus.id} deleteBonus={deleteBonus} />
        </Context.Provider>
      </div>
    </div>
  );
}
export default Content;
