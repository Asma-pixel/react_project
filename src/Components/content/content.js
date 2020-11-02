import React, { useState } from "react";
import "./content.css";
import Feed from "./feed/feed";
import Form from "./form/form";
import Context from "./Context";
function Content({ OpenSidebar }) {
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
    <div
      className="parent-of-content"
    >
      <div className="content">
        <Context.Provider value={{ deleteBonus }}>
          <Form
            onCreate={addBonus}
            helpValid={points}
            OpenSidebar={OpenSidebar}
          />
          <Feed bonus={bonus} key={bonus.id} />
        </Context.Provider>
      </div>
    </div>
  );
}
export default Content;
