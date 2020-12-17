import React, {useContext} from "react";
import "./CircularComponent.css";
import {withRouter} from "react-router-dom";
import paperIcon from "../../assets/svgs/icon-paper.svg";
import scissorIcon from "../../assets/svgs/icon-scissors.svg";
import rockIcon from "../../assets/svgs/icon-rock.svg";
import {gameContext} from "../../context/gameContext";

const CircularComponent = (props) => {
    const {setUserChoice, userChoice} = useContext(gameContext);


    const returnImage = (componentName) => {
        switch (componentName) {
            case "paper":
                return <img src={paperIcon} className={`circleIcon`} alt={"paper"}/>;

            case "scissor":
                return (
                    <img src={scissorIcon} className={`circleIcon`} alt={"scissor"}/>
                );

            case "rock":
                return <img src={rockIcon} className={`circleIcon`} alt={"rock"}/>;
            default:
                return null;
        }
    };

    const directToGameResult = (componentName) => {
        setUserChoice(componentName)
        props.history.push({
            pathname: "/game-board/choice",
        });
    }

    return (
        <div>
            <div className={`circular-component ${props.componentName}`}
                 onClick={() => directToGameResult(props.componentName)}
            >
                <div className={`innerCircle ${props.componentName}`}>
                    {returnImage(props.componentName)}
                </div>
            </div>
        </div>
    );
};

export default withRouter(CircularComponent);
