import React, { useState } from "react";
import "./content.css";
import Feed from "./feed/feed";
import Form from "./form/form";
function Content() {
  const [points, setPoints] = useState(100);
  const [bonus, setBonus] = useState([
    { id: 0, points: "", username: "", receiverName: "", reason: "" },
  ]);
  return (
    <div className="parent-of-content">
      <div className="content">
        <div class="content__titles">
          <div class="sandwich"></div>
          <span class="content__titles-bold">
            {points} points
            <span class="content__titles-normal">to show one's gratitude</span>
          </span>
        </div>
        <Form />
        <Feed bonus={bonus} key={bonus.id} />
      </div>
    </div>
  );
}
export default Content;
