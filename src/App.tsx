import React from "react";
import "./App.css";
import { Starwars } from "./components/Starwars";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars />
      </header>
    </div>
  );
}

export default App;
// const Item: React.FC<Props>
