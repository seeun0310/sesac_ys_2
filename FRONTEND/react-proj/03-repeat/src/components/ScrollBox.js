import { useRef } from "react";

function ScrollBox () {
    const box = useRef();
    const scrollTop = () => {
        box.current.scrollTop = 0;
    }
    return <>
    <br />
    <br />
        <div className="scroll-box" ref={box}>
            <h1>맨 위!</h1>
            <h1>왕왕왕왕</h1>
            <h1>왕왕왕왕</h1>
            <h1>왕왕왕왕</h1>
            <h1>왕왕왕왕</h1>
            <h1>왕왕왕왕</h1>
            <h1>왕왕왕왕</h1>
        </div>
        <button onClick={scrollTop}>스크롤 버튼</button>
    </>
}

export default ScrollBox;