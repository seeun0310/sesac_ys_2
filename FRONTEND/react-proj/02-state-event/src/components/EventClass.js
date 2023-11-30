import { Component } from "react";

class EventClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: "hello....",
        }

        // 함수 선언문을 사용하여 메소드를 만든다.
        // 메소드 내부에서 클래스의 this를 사용하고 싶을 경우, 생성자 내에서 this를 bind 해주는 작업을 거쳐야 함
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    // 함수 선언문을 사용하여 메소드를 정의
    // 함수 내부에서 자체적은 this를 만들 수 있고, this가 클래스의 this가 아니게 됨
    // 함수가 사용될 때 this가 결정됨
    handleOnClick() {
        this.setState({ msg: "bye" });
    }

    // 혹은 함수 표현식을 이용할 경우 bind 사용하지 않아도 됨.
    // 왜냐면 함수 표현식은 함수가 읽힐 때 this를 결정지음
    handleOnClickHello = () => {
        this.setState({ msg: "hello" })
    }

    render(){
        return(
            <>
                <h3>클래스형 컴포넌트 event 핸들링</h3>
                {this.state.msg}
                <button onClick={this.handleOnClick}>잘 가</button>
                <button onClick={this.handleOnClickHello}>안녕</button>

                <button onClick={(e) => {
                    // e는 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보를 담고 있음
                    // 그 중 target이라는 key에는 이벤트가 걸린 태그를 확인 가능
                    console.log(e.type);
                }}>test</button>
            </>
        )
    }
}

class EventClassPrac extends Component {
    state = {
        text: "Hello World!"
    }

    handleOnClickText = () => {
        this.setState({ text: "Goodbye World!" })
    }

    render(){
        return(
            <>
            <h3>클래스형 컴포넌트 event 핸들링 실습</h3>
            {this.state.text}
            <button onClick={this.handleOnClickText}>클래스형 핸들링 버튼</button>
            </>
        )
    }
}

export { EventClass, EventClassPrac };