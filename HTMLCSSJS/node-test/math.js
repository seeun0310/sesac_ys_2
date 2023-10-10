const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.141592;

// case 1
// 파일에서 한 개의 식별자만 내보내는 경우
// module.exports = add;

// case 2, 3
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
module.exports = {
    add,
    minus,
    PI
};

// + ) 함수를 만드는 동시에 모듈을 내보냄!!!!!
// module.exports.add = (a, b) => a + b ;
// module.exports.minus = (a, b) => a - b;
// module.exports.PI = 3.14;



// {
//     name: "seeun";
//     gender: "female";
// }