import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) => {

    for( let i = 0; i < iterationNumber; i++ ){

        console.log( 'ahi vamos heavyStuff');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 1000 );
    const [show, setShow] = useState(true);

    // recuerda el resultado de heavyStuff(), de esta forma no tiene que renderizar todo de nuevo, al menos que el valor de counter cambie
    const memorizedValue = useMemo( () => heavyStuff( counter), [ counter ] );

    return(

        <>
            {/* <h1> Counter: <small>{ counter }</small> </h1> */}
            <h1> Counter: <small>{ counter }</small> </h1>
            <hr />

            {/* <h4>{ heavyStuff(1000) }</h4> */}
            {/* <h4>{ heavyStuff( counter ) }</h4> */}
            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={ () => increment() } // si incrementa el counter
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) } // no incrementa counter pero si imprime en consola
            >
                Mostrar / Ocultar { JSON.stringify( show ) }
            </button>
        </>
    )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19832096#questions
// useMemo: https://www.udemy.com/course/react-cero-experto/learn/lecture/19832096?start=225#questions

// esto del memorize sirve para no volver a dibujar un componenete mientras su prop no cambie,
// es decir el mensaje de console.log( 'me volvi a dibijar <small' ); no se volvera a imprimir en consola
// mientras los prop no cambien, es decir el valor del counter
