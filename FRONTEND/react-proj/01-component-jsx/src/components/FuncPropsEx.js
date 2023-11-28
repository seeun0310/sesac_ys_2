// 1. props 매개변수
// function FuncPropsEx(props) {
//   //   props = {
//   //     title: "SeSAC",
//   //     content: "hello world",
//   //   };

//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

// 2. 컴포넌트 내에서 props 매개변수 구조 분해
// function FuncPropsEx(props) {
//   const { title, content } = props;

//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// 3. 매개변수로 props를 받아올 때부터 구조 분해
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// 4. proptype을 이용해서 어떤 props가 넘어올지 명시 방법
// 유연한 js의 특징으로 인해 예기치 못한 오류 발생 해결
// import PropTypes from "prop-types";

// function FuncPropsEx({ title, content, number }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content}, 숫자는: {number}
//       </div>
//     </>
//   );
// }

// FuncPropsEx.defaultProps = {
//     title: "코딩온",
// }

// FuncPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

// 5. 실습
// import PropTypes from "prop-types";

// function FuncPropsEx({ food }) {
//   return (
//     <>
//       <div>
//        저는 <span style={{color: "red"}}>{food}</span>가 가장 좋아하는 음식입니다.
//        {}
//       </div>
//     </>
//   );
// }

// FuncPropsEx.defaultProps = {
//     food: "치킨",
// }

// function FuncPropsEx({ title, author, price, type }) {
//   const img ="imgg.png"
//   return (
//     <>
//       <div style={{backgroundColor: "yellow"}}>
//       <h2 style={{color: "orange", textAlign: "center"}}>이번주 베스트셀러</h2>
//       <img src={img}></img>
//        <h3 style={{textAlign: "center"}}>{title}</h3>
//        <div>저자: {author}</div>
//        <div>가격: {price}</div>
//        <div>구분: {type}</div>
//       </div>
//     </>
//   );
// }

// FuncPropsEx.defaultProps = {
//     food: "치킨",
// }

import {Component} from "react";
import PropTypes from "prop-types";
function vaild() {console.log("콘솔 띄우기 성공!@")};
class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>{this.props.text} 텍스트다</div>
        <button onClick={() => {this.props.vaild()}}>VAILD</button>
      </>
    );
  }
}

ClassPropsEx.defaultProps = {
    text: "이건 기본 text props입니다.",
}

ClassPropsEx.propTypes = {
  text: PropTypes.string.isRequired,
}



export default ClassPropsEx;