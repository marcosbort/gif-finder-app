import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import { ListOfGifs } from "./components/ListOfGifs/ListOfGifs";
import {Home} from "./pages/Home"
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to={"/"}>
          <img className="App-logo" src={logo} alt="App logo" />
        </Link>
        <Route component={Home} path="/" />
        <Route component={ListOfGifs} path="/search/:keyword" />
        {/* <Route component={Detail} path="/gif/:id" /> */}
      </section>
    </div>
  );
}

export default App;
