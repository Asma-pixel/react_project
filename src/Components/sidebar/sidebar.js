import React, { useState } from "react";
import "./sidebar.css";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
function Sidebar({ sidebarNeded, AddSidebar }) {

  const [addSidebar, setAddSidebar] = useState(true);
  return (
    <div className={sidebarNeded ? "popParentSidebar" : "parentSidebar"}>
      <div className={sidebarNeded ? "sidebar" : "sidebar-hide"}>
      <Header />
        <Navigation />
        
    </div>
     <div className="leftSide" onClick={() => {
        setAddSidebar(false);
        AddSidebar(addSidebar);
      }}
      ></div>
    </div>
  );
}
export default Sidebar;
