import React from "react";
import "../styles/Loader.css";

const Loader = ({ size = "medium", message = "Loading..." }) => {
  return (
    <div className="loader-container">
      <div className={`loader-wrapper ${size}`}>
        {/* Option 1: Using loader.png from assets folder */}
        {/* <img src={require("../assets/loader.png")} alt="Loading..." className="loader-image" /> */}
        
        {/* Option 2: Using loader.png from public folder */}
        <img src="/loader.png" alt="Loading..." className="loader-image" />
        
        {message && <p className="loader-message">{message}</p>}
      </div>
    </div>
  );
};

export default Loader;
