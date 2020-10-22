import React, { useState } from "react";
import "./index.css";
import Sidebar from "./Components/sidebar/sidebar";
import Content from "./Components/content/content";
function App() {
  const [sidebarNeded, setSidebarNeded] = useState(false);
  function AddSidebar(addSidebar) {
    setSidebarNeded(addSidebar);
  }
  return (
    <div className="main">
      <Sidebar sidebarNeded={sidebarNeded}  AddSidebar={AddSidebar}/>
      <Content AddSidebar={AddSidebar} />
    </div>
  );
}

export default App;
