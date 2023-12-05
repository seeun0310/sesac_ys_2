import { useState } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycleFunc';
import LifeCycleClass from './components/LifeCycleClass';
import PostList from './components/PostList';
import JsonList from './components/PostList';
import Timer from './components/TimerPrac';

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
    <button onClick={()=>{setNumber(number+1)}} >plus</button>
    <button onClick={()=>{setIsShow(!isShow)}} > {isShow ? "off" : "on"} </button>
    {/* {isShow && <LifeCycle number={number}/>} */}
    {isShow && <LifeCycleClass number={number}/> }

    {/* <PostList /> */}
    {/* <JsonList /> */}
    <Timer />
    </div>

  );
}

export default App;
