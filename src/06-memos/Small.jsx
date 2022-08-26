
import { memo, memorize } from 'react';

export const Small = memo(( { value } ) => {

    console.log( 'me volvi a dibijar <small' );

    return(

        <small>{ value }</small>
    )
});

/* 
export const Small = ( { value } ) => {

    console.log( 'me volvi a dibijar <small' );

    return(

        <small>{ value }</small>
    )
}
 */

// memorize: https://www.udemy.com/course/react-cero-experto/learn/lecture/19830222?start=15#questions
