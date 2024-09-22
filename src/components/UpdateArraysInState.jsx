import React, { useState } from "react"

function UpdateArraysInState() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ""

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_element, i) => i !== index))
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                { foods.map((food, index) => <li key={ index } onClick={ () => handleRemoveFood(index) }>{ food }</li>) }
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food name"/>
            <button onClick={ handleAddFood }>Add Food</button>
        </div>
    )
}

export default UpdateArraysInState