import React, {createContext, useState} from "react";

export const gameContext = createContext();

const GameProvider = ({children}) => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [userScore, setUserScore] = useState(0)
    const choices = ['rock', 'paper', 'scissor']

    //get computer random option
    const randomNumber = Math.floor(Math.random() * choices.length)
    const getComputerChoice = () => {
        setComputerChoice(
            choices[randomNumber]
        )
    }
    const getUserChoice = (choice) => {
        setUserChoice(choice)
    }

//Calculate result of game -------------------------------------

    const getGameResultText = [
        {text: 'YOU TIED'},
        {text: 'YOU WIN'},
        {text: 'YOU LOST'}
    ]

    const winningPossibilities = {
        rock: {
            prevailOver: 'scissor'
        },
        paper: {
            prevailOver: 'rock'
        },
        scissor: {
            prevailOver: 'paper'
        },
    }

    const getWinner = (userChoice, computerChoice) => {
        console.log("User Cohice:    " + userChoice + "   Computer Choice: " + computerChoice)
        if (userChoice === computerChoice) {
            setUserScore(userScore)
            return getGameResultText[0].text
        } else if (winningPossibilities[userChoice].prevailOver.includes(computerChoice)) {
            setUserScore(userScore + 1)
            return getGameResultText[1].text
        } else {
            setUserScore(userScore)
            return getGameResultText[2].text
        }
    }


    //
    // const getResultText = (userChoice, computerChoice) => {
    //     const gameResultChoices = [
    //         {
    //             'result': 'winner',
    //             'text': 'YOU WIN',
    //         },
    //         {
    //             'result': 'loser',
    //             'text': 'YOU LOSE',
    //         },
    //         {
    //             'result': 'tie',
    //             'text': 'YOU TIED',
    //         }
    //     ]
    // }
    //

//
// //Calculate result of game -------------------------------------
//
//     const winningPossibilities = {
//         rock: {prevailOver: 'scissor'},
//         paper: {prevailOver: 'rock'},
//         scissor: {prevailOver: 'paper'},
//     }
//
//     const getGameResult = (userChoice, computerChoice) => {
//
//         if (userChoice === computerChoice) {
//             return {
//                 'result': 'tie',
//                 'text': 'YOU TIED'
//             }
//         } else if (winningPossibilities[userChoice].prevailOver.includes(computerChoice)) {
//             return {
//                 'result': 'winner',
//                 'text': 'YOU WIN'
//             }
//         } else {
//             return {
//                 'result': 'loser',
//                 'text': 'YOU LOSE'
//             }
//         }
//
//     }

// get text for Winner's -------------------------------------
//     const rules = {
//         rock: 'Rock crushes scissors',
//         paper: 'Paper covers rock',
//         scissor: 'Scissors cuts paper'
//     }
//     const getWinnerText = (victorChoice) => {
//         return rules[victorChoice];
//     }
//
//
//     // calculate  Winner's score -------------------------------------
//     const calculateGameScore = (userScore, gameResult) => {
//         switch (gameResult.result) {
//             case 'win':
//                 return userScore + 1;
//
//             case 'lose':
//                 if (userScore > 0) {
//                     return userScore;
//                 } else {
//                     return userScore;
//                 }
//             case 'tie':
//                 return userScore;
//
//             default:
//                 return userScore;
//         }
//     }


    return (
        <gameContext.Provider
            value={{
                userChoice,
                computerChoice,
                setUserChoice,
                setComputerChoice,
                randomNumber,
                getComputerChoice,
                getUserChoice,
                userScore,
                getWinner
            }}
        >
            {children}
        </gameContext.Provider>
    )
}

export default GameProvider;
