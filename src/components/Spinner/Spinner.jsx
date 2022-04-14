import React from "react";
import "../Spinner/Spinner.css"

export const Spinner = () => {
  return (
    <>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </>
  );
};
