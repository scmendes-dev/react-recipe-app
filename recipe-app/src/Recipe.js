import React from 'react';


const Recipe = ({title,calories,images,ingredients}) => {
    return (
        <div class="main">
            <h1>{title}</h1>
            <p> Calories: {Math.round(calories/4.184)}</p>
            <img src={images} alt="img"/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe