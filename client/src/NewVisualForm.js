import React from "react";
import './NewVisualForm.css';

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
            <h4>Customize a visual here:</h4>
            <form className="new-visual-form" onSubmit={handleFormSubmit} >

                <div>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="text" placeholder="Image link" />
                </div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Visual card name" />
                </div>
                
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default NewVisualForm;