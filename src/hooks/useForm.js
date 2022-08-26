import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

  /* 
  const [formState, setFormState] = useState({

      username: '',
      email: '',
      password: ''

  }); 
  */

  const [formState, setFormState] = useState( initialForm );

  // const { username, email, password } = formState;

  const  onInputChange  = ( { target } ) => {

      const { name, value } = target;

      setFormState({

          ...formState,
          [ name ]: value // propiedades computadas

      });
  }

  const onResetForm = () => {


    // forma 1:
    /* setFormState({

      username: '',
      email: '',
      password: ''

    }); */

    // forma 2:
    setFormState( initialForm );
    
  }

  return {

    ...formState,
    formState,
    onInputChange,
    onResetForm
  }

}
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19824468#questions
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32031602#questions

