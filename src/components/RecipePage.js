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
                <p>The table below shows nutritional values per serving without the additional fillings</p>
                <table>
                    <tr>
                        <td>Calories</td>
                        <td>{props.nutrition.calories}kcal</td>
                    </tr>
                    <tr>
                        <td>Carbs</td>
                        <td>{props.nutrition.carbs}g</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{props.nutrition.protein}g</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{props.nutrition.fat}g</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default RecipePage