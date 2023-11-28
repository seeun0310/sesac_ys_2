// const FuncComponent = () => {
//     return <div>함수형 컴포넌트 입니다.</div>
// };

function FuncComponent() {
    const text = "hello?";
    const name = "seeun";

    const ifRenderTest = () => {
        if(name === "seeun") {
            return <div>안녕하세요~~</div>
        } else if (name === "lily") {
            return "오 리더님 안녕하세요~~~"
        } else {
            return "누구세요?"
        }
    }

    return (
    <>
    {/* 1. 하나의 태그로 감싸서 return */}
    <div>함수형 컴포넌트입니다.</div>
    <div>함수형 컴포넌트입니다.</div>


    {/* 2. js 문법 사용 가능 (변수) */}
    <h3>코딩온 {text}</h3>

    {/* 2. 삼항연산자 사용 가능 (간단한 것만) */}
    <h4>삼항연산자 테스트 : {name === "seeun" ? "안녕하세요!" : "누구세요?"}</h4>

    {/* 2-1. 간단하지 않은 것은 함수로 만들어 변수에 저장하고 사용 */}
    <h1>if문 테스트 : {ifRenderTest()}</h1>

    {/* 2-2. 조건에 따른 렌더링 (논리연산자) 참일 때 실행하고 거짓이면 아무것도 안 함 */}
    <h5>{name === "seeun" && "논리연산자 렌더링 테스트"}</h5>

    {/* 3. inline style 적용 방법 (dash-case => camelCase) */}
    <div style={{color: 'blue', fontSize: '30px'}}>css 속성 객체로 적용</div>    
    
    {/* 4. class와 onclick */}
    <div className="test-css" onClick={()=>{alert('onclick')}}>class, onclick test</div>    
    
    {/* 5. 종료 태그 필수! */}
    <br />
    <img />

    {/* src 내부의 이미지 사용할 경우 위에서 이미지 import 해오기 */}
    {/* <img src={image} /> */}

    {/* 6. 주석 사용. 중괄호에 넣어라 */}
    </>
    );
}

export default FuncComponent;