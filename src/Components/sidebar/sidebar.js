import React, { useState } from "react";
import Header from "./header";
import Navigation from "./navigation";
function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <Navigation />
    </div>
  );
}
export default Sidebar;
