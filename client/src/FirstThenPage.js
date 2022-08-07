import React, {useEffect, useState} from "react";
import FirstThenCardCollection from "./FirstThenCardCollection"
import FirstThenBoard from "./FirstThenBoard"
import NewVisualForm from "./NewVisualForm"
import Search from "./Search"
import './FirstThenPage.css';


const visualCardsAPI = "/visual_cards"

function FirstThenPage(){

    const [visualCards, setVisualCards] = useState([]);
    const [firstVisualCards, setFirstVisualCards] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetch(visualCardsAPI)
        .then(response => response.json())
        .then(visualCardsData => {
            // console.log(visualCardsData)
            setVisualCards(visualCardsData)
        })
    }, [])

    function handleAddToFirstThenBoard(item) {
        if (!firstVisualCards.includes(item)) {
            setFirstVisualCards([...firstVisualCards, item])
        }
        if (firstVisualCards.length === 3) {
            setFirstVisualCards([...firstVisualCards])
        }
    }

    function handleRemoveFromFirstThenBoard(visualCard){
        const removeVisualCard = firstVisualCards.filter(item => item.id !== visualCard.id)
        setFirstVisualCards(removeVisualCard)
    }

    function handleDeleteVisualCard(deletedVisualCard){
        // console.log(deletedVisualCard)
        fetch(`${visualCardsAPI}/${deletedVisualCard.id}`, {
        method: 'DELETE'
        });
        const deleteVisualCards = visualCards.filter(item => item.id !== deletedVisualCard.id)
        setVisualCards(deleteVisualCards);
        const deleteFirstVisualCards = firstVisualCards.filter(item => item.id !== deletedVisualCard.id)
        setFirstVisualCards(deleteFirstVisualCards);
    }

    function handleNewVisualCard(visualCard){
        fetch(visualCardsAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(visualCard),
        })
        .then(response => response.json())
        .then(json => {
        setVisualCards([...visualCards, json])
        })
        .catch(err => console.error(err))
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
            <div className="first-then-page" >
                <div className="left">
                    <FirstThenCardCollection visualCards={filterVisualCards} handleAddToFirstThenBoard={handleAddToFirstThenBoard} handleDeleteVisualCard={handleDeleteVisualCard} />
                </div>
                <div className="right">
                    <FirstThenBoard firstVisualCards={firstVisualCards} handleRemoveFromFirstThenBoard={handleRemoveFromFirstThenBoard} handleDeleteVisualCard={handleDeleteVisualCard} />
                    <NewVisualForm handleNewVisualCard={handleNewVisualCard} />
                </div>
            </div>
        </div>
    )
}

export default FirstThenPage;


// if CORS error:
// 1. go to Gemfile and add: "gem 'rack-cors'"
// 2. got to config/initializers/cors.rb and add:   Rails.application.config.middleware.insert_before 0, Rack::Cors do
//                                                      allow do
//                                                          origins '*'

//                                                           resource '*',
//                                                              headers: :any,
//                                                              methods: [:get, :post, :put, :patch, :delete, :options, :head]
//                                                      end
//                                                  end
// 3. double check package.json file for proxy '"proxy": "http://localhost:3000"'
// 4. bundle install again to install new gem 
// 5. if not fixed after step four, delete Gemfile.lock, and bundle install again.