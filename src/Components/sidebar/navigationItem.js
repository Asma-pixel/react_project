import React, { useState } from "react";
function NavItem({ nav }) {
  return (
    <div className="nav-block">
      <a href="">
        <img className="nav-image" src={nav.img} alt= "img" />
      </a>
      <a className=" nav-text" href="">
        {nav.name}
      </a>
    </div>
  );
}

export default NavItem;
