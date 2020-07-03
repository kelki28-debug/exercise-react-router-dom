import React ,{useState} from 'react'


const BMI = () => {

    let [weight,setWeight] = useState('')
    let [height,setHeight] = useState('')
    let [result,setResult] = useState('')


    const bmiCalculator = () =>{
       let newHeight = height/100
        result = weight/newHeight ** 2;
        console.log(result)

        if(result < 17){
            setResult('Busung Lapar')
        }
        else if(result >= 17 && result <= 18.4){
            setResult('Kurus Bat')
        }
        else if(result >= 18.5 && result <= 25){
            setResult('Normal')
        }
        else if(result >= 25.1 && result <= 27){
            setResult('Gemuk')
        }
        else{
            setResult('OverWeight !!!')
        }

      
        
    }

   

    
    return (
        <div>
            <h1>BMI Calculator</h1>
            <input onChange={(event => setHeight(event.target.value))} type="text" name="height" id="height" placeholder='Height'/>
            <input onChange={(event => setWeight(event.target.value))} type="text" name="weight" id="weight" placeholder='Weight'/>
            <button onClick={bmiCalculator} type='button'>Calculate</button>
            <p>your BMI is: {result}</p>
        </div>
    )
}

export default BMI
