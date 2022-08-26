import React from "react";

export const Hijo = React.memo( ({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
// tarea: https://www.udemy.com/course/react-cero-experto/learn/lecture/19833360#questions
