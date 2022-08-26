import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log( inputRef );

    const onClick = () => {

        // document.querySelector('input').select(); // deoues de oprimir el boton Set Focus, todo lo del input se selecciona
        console.log( inputRef );
        inputRef.current.select();
    }

    return(

        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef } 
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control">
            </input>

            <button
                className="btn btn-primary mt-2"
                onClick={ onClick }
                
                >Set Focus
            </button>

        </>

    )
}
// usefer: https://www.udemy.com/course/react-cero-experto/learn/lecture/19827650#questions