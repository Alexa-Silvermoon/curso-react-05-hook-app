import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../../src/09-useContext/LoginPage";
import { setUser } from '../../../src/09-useContext/LoginPage';

// TODO: debe mostrar el componente SIN el usuario
// TODO: debe llamar el setUser cuando se hace click en el boton

describe('pruebas en LoginPage.jsx', () => {

    test('debe mostrar el componente SIN el usuario', () => {

        render(

            <UserContext.Provider value={ { user: null } }>
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre'); // aria-label
        // console.log( preTag );
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('debe llamar al setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(

            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage/>
            </UserContext.Provider>
            
        )

        const btnEstablecerUsuario = screen.getByRole('button', { name: 'Establecer Usuario'});
        fireEvent.click( btnEstablecerUsuario );
        // console.log( btnEstablecerUsuario );

        expect( setUserMock ).toHaveBeenCalledWith( { id: 132, name: 'christian', email: 'alexander.marti.mil@gmail.com' } );
        screen.debug();

    });
});

// pruebas de funciones del context: https://www.udemy.com/course/react-cero-experto/learn/lecture/19940596#questions
// pruebas de funciones del context: https://www.udemy.com/course/react-cero-experto/learn/lecture/19940596?start=180#questions
