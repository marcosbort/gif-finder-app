import { TrendingGifs } from "components/Trending/Trending"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import "pages/Home/Home.css"
import "pages/SearchResults/SearchResults.css"

export const Home = () => {

  return (
    <div className="home">
      <div className="search-result-container">
        <h3 className="search-result-title">
          <FontAwesomeIcon className="icon-title" icon={faArrowTrendUp} />
          Trending Gifs
        </h3>
        <TrendingGifs />
      </div>
    </div>
  )
}
