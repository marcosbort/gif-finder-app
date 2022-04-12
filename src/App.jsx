import React from "react";
import "./App.css";
import { ListOfStickers } from "./components/ListOfStickers";

const keyword = "cat"

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <ListOfStickers keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
