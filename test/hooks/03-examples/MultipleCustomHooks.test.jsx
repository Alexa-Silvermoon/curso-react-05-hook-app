import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks';
import { useCounter } from "../../../src/hooks/useCounter";
import { useFetch } from '../../../src/hooks/useFetch';

jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter');

describe('pruebas en MultipleCustomHooks.jsx', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({

        counter: 1,
        increment: mockIncrement

    });

    beforeEach( () => {

        jest.clearAllMocks(); // limpiar cada una de las pruebas

    });

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({

            data: null,
            isLoading: true,
            hasError: null

        });

        render( <MultipleCustomHooks/> );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText('BreakingBad Quotes - By Alexander Martinez Millan') );

        const nextButton = screen.getByRole( 'button', { name: 'Siguiente Nota' } );
        // console.log( nextButton.disabled ); // false
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();

    });

    test('debe de mostrar un Quote', () => { // se engaña al useFetch gracias al jest.mock

        useFetch.mockReturnValue({

            data: [ { author: 'Alexander', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null

        });

        render( <MultipleCustomHooks/> );
        // screen.debug();
        expect( screen.getByText('hola mundo') ).toBeTruthy();
        expect( screen.getByText('Alexander') ).toBeTruthy();

        const nextButton = screen.getByRole( 'button', { name: 'Siguiente Nota' } );
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('debe llamar la funcion de incrementar', () => {

        const { result } = renderHook( () => useCounter(1) );
        const { increment } = result.current;

        useFetch.mockReturnValue({

            data: [ { author: 'Alexander', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null

        });

        render( <MultipleCustomHooks/> );
        const nextButton = screen.getByRole( 'button', { name: 'Siguiente Nota' } );
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();
    })
});
// pruebas con multiples hooks simultanemos: https://www.udemy.com/course/react-cero-experto/learn/lecture/19925010#questions
// Evaluar respuesta del useFetch con jest.mock(): https://www.udemy.com/course/react-cero-experto/learn/lecture/32100452#questions
