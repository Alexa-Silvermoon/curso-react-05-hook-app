import { render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { HomePage } from "../../../src/09-useContext/HomePage";

describe('pruebas en HomePage.jsx', () => {

    const user = {

        id: 1,
        name: 'Alexander'
    }

    test('debe mostrar el componente SIN el usuario', () => {

        render( 

            <UserContext.Provider value={ { user: null } } >
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        console.log( preTag );
        expect( preTag.innerHTML ).toBe( 'null' );

        screen.debug();
    });

    test('debe mostrar el componente CON el usuario', () => {

        render( 

            <UserContext.Provider value={ { user: user } } >
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        console.log( preTag );
        expect( preTag.innerHTML ).toContain( user.id.toString() ); // en este caso mi id esta como un string desde HomePage.jsx
        expect( preTag.innerHTML ).toContain( user.name );

        screen.debug();
    });

});

// pruebas en useContext: https://www.udemy.com/course/react-cero-experto/learn/lecture/19939898#questions
