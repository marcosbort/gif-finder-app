import { useState, useEffect, useContext } from "react"
import { getGifs } from "services/GiphyServices"
import GifsContext from "context/GifsContext"

export const useGifs = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)

    getGifs(keyword).then((gifs) => {
      setGifs(gifs)

      setLoading(false)
    })
  }, [keyword, setGifs])

  console.log(keyword)

  return { loading, gifs, keyword }
}
