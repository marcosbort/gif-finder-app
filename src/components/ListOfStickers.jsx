import React, { useState, useEffect } from "react";
import { Sticker } from "./Sticker";
import { getStickers } from "../services/getStickers";

export const ListOfStickers = ({ keyword }) => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    getStickers(keyword).then((stickers) => setStickers(stickers));
  }, [keyword]);

  return (
    <>
      {stickers.map(({ id, title, url }) => (
        <Sticker key={id} title={title} url={url} />
      ))}
    </>
  );
};
