import React, { useState } from 'react'

const Calculate = () => {



    let [age, setAge] = useState('')
    let base = 24;
    let multi = age - 2
    let [catAge, setCatAge] = useState('')

    const calculator = () =>{
        if(age === 1){
            setCatAge('15')
        }
        else if(age === 2){
            setCatAge('24')
        }
        else if(age > 2){
            setCatAge(base + 4 * multi )
        }
    
    }


    return (
        <div>
            <h1>Cat Age</h1>
            <input onChange={(event => setAge(event.target.value))}type="text" name="age" placeholder='Cat Age'/>
            <button type='button' onClick={calculator}>Calculate</button>
            <p>Your Cate Age is: {catAge}</p>
        </div>
    )
}

export default Calculate;
