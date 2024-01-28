// Upload.jsx
import React from "react";
import { ReactComponent as Profile } from "../assets/Profile.svg";
import { ReactComponent as Excel } from "../assets/Excel.svg";
import { Link } from "react-router-dom";
import MainContainer from "./MainContainer";

function Upload() {
  return (
    <div className="upload-page">
      <div className="page-header">
        <h1>Upload CSV</h1>

        {<Profile />}
      </div>
      <div className="input-container">
        <div className="upload-area">
          {<Excel />}

          <span>Drop your excel sheet here or browse</span>
        </div>
        
          {" "}
          <button className="upload-button">
            {/* SVG or text for the upload icon if needed */}
            Upload
          </button>
       
      </div>
    </div>
  );
}

export default Upload;
