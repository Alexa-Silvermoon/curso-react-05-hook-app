

import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {


    const { counter, increment, decrement, reset  } = useCounter();

  return (

    <>

        <h1>counter with hook: { counter }</h1>
        <hr />

        {/* <button className='btn btn-primary' onClick={ increment }>+1</button>
        <button className='btn btn-primary' onClick={ decrement }>-1</button>
        <button className='btn btn-primary' onClick={ reset }> resetear </button> */}

        <button className='btn btn-primary' onClick={ () => increment(2) }> aumentar </button> {/* inicrementar de 2 en 2 */}
        <button className='btn btn-primary' onClick={ () => decrement(2) }> disminuir </button> {/* decrementar de 2 en 2 */}
        <button className='btn btn-primary' onClick={ reset }> resetear </button>

    </>
  )
}

// useCounter - customHook:
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19808168#questions/11367064
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32029600#questions