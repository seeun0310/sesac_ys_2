import { createRef, Component } from "react";


class ClassRef extends Component {

    // 콜백함수 이용해 ref 지정했을 때, ref 변수 사용법
    focusmyInput = () => {
        this.myInput.focus();
    }

    // 내장함수 ref 변수 사용법
    input = createRef();
    focusInput = () => {
        this.input.current.focus();
    }

    render(){
        return <>
        {/* 1. 콜백함수 이용해 ref 지정 */}
            <input
             type="text"
             ref={(ref)=>{
                // ref에 콜백함수를 넘길 때 첫 번째 매개변수는 
                // ref가 걸려 있는 요소를 담음
                this.myInput = ref;
            }} />
        <button type="button" onClick={this.focusmyInput}>버튼</button>

        {/* 2. 내장함수 createRef 이용해 ref 지정 */}
        <input
             type="text"
             ref={this.input} />
        <button type="button" onClick={this.focusInput}>버튼</button>
        </>
    }
}

export default ClassRef;