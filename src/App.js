import React from "react";
import "./styles.css";
//components
import Header from "./components/header/Header";


export default function App() {
  const showRules = ({target: {name}}) => {
    console.log(name);
    }   
  return (
    <div className="App">
      <Header />
    </div>
  );
}
