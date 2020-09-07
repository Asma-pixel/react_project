import React from "react";
import "./header.css";
function Header() {
  return (
    <div>
      <div className="hex">
        <div className="hexagon-g">
          <div className="hexagon"></div>
        </div>
        <div className="rad">
          <h2 className="points">15</h2>
        </div>
      </div>
      <div className="sidebar__titles">
        <h1 className="title">Hello Monica!</h1>
        <a className="title—mini" href="">
          monica@mail.com
        </a>
      </div>
    </div>
  );
}
export default Header;
