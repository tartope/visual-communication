import React from "react";
// import './About.css';

function NewVisualForm({ handleNewVisualCard }){

    function handleFormSubmit(event){
        event.preventDefault()
        
        const image = event.target['image'].value
        const name = event.target['name'].value
        
        const newVisualCard = {
            image: image,
            name: name
        };
        
        handleNewVisualCard(newVisualCard);
        
        event.target.reset();
    }

    return(
        <div className="new-visual-form-container">
            <form className="new-visual-form" onSubmit={handleFormSubmit} >

                    <div>
                        <label htmlFor="image">Image</label>
                        <input id="image" type="text" placeholder="Visual Image" />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Visual Name" />
                    </div>
                    
                    <input type="submit" value="Add Visual" />
                </form>
            
        </div>
    )
}

export default NewVisualForm;