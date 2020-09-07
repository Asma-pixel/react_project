import React, { useState } from "react";
import NavItem from "./navigationItem";

function Navigation() {
  const list = [
    { name: "Home", img: "/img/home.svg" },
    { name: "Get reward", img: "/img/home.svg" },
    { name: "Profile", img: "/img/home.svg" },
    { name: "Administration", img: "/img/home.svg" },
    { name: "Settings", img: "/img/home.svg" },
  ];
  return (
    <div className="sidebar__nav">
      {list.map((nav) => {
        return <NavItem nav={nav} key={nav.id} />;
      })}
    </div>
  );
}
export default Navigation;
