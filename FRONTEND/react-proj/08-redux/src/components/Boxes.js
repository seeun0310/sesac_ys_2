import { useState } from "react";
import { Box2Container, Box4Container } from "../containers/BoxesContainer"
import { useDispatch } from "react-redux";

export function Box1 ({number}) {
    return <div className='box'>
    <h3>number: {number}</h3>
    <Box2Container />
    </div>
}

export function Box2 ({number}) {
    return <div className='box'>
    <h3>number: {number}</h3>
    <Box3 />
    </div>
}

export function Box3 () {
    return <div className="box">
        <Box4Container />
    </div>

}

export function Box4 (props) {
        const {number, isData, counterIncrease, counterDecrease, isDataChange} = props;
        return <div className='box'>
        <h3>number: {number}</h3>
        <button onClick={counterIncrease}>plus</button>
        <button onClick={counterDecrease}>minus</button>
        <br />
        <br />
        <div>isData : {`${isData}`}</div>
        <button onClick={isDataChange}>change</button>
        </div>
}

export function ReduxPrac (props) {
    const {money} = props;
    const [newMoney, setNewMoney] = useState();
    const dispatch = useDispatch();
    return <>
        <h2>코딩온 은행</h2>
        <div>잔액: {money}원</div>
        <input type="number" value={newMoney} onChange={(e)=>setNewMoney(Number(e.target.value))}></input>
        <button onClick={()=>dispatch({type: "DEPOSIT", data: newMoney})}>입금</button>
        <button onClick={()=>dispatch({type: "WITHDRAWL", data: newMoney})}>출금</button>
    </>
}