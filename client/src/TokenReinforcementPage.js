import React, { useEffect, useState } from "react";
import TokenReinforcementCardCollection from "./TokenReinforcementCardCollection";
import TokenReinforcementBoard from "./TokenReinforcementBoard";
import './TokenReinforcementPage.css';

const visualCardsAPI = "/visual_cards"

function TokenReinforcementPage(){

    const [visualCards, setVisualCards] = useState([])
    const [tokenVisualCards, setTokenVisualCards] = useState([])

    useEffect(()=>{
        fetch(visualCardsAPI)
        .then(response => response.json())
        .then(visualCardsData => {
            // console.log(visualCardsData)
            setVisualCards(visualCardsData)
        })
    }, [])

    function handleAddToTokenReinforcementBoard(item) {
        if (!tokenVisualCards.includes(item)) {
            setTokenVisualCards([...tokenVisualCards, item])
        }
        if (tokenVisualCards.length === 1) {
            setTokenVisualCards([...tokenVisualCards])
        }
    }

    function handleRemoveFromTokenReinforcementBoard(visualCard){
        const removeVisualCard = tokenVisualCards.filter(item => item.id !== visualCard.id)
        setTokenVisualCards(removeVisualCard)
    }

    return(
        <div className="token-reinforcement-page">
            <div className="left">
                <TokenReinforcementCardCollection visualCards={visualCards} handleAddToTokenReinforcementBoard={handleAddToTokenReinforcementBoard} />
            </div>
            <div className="right">
                <TokenReinforcementBoard tokenVisualCards={tokenVisualCards} handleRemoveFromTokenReinforcementBoard={handleRemoveFromTokenReinforcementBoard} />
            </div>
        </div>
    )
}

export default TokenReinforcementPage;