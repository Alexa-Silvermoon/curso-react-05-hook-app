import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({

        data: null,
        isLoading: true,
        hasError: null

    });

    const getFetch = async() => {

        setState({

            ...state,
            isLoading: true // se pone de nuevo en true por si en el futuro quiero hacer otra busqueda

        });

        const resp = await fetch( url );
        const data = await resp.json();
        // console.log( data );

        setState({

            data,
            isLoading: false,
            hasError: null

        });
    }

    useEffect(() => {

        getFetch();

    }, [url]);

    return{

        // opcion 1 de retorno:
        // state,

        // opcion 2 de retorno:
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
    
}
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19825948#questions
