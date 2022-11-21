import React, { useState } from 'react';

export const Numbox = () => {

    const [result , setResult] = useState(0);
    const [numbers , setNumber] = useState({
        num1: 0,
        num2: 0
    });

const num1 = numbers.num1;
const num2 = numbers.num2;

    const handleChange = (e) => {
        setNumber({...numbers, [e.target.name]: Number(e.target.value)});
        return numbers;
      }

      function subtract () {
          setResult(num1-num2)
          return result ;
      }
      function addition () {
          setResult(num1+num2);
          return result ;
      }
      function multiply () {
          setResult(num1*num2)
          return result ;
      }
      function division () {
          setResult(num1/num2);
          return result ;
      }

    return (
        <>
        <div>
            <input type="number" name="num1" onChange={handleChange}/>
            <input type="number" name="num2" onChange={handleChange}/>
            <span>=</span>
            <span> {result}</span>
        </div>
            <div>
            <button onClick={addition}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>x</button>
            <button onClick={division}>/</button>
        </div>
        </>    
    );


}
