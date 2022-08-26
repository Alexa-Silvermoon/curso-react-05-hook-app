
import React from 'react'

export const ShowIncrement = React.memo( ({ increment })  => {

    console.log( 'me volvi a generar' );

    return(

        <button
        className='btn btn-primary'
        
        onClick={ () => {

            // increment();
            increment( 5 ); // para incrementar de 5 en 5
        }}
        >
            Incrementar
        </button>
    )
})
// useCallback: https://www.udemy.com/course/react-cero-experto/learn/lecture/19832402#questions
// useCallback con argumentos: https://www.udemy.com/course/react-cero-experto/learn/lecture/32035088?start=15#questions

//useCallback y useMemo se usan cuando se sienta que la aplicacion esta pesada y necesitamos hacerla mas liviana
// y que no recargue las mismas cosas una y otra vez sio no es necesario
