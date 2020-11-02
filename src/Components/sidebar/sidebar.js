import React, { useState } from "react";
import "./sidebar.css";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
function Sidebar({ sidebarNeded, OpenSidebar }) {
  console.log(sidebarNeded);
let openParsidebar = "parentSidebar";
let openSidebar;
  if(sidebarNeded==true){
 openParsidebar="openParSidebar";
 openSidebar= "sidebarOpen";
} else if (sidebarNeded== false){
  openParsidebar="closeParSidebar";
  openSidebar="sidebarHide"
}
  const [addSidebar, setAddSidebar] = useState(false);
  return (
    <div className={openParsidebar}>
      <div className={openSidebar}>
      <Header />
        <Navigation />
        
    </div>
     <div className="leftSide" onClick={() => {
        setAddSidebar(false);
        OpenSidebar(addSidebar);
      }}
      ></div>
    </div>
  );
}
export default Sidebar;
