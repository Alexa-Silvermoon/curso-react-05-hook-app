import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({

        username: '',
        email: '',
        password: ''

    });

    // const { username, email, password } = formState;

    /* const [formState, setFormState] = useState({

        username: '',
        email: '',
        password: ''

    });

    const { username, email, password } = formState;

    // const  onInputChange  = ( event ) => {

    //     console.log( event.target.value )
    // }

    // const  onInputChange  = ( { target } ) => {

    //     const { name, value } = target;
    //     console.log( { name, value } );
    // }

    const  onInputChange  = ( { target } ) => {

        const { name, value } = target;

        setFormState({

            ...formState,
            [ name ]: value // propiedades computadas

        });
    } */
    // los 3 bloques de codigo de arriba se usan en hooks > useForm.js

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
        <h1>Formulario con custom hook</h1>

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

        <input type="password"
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={ password }
        onChange={ onInputChange }

        ></input>

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19824468#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32031602#questions
