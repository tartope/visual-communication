import React from "react";
import FirstThenCard from "./FirstThenCard";
import './FirstThenBoard.css'; 

function FirstThenBoard({ firstVisualCards }){

    const visCard = firstVisualCards.map(firstVisualCard => {
        console.log(firstVisualCard)
        return <FirstThenCard key={firstVisualCard.id} visualCard={firstVisualCard} />

    })
    console.log(visCard)
    return(
        <div className="first-then-board-container" >
            <h3 className="first-then-board">
                <div>First</div>
                <div>Then</div>
                <div>Last</div>
            </h3>
            { visCard }
        </div>
    )
}

export default FirstThenBoard;