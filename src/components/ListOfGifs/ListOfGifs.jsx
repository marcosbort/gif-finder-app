import React from "react"
import { Gif } from "components/Gif/Gif"
import "components/ListOfGifs/ListOfGifs.css"

export default function ListOfGifs({ gifs, keyword }) {
  return (
    <div className="list-of-gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  )
}
