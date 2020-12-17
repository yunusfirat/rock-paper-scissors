import React, {useState} from "react";
import "./styles.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import GameBoard from "./components/gameboard/GameBoard";
import PlayAgain from "./components/playAgain/PlayAgain";
import RulesButton from '../src/components/rules/RulesButton';
import BasicRules from '../src/components/rules/basicrules/BasicRules';







export default function App() {
    const [rulesClicked, setRulesClicked] = useState(false);
    const showRules = () => {
      setRulesClicked(!rulesClicked);
      } 
   
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
            <RulesButton handleClick={showRules}/>
        <BasicRules rulescard={rulesClicked} handleClick={showRules}/>
            

        </div>
    );
}
