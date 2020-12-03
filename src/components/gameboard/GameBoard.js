import React, {useContext, useEffect, useState} from "react";
import "./GameBoard.css";

import Basic from "../gamescenes/basic/Basic";
import PlayAgain from "../playAgain/PlayAgain";
import {gameContext} from "../../context/gameContext";

//use conditional rendering to display basic game or advanced game
//this component acts as a container for intercative part of the game
const GameBoard = () => {
    const {computerChoice, getComputerChoice} = useContext(gameContext);

    return (
        <div className="game-board">
            <Basic/>
        </div>
    );
};

export default GameBoard;
