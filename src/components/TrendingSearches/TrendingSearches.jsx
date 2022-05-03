import { useState, useEffect } from "react"
import { getTrendingSearches } from "../../services/GiphyServices"
import { Category } from "../Category/Category"

export const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearches().then(setTrends)
  }, [])

  return <Category name="Trending" options={trends} />
}
