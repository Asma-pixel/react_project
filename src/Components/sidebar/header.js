import React from "react";
import "./header.css";
function Header() {
  let points = 15;
  let hi = "Hello Monica!";
  let email = "monica@mail.com";
  return (
    <div>
      <div className="hex">
        <div className="hexagon-g">
          <div className="hexagon"></div>
        </div>
        <div className="rad">
          <h2 className="points">{points}</h2>
        </div>
      </div>
      <div className="sidebar__titles">
        <h1 className="title">{hi}</h1>
        <a className="title—mini" href="">
          {email}
        </a>
      </div>
    </div>
  );
}
export default Header;
