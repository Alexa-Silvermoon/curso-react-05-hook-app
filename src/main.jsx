import React from 'react';
import ReactDOM from 'react-dom/client';
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HooksApp></HooksApp> */}
        {/* <CounterApp></CounterApp> */}
        {/* <CounterWithCustomHook></CounterWithCustomHook> */}
        {/* <SimpleForm></SimpleForm> */}
        {/* <FormWithCustomHook></FormWithCustomHook> */}
        {/* <MultipleCustomHooks></MultipleCustomHooks> */}
        {/* <FocusScreen></FocusScreen> */}
        {/* <Layout></Layout> */}
        {/* <Memorize></Memorize> */}
        {/* <MemoHook></MemoHook> */}
        {/* <CallbackHook></CallbackHook> */}
        <Padre></Padre>
    </React.StrictMode>

);