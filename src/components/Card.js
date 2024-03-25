import React, { useContext } from 'react';
import { memo } from 'react';
import { api_requestSomething } from '../api.js';
import { CallbackContext } from './CallbackContext';

const Card = memo(function Card({ children, ...props }) {
    const passData = useContext(CallbackContext);

    // Wrapper function: pretends to request something from the server, receives it via api_requestSomething, then passes an array of objects up to App
    // passData - callback, to pass data (which objects need to be re-rendered) to App
    // api_requestSomething - returns a hardcoded array of components that need to be re-rendered.
    function f1() {
        const data = api_requestSomething();
        passData(data);
    }

    const func = props.onclick;
    // Determines which function to return based on the provided func argument
    function getFunction(func) {
        if (func === 'request') {
            return f1;
        }
    }

    return (
        <div key={props.id} style={props.style} onClick={getFunction(func)}>
            {props.text}
            {children}
        </div>
    );
});

export default Card;

