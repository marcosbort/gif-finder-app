import { useState, useEffect } from "react"
import { getTrendingGifs } from "../../services/GiphyServices"
import Category from "../Category/Category"

export const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingGifs().then(setTrends)
  }, [])

  return <Category name="Tendencias" options={trends} />
}
