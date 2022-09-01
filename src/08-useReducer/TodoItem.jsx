
export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo } ) => {
  
  return (

    // <li key={ todo.id } className="list-group-item d-flex justify-content-between">
    <li className="list-group-item d-flex justify-content-between">

        <span 
          // className="align-self-center"
          // className={ ` align-self-center ${ todo.done && 'text-decoration-line-through' } `}/* tachar si la clase ya esta hecha (true) */
          className={ ` align-self-center ${ ( todo.done ) ? 'text-decoration-line-through' : '' } `}/* tachar si la clase ya esta hecha (true) */
          onClick={ () => onToggleTodo( todo.id ) }

          >{ todo.description }</span>

        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id )}
          
        >Borrar</button>

    </li>
  )
}

// resolucion tarea: https://www.udemy.com/course/react-cero-experto/learn/lecture/32079812#questions
// borrar un todo: https://www.udemy.com/course/react-cero-experto/learn/lecture/19869788#questions
// marcar como completado o pendiente: https://www.udemy.com/course/react-cero-experto/learn/lecture/19870082?start=0#questions
