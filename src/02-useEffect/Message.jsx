import { useEffect, useState } from "react"

export const Message = () => {

    /* useEffect(() => {

        console.log( 'mensaje montado' ); // ( username === 'SilverMoon' ) && <Message></Message>

        window.addEventListener( 'mousemove', ( event ) => {

            console.log( 'mouse eje x: ', event.x, ' mouse eje y: ', event.y );

        });
    
      return () => {

        console.log( 'mensaje desmontado' ); // ( username === 'SilverMoon' ) && <Message></Message>

      }

    }, []); */

    const [coords, setCoords] = useState( { x: 0, y:0 } ); // inicializacion del state para cordenadas del mouse

    const onMouseMove = ( { x, y } ) => {

        // const coords = { x, y };

        setCoords( { x, y } );

    }

    useEffect(() => {

        console.log( 'mensaje montado' ); // ( username === 'SilverMoon' ) && <Message></Message>

        window.addEventListener( 'mousemove', onMouseMove ); // evneto para cordenadas del mouse
        
        return () => {
            
            window.addEventListener( 'mousemove', onMouseMove );

        }

    }, []);
    
  return (

    <>
        <h3>usuario ya exsite</h3>
        { JSON.stringify( coords  )} {/* muetra las cordenadas del mouse en el html */}
    </>
  )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19809536#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19810012#questions
