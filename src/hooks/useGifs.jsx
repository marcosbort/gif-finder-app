// useGifs devuelve: loading y gifs

import { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"

export const useGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs(keyword).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  return { loading, gifs }
}
