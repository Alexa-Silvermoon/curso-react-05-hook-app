import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter.js', () => {

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(1);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });

    test('debe generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100)
    });

    test('debe incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {

            increment(); // 1
            increment(2); // 2

        });

        expect( result.current.counter).toBe(4);
        // se espera 4 ya que 1 que esta en el archivo useCounter.js + 3 en estos increment()

    });

    test('debe decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(15) );
        const { counter, decrement } = result.current;

        act( () => {

            decrement(); // - 1
            decrement(2); // -2

        });

        expect( result.current.counter).toBe(12);
        // se espera 4 ya que 1 que esta en el archivo useCounter.js + 3 en estos increment()

    });

    test('debe resetear el contador y ponerlo en 1', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, reset } = result.current;

        act( () => {

            reset();

        });

        expect( result.current.counter).toBe(1); // initialValur = 1 en useCounter.js

    });
});
// pruebas https://www.udemy.com/course/react-cero-experto/learn/lecture/19921744#questions/18140038
// pruebas con act https://www.udemy.com/course/react-cero-experto/learn/lecture/19922652#questions
// pruebas en useForm: https://www.udemy.com/course/react-cero-experto/learn/lecture/19923864?start=375#questions
