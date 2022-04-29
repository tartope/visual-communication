import React from "react";
import TokenReinforcementCard from "./TokenReinforcementCard"
import './TokenReinforcementCardCollection.css';

function TokenReinforcementCardCollection({ visualCards, handleAddToTokenReinforcementBoard }){

    const visCard = visualCards.map(visualCard => {
        // console.log(character)
        return <TokenReinforcementCard key={visualCard.id} visualCard={visualCard} onClickedCard={handleAddToTokenReinforcementBoard} />

    })

    return(
        <div className="token-reinforcement-card-collection" >
            {visCard}
        </div>
    )
}

export default TokenReinforcementCardCollection;