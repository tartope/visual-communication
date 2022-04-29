import React from "react";
import FirstThenCard from "./FirstThenCard";
import './FirstThenBoard.css'; 

function FirstThenBoard({ firstVisualCards, handleRemoveFromFirstThenBoard, handleDeleteVisualCard }){

    const visCard = firstVisualCards.map(firstVisualCard => {
        console.log(firstVisualCard)
        return <FirstThenCard key={firstVisualCard.id} visualCard={firstVisualCard} onClickedCard={handleRemoveFromFirstThenBoard} onClickDelete={handleDeleteVisualCard}/>

    })

    // const visCardOne = firstVisualCards.find(firstVisualCard => item.id === firstVisualCard.id)
    //     return <FirstThenCard key={firstVisualCard.id} visualCard={firstVisualCard} onClickedCard={handleRemoveFromFirstThenBoard} onClickDelete={handleDeleteVisualCard}/>
    // }
    // if (firstVisualCards[0]) {
    //     return <FirstThenCard key={firstVisualCard.id} visualCard={firstVisualCard} onClickedCard={handleRemoveFromFirstThenBoard} onClickDelete={handleDeleteVisualCard}/>
    // }  //alternative code to try to assign cards to first/then columns

    
    // console.log(visCard)
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