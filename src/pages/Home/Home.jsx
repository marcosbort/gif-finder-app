import { TrendingGifs, TrendingSearches } from "components/Trending/Trending"
import React from "react"
import "pages/Home/Home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="App-category">
        <TrendingGifs  />
        <TrendingSearches  />
      </div>
    </div>
  )
}
