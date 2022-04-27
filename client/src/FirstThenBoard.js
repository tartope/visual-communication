import React, {useEffect, useState} from "react";
import VisualCardCollection from "./VisualCardCollection"


const visualCardsAPI = "/visual_cards"

function FirstThenBoard(){

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
            <VisualCardCollection visualCards={visualCards} />
        </div>
    )
}

export default FirstThenBoard;


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