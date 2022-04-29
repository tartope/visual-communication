import React from "react";

function TokenReinforcementCard({ visualCard, onClickedCard, onClickDelete }){

    return(
        <div className="visual-card" onClick={()=>onClickedCard(visualCard)}>
            <img src={visualCard.image} alt={visualCard.name} />
            <h3> {visualCard.name} </h3>
        
            <div className="visual-card-footer"> 
                {/* <button className='edit'>edit</button> */}
                <button className='delete' onClick={(event) =>{
                    event.stopPropagation()
                    onClickDelete(visualCard)
                }}>delete</button>
            </div>
        </div>
    )
}

export default TokenReinforcementCard;