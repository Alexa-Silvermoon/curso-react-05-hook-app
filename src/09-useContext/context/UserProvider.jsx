import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {

    id: 123,
    name: 'Alexander Martinez Millan',
    email: 'alexander.marti.mil@gmail.com'
} */


export const UserProvider = ( { children } ) => {

    const [ user, setUser ] = useState();

  return (

    // <UserContext.Provider value={ { hola: 'Mundo', user: user } } >
    <UserContext.Provider value={ { user, setUser } } > {/* setUser hara el dispatch del componenete */}
        { children }
    </UserContext.Provider>
  )
}

// CreateContext y ContextProvider: https://www.udemy.com/course/react-cero-experto/learn/lecture/19900332?start=15#questions
// useContext: https://www.udemy.com/course/react-cero-experto/learn/lecture/19901244#questions
