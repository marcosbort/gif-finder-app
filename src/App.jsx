import React from "react";
import "./App.css";
import { ListOfGifs } from "./components/ListOfGifs";

const keyword = "music"

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
