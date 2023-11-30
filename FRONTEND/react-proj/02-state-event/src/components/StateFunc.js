import { useState } from "react";

function StateFunc () {
    // useState는 배열을 반환 -> 그 배열을 구조분해하여 number와 setNumber 선언
    // [state 변수, state를 변경시키는 함수] = useState(state 초기값)
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("hello");

    return (
        <>
            <h3>함수형 컴포넌트 state</h3>
            <div>number state value {number}{" "}
            <button onClick={()=>{
                setNumber(number+1);
                setNumber((prevNumber)=>{
                    return prevNumber + 1
                });
            }}>+1</button></div>
        </>
    )
}

function StateFuncPrac () {
    const [number, setNumber] = useState(0);
    function increase() {
        setNumber(number+1)
    }
    function decrease() {
        setNumber(number-2)
    }
    return (
        <>
            <h3>함수형 컴포넌트 state 실습</h3>
            <div>
                {number}{" "}
                <button onClick={()=>{
                    increase()
                }}>+1</button>{" "}
                <button onClick={()=>{
                    decrease()
                }}>-2</button>
            </div>
        </>
    )
}

export {StateFunc, StateFuncPrac};