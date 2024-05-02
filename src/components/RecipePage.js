import React from "react";

const RecipePage = (props) => {

    const ingredients = props.ingredients.map((ing, i) => {
        return <li key={i}>{ing}</li>
    })

    const instructions = props.instructions.map((step, i) => {
        return <li key={i}><strong>{step.step}</strong>: {step.detailed}</li>
    })

    return (
        <div className="outer-container">
            <img src="/image-omelette.jpeg" alt="" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div className="inner-container prep-time">
                <h3>Preparation time</h3>
                <ul>
                    <li><strong>Total</strong>: {props.prepTime.total}</li>
                    <li><strong>Preparation</strong>: {props.prepTime.preparation}</li>
                    <li><strong>Cooking</strong>: {props.prepTime.cooking}</li>
                </ul>
            </div>
            <div className="inner-container">
                <h2>Ingredients</h2>
                <ul>
                    {ingredients}
                </ul>
            </div>
            <hr />
            <div className="inner-container">
                <h2>Instructions</h2>
                <ol>
                    {instructions}
                </ol>
            </div>
            <hr />
            <div className="inner-container">
                <h2>Nutrition</h2>
                <p className="nutrition-description">The table below shows nutritional values per serving without the additional fillings</p>
                <div className="table">
                    <div className="row">
                        <div className="cell">Calories</div>
                        <div className="cell measurement">{props.nutrition.calories}kcal</div>
                    </div>
                    <div className="row">
                        <div className="cell">Carbs</div>
                        <div className="cell measurement">{props.nutrition.carbs}g</div>
                    </div>
                    <div className="row">
                        <div className="cell">Protein</div>
                        <div className="cell measurement">{props.nutrition.protein}g</div>
                    </div>
                    <div className="row">
                        <div className="cell">Fat</div>
                        <div className="cell measurement">{props.nutrition.fat}g</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipePage