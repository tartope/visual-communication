import React, { useEffect, useState } from "react";
import TokenReinforcementCardCollection from "./TokenReinforcementCardCollection"

const visualCardsAPI = "/visual_cards"

function TokenReinforcementBoard(){

    const [visualCards, setVisualCards] = useState([])

    useEffect(()=>{
        fetch(visualCardsAPI)
        .then(response => response.json())
        .then(visualCardsData => {
            // console.log(visualCardsData)
            setVisualCards(visualCardsData)
        })
    }, [])

    return(
        <div>
            <TokenReinforcementCardCollection visualCards={visualCards} />
        </div>
    )
}

export default TokenReinforcementBoard;