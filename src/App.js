import React from "react";
import "./styles.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import GameBoard from "./components/gameboard/GameBoard";
import PlayAgain from "./components/playAgain/PlayAgain";


export default function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>

                    <Route exact path="/">
                        <GameBoard/>
                    </Route>
                    <Route exact path="/game-board">
                        <GameBoard/>
                    </Route>
                    <Route path="/game-board/choice">
                        <PlayAgain/>
                    </Route>

            </Switch>

        </div>
    );
}
