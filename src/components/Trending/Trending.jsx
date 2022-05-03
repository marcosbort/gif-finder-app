import { useState, useEffect } from "react"
import { getTrendingSearches, getTrendingGifs } from "services/GiphyServices"
import { Category } from "components/Category/Category"
import { Gif } from "components/Gif/Gif"

export const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearches().then(setTrends)
  }, [])

  return <Category name="Trending" options={trends} />
}

export const TrendingGifs = () => {
  const [trendingGifs, setTrendingGifs] = useState([])

  useEffect(() => {
    getTrendingGifs().then(setTrendingGifs)
  }, [])

  return (
    <div className="list-of-gifs">
      {trendingGifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  )
}
