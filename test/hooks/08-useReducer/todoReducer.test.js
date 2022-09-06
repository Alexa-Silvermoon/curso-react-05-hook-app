import { todoReducer } from "../../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer.js', () => {

    const initialState = [{

        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {} );
        expect( newState).toBe( initialState );

    });

    test('debe agregar un todo', () => {

        const action = {

            type: '[TODO] Add Todo',
            payload: {

                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });

    test('debe eliminar un todo', () => {

        const action = {

            type: '[TODO] Remove Todo',
            payload: {

                id: 1,
                done: false
            }
        };

        const newState = todoReducer( initialState, action ); // se envia 2, se borrara 1
        expect( newState.length ).toBe( 1 ); // regresa 1

    });

    test('debe realizar el toggle del todo', () => {

        const action = {

            type: '[TODO] Toggle Todo',
            payload: 1

        };

        const newState = todoReducer( initialState, action );
        // expect( newState[0].done ).toBe( true ); // se espera que en el initialState el done pase de false a true
        expect( newState[0].done ).toBe( !initialState[0].done ); // se espera que en el initialState el done sea la negacion
        console.log( newState[0].done ); // true
        console.log( initialState[0].done ); // false

    });
});

// pruebas sobre el reducer: https://www.udemy.com/course/react-cero-experto/learn/lecture/19926100#questions
// pruebas sobre el reducer 2: https://www.udemy.com/course/react-cero-experto/learn/lecture/32100680#questions
