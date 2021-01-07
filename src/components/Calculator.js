import React from 'react';
import './Calculator.css'
import {useDispatch, useSelector} from "react-redux";

export default function Calculator() {
    const MyInput = React.createRef();
    const result = useSelector(({result}) => result);
    const dispatch = useDispatch();

    return (
        <div className={'MainPage'}>
            <div className="tittle">CALCULATOR</div>
            <div id="result">
                {
                    result && result
                }
            </div>

            <div className="operations">
                <button id={'one'} onClick={() => dispatch({type: "PLUS_ONE"})}>1</button>
                <button id={'MinusOne'} onClick={() => dispatch({type: "MINUS_ONE"})}>-1</button>
                <button id={'OneHundred'} onClick={() => dispatch({type: "PLUS_HUNDRED"})}>100</button>
                <button id={'MinusOneHundred'} onClick={() => dispatch({type: "MINUS_HUNDRED"})}>-100</button>
            </div>
            <button id={'reset'} onClick={() => dispatch({type: "RESET"})}>Reset</button>

            <form action="" name={'inputForm'} id={'inputForm'} onSubmit={(e) => {
                e.preventDefault()
                dispatch({type: 'ADD_NUM', payload: (+MyInput.current.value)})
            }}>
                Число
                <input type="text" id={'inputValue'} ref={MyInput}/>
                <button id={'submit'}>Submit</button>
            </form>
        </div>
    );
}

