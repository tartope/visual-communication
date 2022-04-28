import React from "react";
import './FirstThenCard.css';

function FirstThenCard({ visualCard }){

    return(
        <div className="visual-card" >
            <img src={visualCard.image} alt={visualCard.name} />
            <h3> {visualCard.name} </h3>
        
            <div className="visual-card-footer"> 
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
            </div>
        </div>
    )
}

export default FirstThenCard;