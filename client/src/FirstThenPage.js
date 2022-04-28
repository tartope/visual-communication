import React, {useEffect, useState} from "react";
import FirstThenCardCollection from "./FirstThenCardCollection"
import FirstThenBoard from "./FirstThenBoard"
import './FirstThenPage.css';


const visualCardsAPI = "/visual_cards"

function FirstThenPage(){

    const [visualCards, setVisualCards] = useState([])
    const [firstVisualCards, setFirstVisualCards] = useState([])

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

    return(
        <div className="first-then-page" >
            <div className="left">
                <FirstThenCardCollection visualCards={visualCards} handleAddToFirstThenBoard={handleAddToFirstThenBoard} />
            </div>
            <div className="right">
                <FirstThenBoard firstVisualCards={firstVisualCards} handleRemoveFromFirstThenBoard={handleRemoveFromFirstThenBoard} />
            </div>
        </div>
    )
}

export default FirstThenPage;


// if CORS error:
// 1. go to Gemfile and add: "gem 'rack-cors'"
// 2. got to confie/cors.rb and add:   Rails.application.config.middleware.insert_before 0, Rack::Cors do
//                                         allow do
//                                             origins '*'

//                                             resource '*',
//                                                 headers: :any,
//                                                 methods: [:get, :post, :put, :patch, :delete, :options, :head]
//                                         end
//                                     end
// 3. double check package.json file for proxy '"proxy": "http://localhost:3000"'
// 4. bundle install again to install new gem 
// 5. if not fixed after step four, delete Gemfile.lock, and bundle install again.