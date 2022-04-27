import React from "react"
import { Spinner } from "../../components/Spinner/Spinner"
import { useGifs } from "../../hooks/useGifs"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"

export const SearchResults = ({ params }) => {
  console.log("ejecución SearchResults")

  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return (
    <>
      {
        loading 
        ? <Spinner /> 
        : <ListOfGifs gifs={gifs} keyword={keyword}/>
      }
    </>
  )
}
