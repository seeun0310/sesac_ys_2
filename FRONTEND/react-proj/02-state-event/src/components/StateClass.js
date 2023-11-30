import {Component} from "react";

class StateClass extends Component {
    // 옛날 방식
    // constructor(props) {
    //     super(props) // super() 부모 클래스의 생성자
    //     // super를 실행시켜야 this 객체를 사용할 수 있었다

    //     this.state = {
    //         number: 0,
    //         text: "hello",
    //     }
    // }
    
    // 만약 생성자를 구현하지 않으면, 기본 생성자가 자동으로 실행됨
    // constructor(props) {
    //     super(props)
    // }

    // 최근 방식
    state = {
        number: 0,
        text: "hello",
    }

    render() {
        // const {number} = this.state;
        return (
        <>
            <div>props 예시 {this.props.name}</div>
            <h3>클래스형 컴포넌트 state</h3>
            <div>number state value {this.state.number}{" "} 
            <button onClick={()=>{
                // state 변경은 보통 일반 변수 변경 시키듯 변수에 값을 재할당 하는 것이 아님
                // state를 변경시키는 함수를 사용함
                // 클래스형 : setState
                this.setState({ number: this.state.number+1 });

                // 만약 setState를 여러개 사용해야 한다면, setState는 비동기로 실행되므로 원하는 결과 얻기 어려움.
                this.setState((prevState)=>{ return { number: prevState.number+1 } });
            }}> +1 </button>            
            </div>
        </>
        );
    }
}



class StateClassPrac extends Component {
    state = {
        number: 0
    }

    render(){
        return(
            <>
                <h3>클래스형 컴포넌트 state 실습</h3>
                <div>
                {this.state.number}{" "}
                <button onClick={()=>{
                    this.setState({ number: this.state.number+2 })
                }}>+2</button>{" "}
                <button onClick={()=>{
                    this.setState({ number: this.state.number-1 })
                }}>-1</button></div>
            </>
        )
    }
}

export {StateClassPrac, StateClass};