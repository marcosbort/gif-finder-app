import React from "react"
import { Link } from "wouter"
import "./Gif.css"

export const Gif = ({ title, id, url }) => {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} className="gif-link">
        <h4>{}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}
