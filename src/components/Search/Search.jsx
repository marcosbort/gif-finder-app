import React, { useState } from "react"
import { useLocation } from "wouter"

export const Search = () => {
  const [keyword, setKeyword] = useState("")

  // ["/", f(donde queremos ir)]
  const [path, pushLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault() // para no recargar todo el sitio
    pushLocation(`/search/${keyword}`) // donde queremos ir
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

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
