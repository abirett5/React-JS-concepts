import React, { useState, useEffect, useRef } from 'react'

function ComponentUseRef2() {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        // console.log(inputRef)
    })

    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "lightgreen"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "lightgreen"
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3() {
        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "lightgreen"
    }

    return (
        <>
            <div>
                <button onClick={ handleClick1 }>Click Me 1!</button>
                <input type="text" ref={ inputRef1 }/>
            </div>
            <div>
                <button onClick={ handleClick2 }>Click Me 2!</button>
                <input type="text" ref={ inputRef2 }/>
            </div>
            <div>
                <button onClick={ handleClick3 }>Click Me 3!</button>
                <input type="text" ref={ inputRef3 }/>
            </div>
        </>
    )
}

export default ComponentUseRef2