import React from "react";

const RecipePage = (props) => {

    const ingredients = props.ingredients.map((ing, i) => {
        return <li key={i}>{ing}</li>
    })

    const instructions = props.instructions.map((step, i) => {
        return <li key={i}>{step}</li>
    })

    return (
        <div className="container">
            <img src="/image-omelette.jpeg" alt="" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div>
                <ul>
                    <li>Total: {props.prepTime.total}</li>
                    <li>Preparation: {props.prepTime.preparation}</li>
                    <li>Cooking: {props.prepTime.cooking}</li>
                </ul>
            </div>
            <div>
                <h2>Ingredients</h2>
                <ul>
                    {ingredients}
                </ul>
            </div>
            <br />
            <div>
                <h2>Instructions</h2>
                <ol>
                    {instructions}
                </ol>
            </div>
            <br />
            <div>
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