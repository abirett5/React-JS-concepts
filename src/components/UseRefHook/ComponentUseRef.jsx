import React, { useState, useEffect, useRef } from 'react'

function ComponentUseRef() {
    const ref = useRef(0)

    console.log(ref)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    function handleClick() {
        // ref.current = ref.current + 1
        ref.current++
        console.log(ref.current)
    }

    return (
        <button onClick={ handleClick }>Click Me!</button>
    )
}

export default ComponentUseRef