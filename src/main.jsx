import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { HooksApp } from './HooksApp';
import './index.css'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(

    // <BrowserRouter> {/* high order component React Router DOM */}
    //     <MainApp></MainApp>
    // </BrowserRouter>
    /* https://www.udemy.com/course/react-cero-experto/learn/lecture/19892172?start=15#questions */

    <React.StrictMode>
        {/* <HooksApp></HooksApp> */}
        {/* <CounterApp></CounterApp> */}
        {/* <CounterWithCustomHook></CounterWithCustomHook> */}
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormWithCustomHook></FormWithCustomHook> */}
        {/* <MultipleCustomHooks></MultipleCustomHooks> Breaking bad API quotes */}
        {/* <FocusScreen></FocusScreen> */}
        {/* <Layout></Layout> */}
        {/* <Memorize></Memorize> */}
        {/* <MemoHook></MemoHook> */}
        {/* <CallbackHook></CallbackHook> */}
        {/* <Padre></Padre> */}
        <TodoApp></TodoApp>
        {/* <MainApp></MainApp> */}
    </React.StrictMode>

);