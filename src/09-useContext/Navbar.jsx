import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

  return (

    /* <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
    </> */

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3"> {/* redondear los bordes */}
        <div className="container-fluid">

            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    {/* <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li> */}
                    <NavLink
                        className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/"
                        >
                            Home
                    </NavLink>

                    <NavLink
                        className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/about"
                        >
                            About
                    </NavLink>

                    <NavLink
                        className={ ( { isActive } ) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/login"
                        >
                            Login
                    </NavLink>
                </ul>
            </div>
            
        </div>
    </nav>

  )
}

// link t navbar: https://www.udemy.com/course/react-cero-experto/learn/lecture/19900260?start=75#questions
// NavLink:  https://www.udemy.com/course/react-cero-experto/learn/lecture/32088694#questions
