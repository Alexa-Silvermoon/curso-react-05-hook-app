import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true);

    return(

        <>
            {/* <h1> Counter: <small>{ counter }</small> </h1> */}
            <h1> Counter: <Small value={ counter }></Small> </h1>
            <hr />

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

// memorize: https://www.udemy.com/course/react-cero-experto/learn/lecture/19830222?start=15#questions

// esto del memorize sirve para no volver a dibujar un componenete mientras su prop no cambie,
// es decir el mensaje de console.log( 'me volvi a dibijar <small' ); no se volvera a imprimir en consola
// mientras los prop no cambien, es decir el valor del counter
