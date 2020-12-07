import React from 'react';
import './BasicRules.css';
import basicRulesImage from '../../../assets/svgs/image-rules.svg';



const BasicRules = ({rulescard, handleClick}) => {

    return <div className={rulescard ? 'rules-container visible' : 'rules-container hidden'}>
        <div className='card'>
            <div className='card-header'>
                
                <button onClick={handleClick}>X</button>
            </div>
            <div className='card-img'>
                <img src={basicRulesImage} alt='gamerules'/>
            </div>
        </div>
    </div>
}


export default BasicRules;