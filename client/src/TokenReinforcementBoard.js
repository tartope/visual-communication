import React, {useState} from "react";
import TokenReinforcementCard from "./TokenReinforcementCard";
import { BsStarFill } from "react-icons/bs";
import './TokenReinforcementBoard.css'; 

function TokenReinforcementBoard({ tokenVisualCards, handleRemoveFromTokenReinforcementBoard, handleDeleteVisualCard }){
    // console.log(!!tokenVisualCards.length);

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const visCard = tokenVisualCards.map(tokenVisualCard => { 
        return <TokenReinforcementCard key={tokenVisualCard.id} visualCard={tokenVisualCard} onClickedCard={handleRemoveFromTokenReinforcementBoard} onClickDelete={handleDeleteVisualCard} />
    })

    return(
        <div className="token-reinforcement-board-container">
            <div className="token-reinforcement-board-container-one" >
                <h3 className="token-reinforcement-board">
                    I am working for...
                </h3>
                {/* <div className="token-reinforcement-board-square" ></div> */}
                {!!tokenVisualCards.length? visCard : <div className="token-reinforcement-board-square"></div>}
            </div>
            {/* <div className="token-reinforcement-board-visual-cards-container" >
                { visCard }
            </div> */}
            <div className="stars">
                {[...Array(5)].map((star, i) =>{
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue}
                                onClick={()=> setRating(ratingValue)}
                            />
                            <BsStarFill 
                                className="star" 
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                                size={120} 
                                onMouseEnter={()=> setHover(ratingValue)}
                                onMouseLeave={()=> setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
        </div>
    )
}

export default TokenReinforcementBoard;

// per console, '!!tokenVisualCards.length' is false. so ternary: if false put 'visCard', else put blank div.

// instead of: {/* <BsStar size={120} onClick={()=>console.log('click1')}/> <BsStar size={120} onClick={()=>console.log('click2')}/> <BsStar size={120} onClick={()=>console.log('click3')}/> <BsStar size={120} onClick={()=>console.log('click4')}/> <BsStar size={120} onClick={()=>console.log('click5')}/> */}, can map over for multiple stars.

// stars: npm install react-icons, choose a reat icon and import, setState of icon, add icon <Child />, can use .map for more than one, create rating variable, add click event to input, add color and mouseover to child, adjust CSS to preferences.