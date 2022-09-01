import { useForm } from "../hooks"

export const TodoAdd = ( { onNewTodo } ) => {

    // reciclamos el useForm en la carpeta hooks
    const { description, onInputChange, onResetForm } = useForm({

        description: '',
    });

    const onFormSubmit = ( event ) => {

        event.preventDefault();
        if ( description.length <= 1 ) return; // no se aceptan tareas de un caracter o menos

        const newTodo = {

            id: new Date().getTime(),
            done: false,
            description: description

        }

        onNewTodo( newTodo ); //crear el todo y darle el formato
        onResetForm(); // limpiar caja de texto

    }

  return (

    <>
        <form onSubmit={ onFormSubmit }> {/* al enviar el formulario */}
            <input type="text"
            placeholder="Cual es la tarea por hacer?"
            className="form-control"
            name="description"
            value={ description } /* pasa por useForm */
            onChange={ onInputChange } /* pasa por useForm */
            />

            <button type="submit"
                    className="btn btn-primary mt-1"
            >
                Agregar
            </button>
        </form>
    </>
  )
}

// resolucion tarea: https://www.udemy.com/course/react-cero-experto/learn/lecture/32079812#questions
