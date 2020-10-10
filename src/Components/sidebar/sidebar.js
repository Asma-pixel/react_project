import React, { useState } from "react";
import "./sidebar.css";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
function Sidebar({ sidebarNeded }) {
  return (
    <div className={sidebarNeded ? "popsidebar" : "sidebar"}>
      <Header />
      <Navigation />
    </div>
  );
}
export default Sidebar;
