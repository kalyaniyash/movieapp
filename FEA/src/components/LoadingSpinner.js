import React from "react";
import Loader from "./Loader";

const LoadingSpinner = ({ 
  isLoading, 
  children, 
  message = "Loading...", 
  size = "medium",
  overlay = false 
}) => {
  if (!isLoading) {
    return children;
  }

  if (overlay) {
    return (
      <div style={{ position: "relative" }}>
        {children}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <Loader size={size} message={message} />
        </div>
      </div>
    );
  }

  return <Loader size={size} message={message} />;
};

export default LoadingSpinner;
