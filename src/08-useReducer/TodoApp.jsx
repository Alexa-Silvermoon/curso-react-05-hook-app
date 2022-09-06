import { useEffect, useReducer } from "react"
import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

// const initialState = [

//     // {
//     //     id: new Date().getTime(),
//     //     description: 'recolectar la piedra del alma',
//     //     done: false
//     // },
//     // {
//     //     id: new Date().getTime() * 2,
//     //     description: 'recolectar la piedra del poder',
//     //     done: false
//     // }
// ]

// const init = () => {

//     return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
//     // intenta parsear los 'todos' y cargarlos, en caso de no haber nada, devolver arreglo vacio
// }

export const TodoApp = () => {

    /* TODO: 
    1- crear custom hook llamado useTodos y tendra:
    todos, handleNewTodo, handleDeleteTodo, handleToggleTodo
    
    2- initialState, useEffect y init deberan ir dentro del archivo del custom hook useTodo

    3- crear contador de todos completados y pendientes, ambos en el useTodo
    */

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    // const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    // todoReducer: para crear o eliminar todos
    // initialState: el estado inicial de mi arreglo de todos
    // init: para cargar los todos almecenados en localstorage

    // useEffect(() => { // se usara para localstorage, el cual guarda los todos

    //     // console.log( todos );
    //     localStorage.setItem('todos', JSON.stringify( todos ) ); //localstorage solo guarda strings

    // }, [ todos ]); // cuando la dependencia de los todos cambia, el useEffect se dispara
    

    // // TODO: imprimir el todo agregado segun la tarea
    // const handleNewTodo = ( todo ) => {

    //     // console.log( { todo } );

    //     const action = {

    //         type: '[TODO] Add Todo',
    //         payload: todo
    //     }

    //     dispatch( action );

    // }
    // // handleNewTodo();

    // const handleDeleteTodo = ( id ) => {

    //     // console.log( { id } );

    //     dispatch({

    //         type: '[TODO] Remove Todo',
    //         payload: id

    //     });
    // }

    // const handleToggleTodo = ( id ) => {

    //     // console.log( { id } );

    //     dispatch({

    //         type: '[TODO] Toggle Todo',
    //         payload: id

    //     });
    // }

  return (

    <>
        <h1>TodoApp { todosCount }, <small>Pendientes: { pendingTodosCount } - Made By: Alexander Martinez Millan</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* TODO: inicio crear componente TodoList */}
                {/* <ul className="list-group">

                    {
                        todos.map( todo => (

                            // TODO: crear elemento TodoItem...
                            <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">Item 1</span>
                                <button className="btn btn-danger">Borrar</button>
                            </li>

                        ))
                        
                    }

                </ul> */}

                    {
                        <TodoList todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }

                        ></TodoList>
                    }
                {/* fin componente TodoList */}
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                {/* TODO: inicio crear formulario TodoAdd */}
                {/* { id: new Date()..., description:'', done: false } */}
                {/* <form>
                    <input type="text"
                    placeholder="Cual es la tarea por hacer?"
                    className="form-control" />

                    <button type="submit"
                            className="btn btn-primary mt-1"
                    >
                        Agregar
                    </button>
                </form> */}
                {/* fin crear formulario TodoAdd */}

                {
                    // <TodoAdd onNewTodo={ todo => handleNewTodo( todo ) }></TodoAdd>
                    <TodoAdd onNewTodo={ handleNewTodo }></TodoAdd>
                }

            </div>
        </div>

    </>

  )
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19853818#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19854458#questions
// resolucion de tarea TODO https://www.udemy.com/course/react-cero-experto/learn/lecture/32079812#questions
// agregar nuevo todo https://www.udemy.com/course/react-cero-experto/learn/lecture/19854786?start=15#questions
// localstorage: https://www.udemy.com/course/react-cero-experto/learn/lecture/19855206?start=15#questions
// borrar un todo: https://www.udemy.com/course/react-cero-experto/learn/lecture/19869788#questions
// marcar como completado o pendiente: https://www.udemy.com/course/react-cero-experto/learn/lecture/19870082?start=0#questions
// resolucion de tarea useTodo: https://www.udemy.com/course/react-cero-experto/learn/lecture/32081552#questions
