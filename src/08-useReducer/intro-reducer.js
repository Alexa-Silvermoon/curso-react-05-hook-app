
console.log('hola mundo desde intro-reducer.js');

const initialState = [

    {
        id: 1,
        todo: 'recolectar la gema del alma',
        done: false
    }
]

// el Reducer es una funcion pura, que no muta el state anterior y re dibuja solo si react lo considera necesario
const todoReducer = ( state = initialState, action = {} ) => {

    // action se encarga de regresar un nuevo estado
    if ( action.type === '[TODO] add todo' ){ // si se detecta '[TODO] add todo' significa que se agrego un nuevo valor al state pero sin mutar el original

        return [ ...state, action.payload ];
        // ...state hace una copia del estado anterior y asi me evito mutarlo

    }

    return state;

}

let todos = todoReducer();
console.log( 'original: ', todos );

const newTodo = {

    id: 2,
    todo: 'recolectar la gema del poder',
    done: false
}

const addTodoAction = {

    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );
console.log( { state: todos } );

//Lo siguiente es una mala practicar a la hora de usar Reducer:
// todos.push({

//     id: 2,
//     todo: 'recolectar la gema del poder',
//     done: false

// });

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19850678#questions
