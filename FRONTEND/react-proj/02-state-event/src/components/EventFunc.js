import { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState("hello");

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg("bye");
  };

  function handleOnClickHello() {
    setMsg("hello");
  }

  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  const [name, setName] = useState("");

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      console.log("엔터가 눌렸습니다!");
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event 핸들링 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}>잘 가</button>
        <button onClick={handleOnClickHello}>안녕</button>

        {/* 함수에서 매개변수를 받고 싶으면 어떻게 하나요? */}
        {/* 첫번째 방법 onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
        {/* <button
          onClick={() => {
            handleOnClickTest("안녕?");
          }}
        >
          테스트
        </button> */}

        {/* 두번 째 방법 .bind를 이용한다. */}
        {/* bind의 첫 번째 매개변수는 . 앞에 있는 함수(handleOnClickTest)의 this를 결정 */}
        {/* 두번째 인자로 원하는 값을 넘겨주면 된다. */}
        <button onClick={handleOnClickTest.bind(null, "안녕?")}>테스트</button>

        <br />

        {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 문구가 콘솔에 찍히도록 */}
        <input type="text" value={name} onChange={(e)=>{
            console.log(e.target);
            setName(e.target.value);
        }} onKeyDown={handleEnter} />
      </div>
    </>
  );
}

function EventFuncPrac () {
    const [color, setColor] = useState("black");
    const [text, setText] = useState("검정색 글씨");
    const [disappear, setdisappear] = useState("사라져라");
    const [hello, setHello] = useState("안녕하세요");

    function changeRed () {
        setText("빨간색 글씨");
        setColor("red");
    }

    function changeBlue () {
        setText("파란색 글씨");
        setColor("blue");
    }

    function Nonedisappear () {
        if (disappear === "사라져라"){
            setdisappear("보여라");
            setHello("");
        } else {
            setdisappear("사라져라");
            setHello("안녕하세요");
        }
    }

    const [fruit, setFruit] = useState("/apple.webp");
    function changeFruit (e) {
        if (e.target.value === "사과"){
            setFruit("/apple.webp")
        }else {
            setFruit("/banana.jpg")
        }
    }

    const [backColor, setBackColor] = useState("black");
    function changeBack (e) {
        if (e.target.vaule === "black") {
            setBackColor("black")
        }else {
            setBackColor("yellow")
        }
    }

    const [textColor, setTextColor] = useState("white");
    function changeColor (e) {
        if (e.target.vaule === "white"){
            setTextColor("white")
        } else {
            setTextColor("red");
        }
    }

    const [content, setContent] = useState("text");
    // function writeContent (e) {
    //     setContent({e.target.value});
    // }

    return(
        <>
            <h3>함수형 컴포넌트 event 핸들링 실습2</h3>
            
            <div style={{fontSize: "30px", color: color}}>{text}</div>
            <button onClick={changeRed}>빨간색</button>
            <button onClick={changeBlue}>파란색</button>

            <br/><hr/>

            <h3>함수형 컴포넌트 event 핸들링 실습3</h3>
            
            <button onClick={Nonedisappear}>{disappear}</button>
            <h1> {hello} </h1>

            <br/><hr/>

            <h3>함수형 컴포넌트 event 핸들링 실습4</h3>
            <form>
            과일: <select onClick={changeFruit}>
                <option value="사과">사과</option>
                <option value="바나나">바나나</option>
            </select>
            배경색: <select onClick={changeBack}>
                <option value="black">검정</option>
                <option value="yellow">노랑</option>
            </select>
            글자색: <select onClick={changeColor}>
                <option value="white">하양</option>
                <option value="red">빨강</option>
            </select>
            <br/>
            내용: <input placeholder="내용을 입력하세요." value={content} onChange={(e)=>{
                setContent(e.target.value)
            }}></input>
            <img src={fruit}></img>
            <div style={{backgroundColor: backColor, color: textColor}}>{content}</div>
            </form>
        </>
    )
}

export {EventFunc, EventFuncPrac};