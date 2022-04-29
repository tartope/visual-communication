import React from "react";
import FirstThenCard from "./FirstThenCard"
import './FirstThenCardCollection.css';

function FirstThenCardCollection({ visualCards, handleAddToFirstThenBoard, handleDeleteVisualCard }){

    const visCard = visualCards.map(visualCard => {
        // console.log(character)
        return <FirstThenCard key={visualCard.id} visualCard={visualCard} onClickedCard={handleAddToFirstThenBoard} onClickDelete={handleDeleteVisualCard} />

    })

    return(
        <div className="first-then-card-collection" >
            {visCard}
        </div>
    )
}

export default FirstThenCardCollection;