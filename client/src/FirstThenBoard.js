import React from "react";
import FirstThenCard from "./FirstThenCard";
import './FirstThenBoard.css'; 

function FirstThenBoard({ firstVisualCards, handleRemoveFromFirstThenBoard, handleDeleteVisualCard }){

    const visCard = firstVisualCards.map(firstVisualCard => {
        console.log(firstVisualCard)
        return <FirstThenCard key={firstVisualCard.id} visualCard={firstVisualCard} onClickedCard={handleRemoveFromFirstThenBoard} onClickDelete={handleDeleteVisualCard}/>

    })

    return(
        <div className="first-then-board-container" >
            <h3 className="first-then-board">
                <div>First</div>
                <div>Then</div>
                <div>Last</div> 
            </h3>
            <div className="first-then-board-visual-cards-container">
                { visCard }
            </div>
        </div>
    )
}

export default FirstThenBoard;