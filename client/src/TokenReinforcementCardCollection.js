import React from "react";
import TokenReinforcementCard from "./TokenReinforcementCard"

function TokenReinforcementCardCollection({ visualCards }){

    const visCard = visualCards.map(visualCard => {
        // console.log(character)
        return <TokenReinforcementCard key={visualCard.id} visualCard={visualCard} />

    })

    return(
        <div>
            {visCard}
        </div>
    )
}

export default TokenReinforcementCardCollection;