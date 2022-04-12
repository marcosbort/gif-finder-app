import React from "react";

export const Gif = ({ title, url }) => {
  return (
    <>
      <h6>{title}</h6>
      <img src={url} alt={title} />
    </>
  );
};
