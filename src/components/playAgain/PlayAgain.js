import React, { useContext, useEffect, useState } from "react";
import button from "../../assets/css/button.css";
import "./PlayAgain.css";
import CircularComponent from "../circularcomponent/CircularComponent";
import { gameContext } from "../../context/gameContext";
import { withRouter } from "react-router-dom";

const PlayAgain = (props) => {
  const {
    computerChoice,
    getWinner,
    userChoice,
    setUserChoice,
    setComputerChoice,
    getComputerChoice,
  } = useContext(gameContext);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    getComputerChoice();
  }, []);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         const computerChoice = getComputerChoice();
  //         setComputerChoice(computerChoice)
  //     }, 1000);
  //     return () => clearTimeout(timer);
  // }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = getWinner(userChoice, computerChoice);
      setResultText(result);
    }, 2000);
    return () => clearTimeout(timer);
  }, [userChoice, computerChoice]);

  const redirectToGameBoard = () => {
    props.history.push({
      pathname: "/game-board",
    });
    setUserChoice("");
    setComputerChoice("");
    setResultText("");
  };

  return (
    <div className="game-result">
      <div className="basic-top">
        <div className="choice-result-choice">
          <div className="choice-result-text">YOUR CHOICE</div>

          <CircularComponent componentName={userChoice} />
        </div>

        {resultText !== "" ? (
          <div className="play-again">
            <div className="choice-result-text2">{resultText}</div>
            <div>
              <button
                type="button"
                className="button btn-play-again"
                onClick={() => redirectToGameBoard()}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="choice-result-choice">
          <div className="choice-result-text">COMPUTER CHOICE</div>

          {resultText !== "" ? (
            <CircularComponent componentName={computerChoice} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlayAgain);
