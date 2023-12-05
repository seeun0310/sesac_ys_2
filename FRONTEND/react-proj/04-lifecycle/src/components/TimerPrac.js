import { useEffect, useState } from "react";

function Timer () {
    const [sec, setSec] = useState(0);
    const [start, setStart] = useState(false);


    useEffect(()=>{
        if(start==="true"){
        setTimeout(()=>{
             setSec(sec+1)
        }, 1000)}
    })

    function Start () {
        setStart("true")
    }
    

    function Stop () {
        setStart("false");
    }

    function Reset () {
        setSec(0);
    }

    return <>
        <h2>{sec} Seconds</h2>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
    </>
}

export default Timer;