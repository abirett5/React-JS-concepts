
function ButtonEvent() {
    // let count = 0

    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++
    //         console.log(`Hey ${name}! You clicked the button ${count} times`)
    //     } else {
    //         console.log(`Hey ${name}! Stop clicking the button`)
    //     }
    // }

    const handleClick = (e) => {
        e.target.textContent = "Clicked"
        e.target.style.backgroundColor = "Green"
    }

    return (
        // <button onClick={() => handleClick("Abir")}>Click</button>
        <button onClick={(e) => handleClick(e)}>Click Me</button>
    )
}

export default ButtonEvent