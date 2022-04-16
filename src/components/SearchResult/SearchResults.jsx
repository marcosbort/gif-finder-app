import React from "react"
import { Spinner } from "../Spinner/Spinner"
import { useGifs } from "../../hooks/useGifs"
import ListOfGifs from "../ListOfGifs/ListOfGifs"

export const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
}
