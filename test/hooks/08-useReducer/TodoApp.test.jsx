import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../src/08-useReducer/TodoApp";
import { useTodos } from "../../../src/hooks/useTodos";

jest.mock('../../../src/hooks/useTodos');

describe('pruebas en TodoApp.jsx', () => {

    useTodos.mockReturnValue({

        todos: [

            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: false },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()

    });

    test('debe mostrar el componente correctamente', () => {

        render( <TodoApp/> );
        screen.debug();

        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy(); // input

    });
});

// pruebas en TodoApp: https://www.udemy.com/course/react-cero-experto/learn/lecture/19928134#questions
