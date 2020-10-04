import React, { useState } from "react";
import "./index.css";
import Sidebar from "./Components/sidebar/sidebar";
import Content from "./Components/content/content";
function App() {
  return (
    <div className="main">
      <Sidebar />
      <Content  />
    </div>
  );
}

export default App;
