import { UserProvider } from "./context/UserProvider"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {

    return(

        <UserProvider>
            {/* <h1>MainApp</h1> */}
            {/* forma incorrecta ya que refresca el navegador: */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/login">Login</a> */}

            {/* forma correcta ya que NO refresca el navegador, para este caso, link vale como anchor tag */}
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link> */}

            <Navbar></Navbar>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage></HomePage> }></Route>
                <Route path="login" element={ <LoginPage></LoginPage> }></Route>
                <Route path="about" element={ <AboutPage></AboutPage> }></Route>

                {/* <Route path="/*" element={ <HomePage></HomePage> }></Route> en caso de buscar en el navegador una page que no existe 404 */}

                <Route path="/*" element={ <Navigate to="/"></Navigate> }></Route>
                {/* en caso de buscar en el navegador una page que no existe ir al home */}
                
            </Routes>
        </UserProvider>
    )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19892172?start=15#questions
// configuracion de path https://www.udemy.com/course/react-cero-experto/learn/lecture/19893534#questions
// link y navbar: https://www.udemy.com/course/react-cero-experto/learn/lecture/19900260?start=75#questions
// CreateContext y ContextProvider: https://www.udemy.com/course/react-cero-experto/learn/lecture/19900332?start=15#questions
// useContext: https://www.udemy.com/course/react-cero-experto/learn/lecture/19901244#questions
