import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext( UserContext );

    return(

        <>
            <h1>HomePage <small>{ user?.name }</small></h1> {/* user presente en el context? muestrelo despues de oprimir boton LoginPage */}
            <hr />

            {/* <pre> */}
            <pre aria-label="pre">
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
    )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19892172?start=15#questions
// useContext: https://www.udemy.com/course/react-cero-experto/learn/lecture/19901244#questions
