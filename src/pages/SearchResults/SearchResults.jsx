import React from "react"
import "pages/SearchResults/SearchResults.css"
import { Spinner } from "components/Spinner/Spinner"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"

export const SearchResults = ({ params }) => {
  console.log("ejecución SearchResults")

  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="search-result-container">
            <h3 className="search-result-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} keyword={keyword} />
          </div>
        </>
      )}
    </>
  )
}
