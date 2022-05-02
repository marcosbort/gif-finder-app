import React from "react"
import { Gif } from "../Gif/Gif"
import "./ListOfGifs.css"

export default function ListOfGifs({ gifs, keyword }) {
  return (
    <div className="list-of-gifs-container">
      <h3 className="list-of-gifs-keyword">{keyword}</h3>
      <div className="list-of-gifs-list">
        {gifs.map(({ id, title, url }) => (
          <Gif id={id} key={id} title={title} url={url} />
        ))}
      </div>
    </div>
  )
}
