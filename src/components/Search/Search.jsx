import React, { useCallback, useState } from "react"
import { useLocation } from "wouter"

export const Search = () => {
  const [keyword, setKeyword] = useState("")
  const [path, pushLocation] = useLocation()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }, [keyword, pushLocation])

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value)
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Search a gif here..."
          type="text"
          value={keyword}
        />
      </form>
    </div>
  )
}
