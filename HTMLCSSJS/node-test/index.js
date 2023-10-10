// case 1
// 파일에서 한 개의 식별자만 내보내는 경우
const add = require("./math.js");
const sum1 = add(2, 3);
console.log(sum);

// case 2
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음
const math = require("./math.js");

const sum2 = math.add(3, 5);
console.log(su2);
console.log(math.PI);

// case 3
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 특정 식별자만 필요한 경우 객체 구조분해 할당 문법을 통해 받아옴
const { add, minus } = require("./math.js");
const sum3 = add(2, 3);
console.log(sum3);
// console.log(pi); => 오류 발생