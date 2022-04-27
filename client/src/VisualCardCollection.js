import React from "react";
import VisualCard from "./VisualCard"

function VisualCardCollection({ visualCards }){

    const visCard = visualCards.map(visualCard => {
        // console.log(character)
        return <VisualCard key={visualCard.id} visualCard={visualCard} />

    })

    return(
        <div>
            {visCard}
        </div>
    )
}

export default VisualCardCollection;