import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import { ListOfGifs } from "./components/ListOfGifs/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <div className="links">
          <Link to="/gif/cat">Gatos</Link>
          <Link to="/gif/panda">Pandas</Link>
          <Link to="/gif/parrot">Loros</Link>
        </div>
        
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
