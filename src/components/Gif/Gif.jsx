import React from "react"
import { Link } from "wouter"
import "./Gif.css"

export const Gif = ({ title, id, url }) => {
  return (
    <div className="gif">
      {/* <div className="gif-buttons">aca va el fav</div> */}
      <Link to={`/gif/${id}`} className="gif-link">
        {/* <h4>{title}</h4> */}
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}
