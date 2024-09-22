import React, { useState } from 'react'

function UpdateArrayOfObjectInState() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(2024)
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c, newCar])
        
        setCarYear(2024)
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_element, i) => i !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }

    return (
        <>
            <div>
                <h2>List of Car Objects</h2>
            </div>

            <ul>
                { cars.map((car, index) => <li key={ index } onClick={ () => handleRemoveCar(index) }>{ car.year } { car.make } { car.model }</li>) }
            </ul>

            <input type='number' value={ carYear } onChange={ handleYearChange }/>
            <br/>
            <input type='text' value={ carMake } onChange={ handleMakeChange } placeholder='Enter Car Make'/>
            <br/>
            <input type='text' value={ carModel } onChange={ handleModelChange } placeholder='Enter Car Model'/>
            <br/>

            <button onClick={ handleAddCar }>Add Car</button>
        </>
    )
}

export default UpdateArrayOfObjectInState