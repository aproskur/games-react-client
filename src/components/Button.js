import React from 'react'
import { useContext, memo } from 'react';
import { SceneContext } from '../SceneContext.js';
import { UpdateContext } from '../UpdateContext.js';

const Button = memo( function Button({children, ...props}) {




    function handleClick() {
        alert("Следующая страница");
    }

    function handleClick_2() {
        alert("Предыдущая страница");
    }

    const f1 = handleClick;
    const f2 = handleClick_2;

    const func = props.onClick;
    console.log("FUNCTION")
    console.log(func);
    function getFunction(func){
        if (func === "handleClick"){
            return f1
        }
        if (func === "handleClick_2"){
            return f2
        }
        else {
            console.log("none of those")
            return f2
        }
    }

    

    //const text_tst = useContext(SceneContext);
    const id = useContext(UpdateContext)
    return (
        <div style = {props.style} id={props.id} onClick = {getFunction(func)}>
            {children}
            {props.text}
        </div>
    )
});

export default Button