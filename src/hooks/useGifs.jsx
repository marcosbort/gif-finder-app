// useGifs devuelve: loading y gifs

import { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"

export const useGifs = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)

    getGifs(keyword).then((gifs) => {
      setGifs(gifs)

      setLoading(false)
    })
  }, [keyword])

  return { loading, gifs }
}
