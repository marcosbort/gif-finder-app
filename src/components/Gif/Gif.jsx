import React from "react";

export const Gif = ({ title, url }) => {
  return (
    <div className="gif">
      {/* <h6>{title}</h6> */}
      <img src={url} alt={title} />
    </div>
  );
};
