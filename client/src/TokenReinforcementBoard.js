import React from "react";
import TokenReinforcementCard from "./TokenReinforcementCard";
import './TokenReinforcementBoard.css'; 

function TokenReinforcementBoard({ tokenVisualCards }){
    console.log(!!tokenVisualCards.length);
    const visCard = tokenVisualCards.map(tokenVisualCard => {
        // console.log(tokenVisualCard) 
        return <TokenReinforcementCard key={tokenVisualCard.id} visualCard={tokenVisualCard} />

    })

    return(
        <div className="token-reinforcement-board-container">
            <div className="token-reinforcement-board-container-one" >
                <h3 className="token-reinforcement-board">
                    I am working for...
                </h3>
                {/* <div className="token-reinforcement-board-square" ></div> */}
                {!!tokenVisualCards.length? visCard : <div className="token-reinforcement-board-square"></div>}
            </div>
            {/* <div className="token-reinforcement-board-visual-cards-container" >
                { visCard }
            </div> */}
        </div>
    )
}

export default TokenReinforcementBoard;