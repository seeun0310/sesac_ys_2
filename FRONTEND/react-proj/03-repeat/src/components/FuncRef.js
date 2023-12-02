import {useRef} from "react";

function FuncRef() {
    const input = useRef();

    const focusInput = () => {
        input.current.focus();
    }

    const localVar = useRef(0);

    const plusLocalVar = () => {
        localVar.current++;
        console.log(localVar.current);
    }

    return <>
    <br />
    <hr />
        <input type="text" ref={input} />
        <button type="button" onClick={focusInput}>버튼</button>
        <button type="button" onClick={plusLocalVar}>플러스 버튼</button>
    </>;
}

export default FuncRef;