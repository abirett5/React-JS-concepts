import React, {useState} from 'react'

function Color() {
    const [color, setColor] = useState("Green")
    const [car, setCar] = useState("Corolla")

    return (
        <>
        <h1>My favorite color is {color}! & My car is {car}</h1>
        <button
            type="button"
            onClick={() => {
                setColor("blue")
                setCar("toyota")
            }}
        >Blue</button>
        <button
            type="button"
            onClick={() => setColor("")}
        >Empty</button>
        </>
    )
}

export default Color