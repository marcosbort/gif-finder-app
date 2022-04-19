// useGifs devuelve: loading y gifs

import { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"

export const useGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true) // spinner on

    // si no hay keyword (on search), recuperamos la del localStorage

    getGifs(keyword).then((gifs) => {
      setGifs(gifs)

      setLoading(false) // spinner off

      // finalizada la búsqueda, guardamos la keyword en el localStorage
      localStorage.setItem("lastKeyword", keyword)
    })
  }, [keyword])

  return { loading, gifs }
}

// sino le pasamos ninguna keyword, por default, utiliza la última.
