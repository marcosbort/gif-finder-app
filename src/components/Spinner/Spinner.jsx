import React from "react";
import "components/Spinner/Spinner.css"

export const Spinner = () => {
  return (
    <div className="spinner">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
