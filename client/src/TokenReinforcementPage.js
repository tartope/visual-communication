import React, { useEffect, useState } from "react";
import TokenReinforcementCardCollection from "./TokenReinforcementCardCollection";
import TokenReinforcementBoard from "./TokenReinforcementBoard";
import Search from "./Search"
import './TokenReinforcementPage.css';

const visualCardsAPI = "/visual_cards"

function TokenReinforcementPage(){

    const [visualCards, setVisualCards] = useState([]);
    const [tokenVisualCards, setTokenVisualCards] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    function handleDeleteVisualCard(deletedVisualCard){
        // console.log(deletedVisualCard)
        fetch(`${visualCardsAPI}/${deletedVisualCard.id}`, {
        method: 'DELETE'
        });
        const deleteVisualCards = visualCards.filter(item => item.id !== deletedVisualCard.id)
        setVisualCards(deleteVisualCards);
        const deleteTokenVisualCards = tokenVisualCards.filter(item => item.id !== deletedVisualCard.id)
        setTokenVisualCards(deleteTokenVisualCards);
    }

    function handleSearch(searchText){
        setSearchText(searchText);
    }
    const filterVisualCards = visualCards.filter((card)=>{
        const upperSearchText = searchText.toUpperCase();
        return card.name.toUpperCase().includes(upperSearchText);
    })

    return(
        <div>
            <Search handleSearch={handleSearch} />
            <div className="token-reinforcement-page">
                <div className="left">
                    <TokenReinforcementCardCollection visualCards={filterVisualCards} handleAddToTokenReinforcementBoard={handleAddToTokenReinforcementBoard} handleDeleteVisualCard={handleDeleteVisualCard} />
                </div>
                <div className="right">
                    <TokenReinforcementBoard tokenVisualCards={tokenVisualCards} handleRemoveFromTokenReinforcementBoard={handleRemoveFromTokenReinforcementBoard} handleDeleteVisualCard={handleDeleteVisualCard} />
                </div>
            </div>
        </div>
    )
}

export default TokenReinforcementPage;