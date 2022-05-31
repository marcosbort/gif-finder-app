import React from "react"
import "pages/SearchResults/SearchResults.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Spinner } from "components/Spinner/Spinner"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"

export const SearchResults = ({ params }) => {
  console.log("ejecución SearchResults")

  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handeleNextPage = () => setPage(prevPage => prevPage + 1)
 
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="search-result-container">
            <h3 className="search-result-title">
              <FontAwesomeIcon className="icon-title" icon={faMagnifyingGlass} />
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} keyword={keyword} />
          </div>
        </>
      )}
      <button onClick={handeleNextPage} >Load more</button>
    </>
  )
}
