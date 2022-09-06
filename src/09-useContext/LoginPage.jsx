import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user, setUser }  = useContext( UserContext );
    console.log( user );

    return(

        <>
            <h1>LoginPage</h1>
            <hr />

            {/* <pre> */}
            <pre aria-label="pre">
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button className="btn btn-primary"
            onClick={ () => setUser( { id: 132, name: 'christian', email: 'alexander.marti.mil@gmail.com' } ) } >
                Establecer Usuario
            </button>
        </>
    )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19892172?start=15#questions
// useContext: https://www.udemy.com/course/react-cero-experto/learn/lecture/19901244#questions
