import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    // console.log( { counter } );

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log( { data, isLoading, hasError } );

    // si la data tiene un valor, entonces toma la data en la posicion 0
    const { author, quote } = !!data && data[0];
    // https://www.udemy.com/course/react-cero-experto/learn/lecture/19827558#questions

    return(

        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            
            {/* { // ternario forma 1
                (isLoading)?
                (
                    <div className="alert alert-info text-center">
                        Cargando...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
                
            } */}

            { // ternario forma 2
                isLoading?
                <LoadingQuote></LoadingQuote>
                : <Quote author={ author } quote={ quote }></Quote>
            }

            <button className="btn btn-primary" onClick={ () => increment() }>
                Siguiente Nota
            </button>

        </>
    )
}

// https://breakingbadapi.com/
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19825948#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19825948#questions

// optimizacion: https://www.udemy.com/course/react-cero-experto/learn/lecture/32033580#questions