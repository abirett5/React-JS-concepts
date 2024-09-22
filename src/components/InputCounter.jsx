import React, {useState } from 'react'

function InputCounter() {
    const [val, setVal] = useState('')
    const [word, setWord] = useState(0)

    const handleChange = (e) => {
        const data = e.target.value.split(' ')

        if(data.length <= 5) {
            setVal(e.target.value)
            setWord(data.length)

            if(e.target.value == '') {
                setWord(0)
            }
        } else {
            alert('You can type only 5 words')
        }
    }

    return (
        <div>
            <h3>Letters Count: { val.length }</h3>
            <h3>Words Count: { word }/5</h3>
            <textarea value={ val } onChange={ (e) => handleChange(e) }></textarea>
        </div>
    )
}

export default InputCounter