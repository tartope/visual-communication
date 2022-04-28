import React from "react";
import FirstThenCard from "./FirstThenCard"

function FirstThenCardCollection({ visualCards }){

    const visCard = visualCards.map(visualCard => {
        // console.log(character)
        return <FirstThenCard key={visualCard.id} visualCard={visualCard} />

    })

    return(
        <div>
            {visCard}
        </div>
    )
}

export default FirstThenCardCollection;