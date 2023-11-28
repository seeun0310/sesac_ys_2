import './App.css';
import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';
import FuncPropsEx from './components/FuncPropsEx';
import Section from './components/Section';
import ClassPropsEx from './components/ClassPropsEx';

const name = "로이";
const animal = "고냥이";
const math = 3 + 5;
const a = 4;
const b = 3;
const title = "Hello World";

function App() {
  return (
    <div>
    <br />
      {/* <FuncComponent />
      <ClassComponent></ClassComponent>

      <hr />

      <h2>제 반려 동물의 이름은 {name}입니다. <br />

      {name}는 {animal}입니다. </h2>

      { math === 8 ? "정답입니다!" : "오답입니다!" }<br />

      { a > b && "a가 b보다 큽니다" }<br /><br />

      <div className='title'>{title}</div><br />
      <div style={{textAlign: 'center'}}>아이디 : <input></input> </div><br/>
      <div style={{textAlign: 'center'}}>비밀번호 : <input></input> </div> */}

      <FuncPropsEx title="SeSAC" content="hello world" number="5"></FuncPropsEx>
      {/* <FuncPropsEx number="5"></FuncPropsEx> */}

      <ClassPropsEx title="SeSAC Class" content="hello world" number={5}></ClassPropsEx>

      <Section title="SeSAC 영역">
        <h5>SeSAC 영역의 content입니다.</h5>
      </Section>

      <Section title="코딩온 영역">
        <div>코딩온 영역의 content입니다.</div>
      </Section>

      <FuncPropsEx food="피자"></FuncPropsEx>

      <FuncPropsEx title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500" type="자기계발서"></FuncPropsEx>
    
      <ClassPropsEx text="hihihi"></ClassPropsEx>
    </div>
  );
};
// 종료 태그 필수. 1) < />  2) <></>




export default App;
