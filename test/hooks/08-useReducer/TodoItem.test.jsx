import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('pruebas en TodoItem.jsx', () => {

    const todo = {

        id: 1,
        description: 'piedra del alma',
        done: false

    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el todo pendiente por completar', () => {

        render( <TodoItem 
            
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
                
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

        const spanElement = screen.getByLabelText('span'); // gracias a aria-label="span" // esta linea se usara para TodoItem.test.jsx
        expect( spanElement.className ).toContain('align-self-center');
        // expect( spanElement.className ).toBe(' align-self-center  '); // OJO: tener cuidado con los espacios del align-self-center en el archivo TodoItem.jsx
        screen.debug();

    });

    test('debe de mostrar el todo completado', () => {

        todo.done = true;

        render( <TodoItem 
            
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
                
            />
        );

        const spanElement = screen.getByLabelText('span'); // gracias a aria-label="span" // esta linea se usara para TodoItem.test.jsx
        expect( spanElement.className ).toContain('align-self-center');

    });

    test('span debe llamar el ToggleTodo cuando se hace click', () => {

        render( <TodoItem 
            
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
                
            />
        );

        const spanElement = screen.getByLabelText('span'); // gracias a aria-label="span" // esta linea se usara para TodoItem.test.jsx
        fireEvent.click( spanElement );

        // expect( onToggleTodoMock ).toHaveBeenCalled(); // espero que al hacer click haya sido llamado
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id ); // espero que al hacer click haya sido llamado con el todo.id
    });

    test('button debe llamar el deleteTodo', () => {

        render( <TodoItem 
            
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
                
            />
        );

        const btnBorrar = screen.getByRole( 'button', { name: 'Borrar' }); // gracias a aria-label="span" // esta linea se usara para TodoItem.test.jsx
        fireEvent.click( btnBorrar );

        // expect( onToggleTodoMock ).toHaveBeenCalled(); // espero que al hacer click haya sido llamado
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id ); // espero que al hacer click haya sido llamado con el todo.id
    });
});

// pruebas en TodoItem.jsx https://www.udemy.com/course/react-cero-experto/learn/lecture/19926964#questions
// pruebas de eventos en TodoItem: https://www.udemy.com/course/react-cero-experto/learn/lecture/32619588?start=30#questions
