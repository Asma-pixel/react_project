import React, { useState } from "react";
import NavItem from "./navigationItem";
import "./navigation.css";
import Home from "./sidebar_img/home.svg";
import Reward from "./sidebar_img/reward.svg";
import Profile from "./sidebar_img/profile.svg";
import Administration from "./sidebar_img/gear.svg";
import Settings from "./sidebar_img/set.svg";
function Navigation() {
  const list = [
    { id: 1, name: "Home", img: Home },
    { id: 2, name: "Get reward", img: Reward },
    { id: 3, name: "Profile", img: Profile },
    { id: 4, name: "Administration", img: Administration },
    { id: 5, name: "Settings", img: Settings },
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
