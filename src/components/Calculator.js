import React, {Component} from 'react';
import './Calculator.css'
import {useState} from 'react'
export default function Calculator(){
   const MyInput=React.createRef();

    const [result,setResult]=useState(0)

    const add=(num)=>{
        setResult((prev)=>{
            // if((prev+num)>0){
            //     return prev+num;
            // }else {
            //     return 0;
            // }
          return prev+num ? prev+num : 0;
        });

    }
    const reset=()=>{
        setResult(0);
    }
    const addNum=(e)=>{
        e.preventDefault();
        if (!isNaN(parseInt(MyInput.current.value))){
            add(parseInt(MyInput.current.value));
        }
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
                    <button id={'one'} onClick={()=>add(1)}>1</button>
                    <button id={'MinusOne'} onClick={()=>add(-1)}>-1</button>
                    <button id={'OneHundred'} onClick={()=>add(100)}>100</button>
                    <button id={'MinusOneHundred'} onClick={()=>add(-100)}>-100</button>
                </div>
                <button id={'reset'} onClick={reset}>Reset</button>
              {/*//todo позбавитись форми*/}
                <form action="" name={'inputForm'} id={'inputForm'} onSubmit={addNum}>
                    Число
                    <input type="text" id={'inputValue'} ref={MyInput}/>
                    <button id={'submit'}>Submit</button>
                </form>
            </div>
        );
}

