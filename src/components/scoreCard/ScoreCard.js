import React, {useContext, useState} from "react";
import "./ScoreCard.css";
import {gameContext} from "../../context/gameContext";

const ScoreCard = () => {
    const {userScore} = useContext(gameContext);
  return (
    <div className="scorecard">
      <h3>SCORE</h3>
      <p>{userScore}</p>
    </div>
  );
};

export default ScoreCard;
