import { render, screen } from "@testing-library/react";
import { MainApp } from "../../../src/09-useContext/MainApp";
import { MemoryRouter } from 'react-router-dom'

describe('pruebas MainApp.jsx', () => {

    test('debe de mostrar el HomePage', () => {

        render(

            <MemoryRouter> {/* necesario para probar BrowserRouter con userProvider */}
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();
        screen.debug();
    });

    test('debe de mostrar el LoginPage', () => {

        render(

            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
        screen.debug();
    });

    test('debe de mostrar el AboutPage', () => {

        render(

            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy();
        screen.debug();
    });
});

// pruebas generales en apps con Router: https://www.udemy.com/course/react-cero-experto/learn/lecture/19941240#questions
