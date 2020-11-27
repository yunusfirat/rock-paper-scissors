import React from "react";
import "./styles.css";
//components
import Header from "./components/header/Header";
import GameBoard from "./components/gameboard/GameBoard";
 

export default function App() {  
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}
