import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ( { author, quote } ) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState( { width: 0, height: 0 } );

    useLayoutEffect(() => {

        // console.log( pRef.current.getBoundingClientRect() ); //muestra el tamaño del width ( la caja de las quotes)
        const { height, width } = pRef.current.getBoundingClientRect(); //muestra el tamaño del width ( la caja de las quotes)

        setBoxSize( { height, width } );

    }, [quote]);

    return(

        <>
            <blockquote className="blockquote text-end"
            style={ { display: 'flex' } }>{/* cuadrito del quote se adapta al tamnaño del texto del quote */}
                <p ref={ pRef } className="mb-1">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>

            <code>{ JSON.stringify( boxSize ) }</code>
        </>

    )

    /* 
    return(

        <blockquote className="blockquote text-end">
            <p className="mb-1">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
    ) 
    */

}
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32033580#questions

// useLayoutEffect: https://www.udemy.com/course/react-cero-experto/learn/lecture/19829382#questions
