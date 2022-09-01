import { TodoItem } from "./TodoItem"

export const TodoList = ( { todos = [], onDeleteTodo, onToggleTodo } ) => {

  return (

    <>
        <ul className="list-group">

            {
                todos.map( todo => ( //.map() ira incrementado el arreglo a medida que el arreglo de objetos initialState vaya aumentando

                    <TodoItem key={ todo.id } 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodo }
                    onToggleTodo={ onToggleTodo }
                    
                    ></TodoItem>

                ))
            }
        </ul>
    </>
  )
}

// resolucion tarea: https://www.udemy.com/course/react-cero-experto/learn/lecture/32079812#questions
// borrar un todo: https://www.udemy.com/course/react-cero-experto/learn/lecture/19869788#questions
// marcar como completado o pendiente: https://www.udemy.com/course/react-cero-experto/learn/lecture/19870082?start=0#questions
