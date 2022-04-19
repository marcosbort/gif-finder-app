import React from "react"
import "./App.css"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import logo from "./logo-01.png"
import { SearchResults } from "./components/SearchResult/SearchResults"
import { Link, Route } from "wouter"
import { Search } from "./components/Search/Search"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img className="App-logo" src={logo} alt="App logo" />
        </Link>
        <Search className="search" />
      </header>
      <section className="App-content">
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  )
}

export default App
