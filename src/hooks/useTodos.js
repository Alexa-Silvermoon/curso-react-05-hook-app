import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {

    const initialState = [

        // {
        //     id: new Date().getTime(),
        //     description: 'recolectar la piedra del alma',
        //     done: false
        // },
        // {
        //     id: new Date().getTime() * 2,
        //     description: 'recolectar la piedra del poder',
        //     done: false
        // }
    ]
    
    const init = () => {
    
        return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
        // intenta parsear los 'todos' y cargarlos, en caso de no haber nada, devolver arreglo vacio
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => { // se usara para localstorage, el cual guarda los todos

        // console.log( todos );
        localStorage.setItem('todos', JSON.stringify( todos ) ); //localstorage solo guarda strings

    }, [ todos ]); // cuando la dependencia de los todos cambia, el useEffect se dispara
    

    // TODO: imprimir el todo agregado segun la tarea
    const handleNewTodo = ( todo ) => {

        // console.log( { todo } );

        const action = {

            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );

    }
    // handleNewTodo();

    const handleDeleteTodo = ( id ) => {

        // console.log( { id } );

        dispatch({

            type: '[TODO] Remove Todo',
            payload: id

        });
    }

    const handleToggleTodo = ( id ) => {

        // console.log( { id } );

        dispatch({

            type: '[TODO] Toggle Todo',
            payload: id

        });
    }

    return{

        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}

// resolucion de tarea useTodo: https://www.udemy.com/course/react-cero-experto/learn/lecture/32081552#questions
