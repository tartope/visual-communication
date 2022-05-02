import React, {useState} from "react";
import TokenReinforcementCard from "./TokenReinforcementCard";
import { BsStarFill, BsStar } from "react-icons/bs";
import './TokenReinforcementBoard.css'; 

function TokenReinforcementBoard({ tokenVisualCards, handleRemoveFromTokenReinforcementBoard, handleDeleteVisualCard }){
    // console.log(!!tokenVisualCards.length);

    const [emptyStar, setEmptyStar] = useState(null)
    const [filledStar, setFilledStar] = useState(true)

    const visCard = tokenVisualCards.map(tokenVisualCard => {
        // console.log(tokenVisualCard) 
        return <TokenReinforcementCard key={tokenVisualCard.id} visualCard={tokenVisualCard} onClickedCard={handleRemoveFromTokenReinforcementBoard} onClickDelete={handleDeleteVisualCard} />

    })

    function toggleStar(){
        if(emptyStar === true){
        setEmptyStar(emptyStar)
        }else{
            
        }
    }

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
            <div className="star">
                <BsStar size={120} onClick={()=>console.log('click1')}/> <BsStar size={120} onClick={()=>console.log('click2')}/> <BsStar size={120} onClick={()=>console.log('click3')}/> <BsStar size={120} onClick={()=>console.log('click4')}/> <BsStar size={120} onClick={()=>console.log('click5')}/>
            </div>
        </div>
    )
}

export default TokenReinforcementBoard;

// per console, '!!tokenVisualCards.length' is false. so ternary: if false put 'visCard', else put blank div.