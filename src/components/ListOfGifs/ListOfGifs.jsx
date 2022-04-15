import React, { useState, useEffect } from "react";
import { Gif } from "../Gif/Gif";
import { getGifs } from "../../services/getGifs";
import { Spinner } from "../Spinner/Spinner"

export const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <Spinner />;

  return (
    <div className="list-of-gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} />
      ))}
    </div>
  );
};
