import React from "react";
import "./sidebar.css";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <Navigation />
    </div>
  );
}
export default Sidebar;
