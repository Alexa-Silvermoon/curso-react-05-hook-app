import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({

        username: 'SilverMoon',
        email: 'alexander@gmail.com'

    });

    const { username, email } = formState;

    /* const  onInputChange  = ( event ) => {

        console.log( event.target.value )
    } */

    /* const  onInputChange  = ( { target } ) => {

        const { name, value } = target;
        console.log( { name, value } );
    } */

    const  onInputChange  = ( { target } ) => {

        const { name, value } = target;

        setFormState({

            ...formState,
            [ name ]: value // propiedades computadas

        });
    }

    //  en resumen useEffect sirve para estar pendiente de algo en especifico
    useEffect( () => {

        // console.log('useEffect se llamo');

    }, [] ); //arreglo de dependencias vacio, es decir que solo ejecutara una vez

    useEffect( () => {

        // console.log('formState ha cambiado');

    }, [ formState ] ); // dependencia del formState

    useEffect( () => {

        // console.log('email ha cambiado');

    }, [ email ] ); // dependencia del email

  return (

    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input type="text"
        className='form-control' // traido del bootstrap
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ onInputChange }
        
        ></input>

        <input type="email"
        className='form-control mt-2'
        placeholder='tucorreoaqui@gmail.com'
        name='email'
        value={ email }
        onChange={ onInputChange }

        ></input>

        {/* <Message></Message> */}

        {
            ( username === 'SilverMoon' ) && <Message></Message>
            // si eso es positivo significa que usuario ya exsite y se muestra el mensaje,
            // caso contrario no se motrara el mensaje 'usuario ya existe'
        }
    </>
  )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19808968#questions/12238108
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32030006#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19809536#questions
