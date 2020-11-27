import React from "react";
import "./CircularComponent.css";

//images
import paperIcon from "../../assets/svgs/icon-paper.svg";
import scissorIcon from "../../assets/svgs/icon-scissors.svg";
import rockIcon from "../../assets/svgs/icon-rock.svg";
// import spockIcon from "../../assets/svgs/icon-spock.svg";
// import lizardIcon from "../../assets/svgs/icon-lizard.svg";

const CircularComponent = ({ componentName }) => {
  const returnImage = (componentName) => {
    switch (componentName) {
      case "paper":
        return <img src={paperIcon} className={`circleIcon`} alt={"paper"} />;

      case "scissor":  
        return (
          <img src={scissorIcon} className={`circleIcon`} alt={"scissor"} />
        );

      case "rock":
        return <img src={rockIcon} className={`circleIcon`} alt={"rock"} />;
      default:
        return null;
    }
  };
  return (
    <div className={`circularcomponent ${componentName}`}>
      <div className={`innerCircle ${componentName}`}>
        {returnImage(componentName)}
      </div>
    </div>
    // <div className={`circularcomponent ${componentName}`}>
    //   {returnImage(componentName)}
    // </div>
  );
};

export default CircularComponent;
