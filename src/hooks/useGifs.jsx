import { useState, useEffect, useContext } from "react"
import { getGifs } from "services/GiphyServices"
import GifsContext from "context/GifsContext"

const initial_page = 0

export const useGifs = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(initial_page)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)

    getGifs(keyword).then((gifs) => {
      setGifs(gifs)

      setLoading(false)
    })
  }, [keyword, setGifs])

  useEffect(() => {
    if (page === initial_page) return

    setLoadingNextPage(true)

    getGifs({ keyword, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })

  }, [page, keyword, setGifs])

  console.log(keyword)

  return { loading, loadingNextPage, gifs, keyword, setGifs, setPage, page }
}
