import React, { useState } from "react";
import "./index.css";
import Sidebar from "./Components/sidebar/sidebar";
import Content from "./Components/content/content";
function App() {
  const [sidebarNeded, setSidebarNeded] = useState(null);
  function OpenSidebar(addSidebar) {
    setSidebarNeded(addSidebar);
  }
  return (
    <div className="main">
      <Sidebar sidebarNeded={sidebarNeded}  OpenSidebar={OpenSidebar}/>
      <Content OpenSidebar={OpenSidebar} />
    </div>
  );
}

export default App;
