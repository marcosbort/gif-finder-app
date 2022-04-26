import React from "react"
import "./App.css"
import { Link, Route } from "wouter"
import logo from "./gif-paradise-1.png"
import { Home } from "./pages/Home/Home"
import { Detail } from "./pages/Detail/Detail"
import { Search } from "./components/Search/Search"
import { GifsContextProvider } from "./context/GifsContext"
import { SearchResults } from "./pages/SearchResults/SearchResults"

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
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
