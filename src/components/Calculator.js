import React, {Component} from 'react';
import './Calculator.css'
import {useState} from 'react'
export default function Calculator(){
   const MyInput=React.createRef();

    const [result,setResult]=useState(0)

  //todo/--------------------- ці методи скоротити до єдного---------------
    const addOne=()=>{
        setResult((prev)=>prev+1);
    }
    const subtractOne=()=>{
        setResult((prev)=>prev-1);
    }
    const addHundred=()=>{
        setResult((prev)=>prev+100);
    }
    const subtractHundred=()=>{
        setResult((prev)=>prev-100);
    }
    //endtodo-----------------------------------------------------------
    const reset=()=>{
        setResult(0);
    }
    const addNum=(e)=>{
        e.preventDefault();
        setResult((prev)=>prev+(+MyInput.current.value))
    }
        return (
            <div className={'MainPage'}>
                <div className="tittle">CALCULATOR</div>
                <div id="result">
                    {
                        result && result
                    }

                </div>
                <div className="operations">
                    <button id={'one'} onClick={addOne}>1</button>
                    <button id={'MinusOne'} onClick={subtractOne}>-1</button>
                    <button id={'OneHundred'} onClick={addHundred}>100</button>
                    <button id={'MinusOneHundred'} onClick={subtractHundred}>-100</button>
                </div>
                <button id={'reset'} onClick={reset}>Reset</button>
              {/*//todo ---------- зробити контрольований input без форми-------------*/}
                <form action="" name={'inputForm'} id={'inputForm'} onSubmit={addNum}>
                    Число
                    <input type="text" id={'inputValue'} ref={MyInput}/>
                    <button id={'submit'}>Submit</button>
                </form>
            </div>
        );
}

