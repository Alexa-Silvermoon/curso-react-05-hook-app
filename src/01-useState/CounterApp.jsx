import { useState } from "react"


export const CounterApp = () => {

    // const [counter, setCounter] = useState(10);
    const [ state, setCounter] = useState({

        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

  return (

    <>

    <h1>Counter1: { counter1 }</h1>
    <h1>Counter2: { counter2 }</h1>
    <h1>Counter3: { counter3 }</h1>

    <hr/>

    <button className="btn" onClick={ () => setCounter( {

        ...state,
        counter1: counter1 + 1,
        counter2: counter2 + 1,
        counter3: counter3 + 1,

    } )} > +1 </button>
    
    </>
  )
}

// sumar multiples cosas en el hook counter, setCounter
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19807418?start=15#questions


/* 

// otra opcion:

import React, { useState } from 'react';
 
import './counter-app.css';
 
export const CounterApp = () => {
  const [{counter1, counter2}, setCount] = useState({counter1: 10, counter2: 20});
  const handlerAdd = () => setCount(counters => ({...counters, counter1: counter1 + 1}));
 
  return(
    <>
      <h2>Counter1 { counter1 }</h2>
      <h2>Counter2 { counter2 }</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handlerAdd}
      >
        +1
      </button>
    </>
  );
}

*/