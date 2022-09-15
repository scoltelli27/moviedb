import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <div className="spinnerText">
        <span>Looking for your movie...</span>
        <br></br>
        <span>(Loading times may vary)</span>
      </div>
    </div>
  );
}
