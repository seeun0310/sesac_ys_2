import { Component } from "react";

class LifeCycleClass extends Component {
    state = {text: ""};

    // 1. 컴포넌트가 마운트 될 때 실행
    componentDidMount(){
        console.log("class component : ⭕mount")
    }

    // 2. 컴포넌트가 업데이트 될 때 실행
    componentDidUpdate(prevProps, prevState) {
        console.log("class component : ✅ update")

        // text state가 update 될 때마다 if문 실행
        if(prevState.text != this.state.text) {
            console.log("class component : ✅✅ text update")
        }
    }

    // 3. 컴포넌트가 언마운트 될 때 실행
    componentWillUnmount() {
        console.log("class component : ❌ unmount")
    }

    render(){
        return <>
            <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>number: {this.props.number}</div>
        <input type="text" value={this.state.text} onChange={(e)=>{this.setState({text: e.target.value})}} />
        </>
    }
}

export default LifeCycleClass;