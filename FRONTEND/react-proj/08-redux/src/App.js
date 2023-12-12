import { useState } from 'react';
import './App.css';
import { ReduxPrac } from './components/Boxes';

function App() {
  return (
    <div>
      <Box1></Box1>
    </div>
  );
}

function Box1 () {
  const [number, setNumber] = useState(100);
  const increase = () => setNumber(number+1);
  const decrease = () => setNumber(number-1);
  return <div className='box'>
    <h3>number: {number}</h3>
    <Box2 number={number} increase={increase} decrease={decrease}></Box2>
  </div>
}

function Box2 (props, increase, decrease) {
  return <div className='box'>
  <h3>number: {props.number}</h3>
  <Box3 number={props.number} increase={props.increase} decrease={props.decrease}></Box3>
  </div>
}

function Box3 (props, increase, decrease) {
  return <div className='box'>
    <Box4 number={props.number} increase={props.increase} decrease={props.decrease}></Box4>
  </div>
}

function Box4 (props, increase, decrease) {
  return <div className='box'>
    <h3>number: {props.number}</h3>
    <button onClick={props.increase}>plus</button>
    <button onClick={props.decrease}>minus</button>
  </div>
}

export default App;
