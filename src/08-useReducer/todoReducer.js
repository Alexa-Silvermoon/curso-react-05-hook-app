
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type) {

        case '[TODO] Add Todo':
            // throw new Error('action.type = ABC no esta implementada')
            return[ ...initialState, action.payload ]; // agregar todo

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );
            // devuelve todos los todos que tenga un id diferente al que quiero borrar

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ){ // id

                    return {

                        ...todo,
                        done: !todo.done // regresa lo contrario, es decir si estaba en true lo pone en false o bien al revez
                    }
                }

                return todo;
            });
            
        default:
            return initialState;
    }


}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19853818#questions
// agregar nuevo todo https://www.udemy.com/course/react-cero-experto/learn/lecture/19854786?start=15#questions
// borrar un todo: https://www.udemy.com/course/react-cero-experto/learn/lecture/19869788#questions
// marcar como completado o pendiente: https://www.udemy.com/course/react-cero-experto/learn/lecture/19870082?start=0#questions
