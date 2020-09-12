import React from "react";
import NavItem from "./navigationItem";
import "./navigation.css";
import Home from "./nav_img/home.svg";
import Reward from "./nav_img/reward.svg";
import Profile from "./nav_img/profile.svg";
import Administration from "./nav_img/gear.svg";
import Settings from "./nav_img/set.svg";
function Navigation() {
  const list = [
    { id: 1, name: "Home", img: Home },
    { id: 2, name: "Get reward", img: Reward },
    { id: 3, name: "Profile", img: Profile },
    { id: 4, name: "Administration", img: Administration },
    { id: 5, name: "Settings", img: Settings },
  ];
  return (
    <div className="navigation">
      {list.map((nav) => {
        return <NavItem nav={nav} key={nav.id} />;
      })}
    </div>
  );
}
export default Navigation;
