import React from "react";

export const Sticker = ({ title, url }) => {
  return (
    <>
      <h6>{title}</h6>
      <img src={url} alt={title} />
    </>
  );
};
