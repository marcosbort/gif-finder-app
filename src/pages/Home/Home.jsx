import React from "react"
import { TrendingSearches } from "../../components/TrendingSearches/TrendingSearches"
import "./Home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="App-category">
        <TrendingSearches />
      </div>
    </div>
  )
}
