import React from "react";
import Menu from "./Menu";
import Upload from "./Upload";
const MainContainer = () => {
  return (
    <div style={{ display: "flex", width: "100%", background: "#F8FAFF" }}>
      <Menu />
      <Upload />
    </div>
  );
};
export default MainContainer;
