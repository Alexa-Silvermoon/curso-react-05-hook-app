import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // esta funcion no esta cambiando, react la mantiene en el mismo espacio en memoria:
    const incrementFather = useCallback(

    //   () {
      ( value ) => { // para lo de incrementar de 5 en 5

        console.log( 'setCounter()' );

        // setCounter( counter + 1); // no funciona apropiadamente
        // setCounter( ( value ) => value + 1 ); // si funciona, toma la funcion actual de state y le suma 1
        setCounter( ( counter ) => counter + value ); // para lo de incrementar de 5 en 5

      },
      [],
    )

    useEffect(() => {

        // incrementFather(); // tener cuidado con combinar useEffect con useCallback

    }, [incrementFather]);
    

    /* const incrementFather = () => {

        setCounter( counter + 1 );

    } */

    return(

        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather }></ShowIncrement>
        </>
    )
}

// useCallback: https://www.udemy.com/course/react-cero-experto/learn/lecture/19832402#questions
// useCallback con argumentos: https://www.udemy.com/course/react-cero-experto/learn/lecture/32035088?start=15#questions

//useCallback y useMemo se usan cuando se sienta que la aplicacion esta pesada y necesitamos hacerla mas liviana
// y que no recargue las mismas cosas una y otra vez sio no es necesario
