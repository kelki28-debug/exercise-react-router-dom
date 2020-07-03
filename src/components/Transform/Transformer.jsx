import React, { useState } from 'react'

const Transformers = () => {

    let [text,setText] = useState('')
    let charB = /[A-Z]/
    let [result,setResult] = useState('')
const transform = () =>{
    
    if(charB.test(text)){
        setResult(text.toLowerCase())
    }
    else if(charB.test(text)){
        setResult(text.toLowerCase())
    }
    else{
        setResult(text.toUpperCase())
    }
}
    return (
        <div>
            <h1>Text Transform</h1>
            <input onChange={(event => setText(event.target.value))}type="text" name="text" id="height" placeholder='Text'/>
            <button onClick={transform} type='button'>Transform</button>
            <p>{result}</p>
        </div>
    )
}

export default Transformers;
