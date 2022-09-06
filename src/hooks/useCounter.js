
import { useState } from 'react'

export const useCounter = ( initialValue = 1 ) => {

    const [ counter, setCounter ] = useState( initialValue );

    const increment = ( value = 1 ) => {

        // setCounter( counter + value );
        setCounter( ( current ) => current + value ); // para pruebas en useCounter.test.js
    }

    const decrement = ( value = 1 ) => {

        if ( counter === 0) return; // no deja que se baje de 0, genial para carrito de compras

        // setCounter( counter - value );
        setCounter( ( current ) => current - value ); // para pruebas en useCounter.test.js
    }

    const reset = () => {

        setCounter( initialValue );
    }

    return{

        counter,
        increment,
        decrement,
        reset
    }
}

// useCounter - customHook:
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19808168#questions/11367064
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32029600#questions