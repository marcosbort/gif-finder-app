import React from "react"
import { Gif } from "../Gif/Gif"
import "./ListOfGifs.css"

export default function ListOfGifs({ gifs }) {
  return (
    <div className="list-of-gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  )
}
