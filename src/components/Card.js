import React, { useContext } from 'react'
import { memo } from 'react'
import { api_requestSomething } from '../api.js';
import { CallbackContext } from '../CallbackContext'



const Card =  memo(function Card({children, ...props}){

    const passData = useContext(CallbackContext);

// wrapper функция-обертка: делает вид, что запрашивает что-то у сервера, получает это что-то  с помощью api_requestSomething, потом передает массив объектов наверх в App
//passData - callback, передать данные (какие объекты надо перерисовать) в App
//api_requestSomething - возвращает захардкоженный массив компонентов, которые надо перересовать. 
    function f1() {
        const data = api_requestSomething();
        passData(data);
      }
    

    const func = props.onclick;
    function getFunction(func){
        if (func === 'request'){
            return f1  
    }
}

    return (
        <div style = {props.style} key = {props.id} onClick = {getFunction(func)} >
            {props.text}
            {children}
        </div>
    )
});

export default Card
