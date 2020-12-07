import React, {useContext, useEffect, useState} from 'react';
import button from '../../assets/css/button.css'
import './PlayAgain.css'
import CircularComponent from "../circularComponent/CircularComponent";
import {gameContext} from "../../context/gameContext";
import {withRouter} from "react-router-dom";

const PlayAgain = (props) => {
    const {computerChoice, getWinner, userChoice, setUserChoice, setComputerChoice, getComputerChoice} = useContext(gameContext);
    const [resultText, setResultText] = useState('');

    useEffect(() => {
        getComputerChoice();
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         const computerChoice = getComputerChoice();
    //         setComputerChoice(computerChoice)
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, [])


    useEffect(() => {
        const timer = setTimeout(() => {
            const result = getWinner(userChoice, computerChoice)
            setResultText(result)
        }, 200);
        return () => clearTimeout(timer);
    }, [userChoice, computerChoice])


    const redirectToGameBoard = () => {
        props.history.push({
            pathname: "/game-board",
        });
        setUserChoice('');
        setComputerChoice('');
        setResultText('');
    }

    return (
        <div className="play-board">
            <div className="play-board-choice">
                <div className="circular-spot"></div>
                <h2>YOU PICKED</h2>
                <div >
                    <CircularComponent
                        componentName={userChoice}
                    />
                </div>
            </div>

            <div className="play-again visible">
                <h1>{resultText}</h1>
                <button onClick={() => redirectToGameBoard()}>PLAY AGAIN</button>
            </div>

            <div className="play-board-choice">
                <div className="circular-spot"></div>
                    {resultText !== '' ?
                    <div >
                        <h2>THE HOUSE PICKED</h2>
                            <CircularComponent
                                componentName={computerChoice}
                            />
                    </div>
                        : <div></div>
                    }
            </div>
        </div>
    )
}

export default withRouter(PlayAgain);
