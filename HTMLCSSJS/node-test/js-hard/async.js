// 비동기 코드를 처리하는 방법

// ----------------------------------------1. 콜백함수로 처리---------------------------------

// function goMart() {
//     console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink(callback) { // callback 또는 cb
//     setTimeout(function() {
//         console.log("고민 끝!!!");
//         product = "제로 콜라";
//         price = 2000;
//         callback(product, price);
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product;
// let price; // 호이스팅 되어 밑에서 초기화해도 상관 없음
// goMart();
// pickDrink(pay); // callback 함수로 pay를 받아서 호출함.
// // pay(product, price);


// ---------------------------------2. Promise로 처리---------------------------------

//  function goMart() {
//      console.log("마트에 가서 어떤 음료를 살지 고민한다.");
//  }

// function pickDrink() {
//     return new Promise(function(성공, 실패){
//         setTimeout(function() {
//             console.log("고민 끝!!!");
//             product = "제로 콜라";
//             price = 2000;
//             성공("성공했다~~");
//         }, 3000);
//     });
// }

// function pay(product, price) {
//     console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink().then(() => {
//     pay(product, price);
// })
// // pay(product, price);

// --------------------------------------- async / await -------------------------------------

 function goMart() {
     console.log("마트에 가서 어떤 음료를 살지 고민한다.");
 }

let product;
let price;

async function pickDrink() {
    return new Promise(function(성공, 실패){
        setTimeout(function() {
            console.log("고민 끝!!!");
            product = "제로 콜라";
            price = 2000;
            성공("성공했다~~");
        }, 3000);
    });
}

function pay(product, price) {
    console.log(`상품명 : ${product}, 가격 : ${price}`);
}

async function muyaho() {
    goMart();
    await pickDrink();
    pay(product, price);
}

muyaho();


// -----------------------------두 번째 예시 콜백함수 사용해 비동기 처리한 경우--------------------------
// 콜백 지옥임. 가독성 떨어지고 코드 수정 어려움

// function add(n1, n2, cb) {
//     setTimeout(function () {
//         let result = n1 + n2 ;
//         cb(result);
//     }, 1000);
// }

// function mul(n, cb) {
//     setTimeout(function() {
//         let result = n * 2;
//         cb(result);
//     }, 700);
// }

// function sub(n, cb) {
//     setTimeout(function () {
//         let result = n - 1 ;
//         cb(result);
//     }, 500);
// }

// add(4, 3, function (x) {
//     console.log("1 : ", x);
//     mul(x, function (y) {
//         console.log("2 : ", y);
//         sub(y, function (z) {
//             console.log("3 : ", z);
//         });
//     });
// });

// ---------------------------------promise로 변경 사용해 처리한 경우--------------------------

// function add(n1, n2, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             let result = n1 + n2 ;
//             resolve(result);
//         }, 1000);
//     });
// };

// function mul(n, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             let result = n * 2;
//             resolve(result);
//             // reject("오류 발생"); // 의도적으로 오류 넣어봤음. catch에서 잡고 출력 됨.
//         }, 700);
//     });
// };

// function sub(n, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             let result = n - 1 ;
//             resolve(result);
//         }, 500);
//     });
// };

// add(4, 3)
// .then((result) =>{
//     console.log('1: ', result);
//     return mul(result); // then에서 return하는 값이 있다면 이어서 then 사용 가능
// })
// .then((result) =>{
//     console.log("2: ", result);
//     return sub(result);
// })
// .then((result) => {
//     console.log("3: ", result);
// })
// .catch((err) => {
//     console.log(err);
// })

// ----------------------------------------promise async/await 사용-------------------------------------

//async test
// async function test() {
//     console.log("test");
// }
// console.log(test());

async function add(n1, n2, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n1 + n2 ;
            resolve(result);
        }, 1000);
    });
};

async function mul(n, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let result = n * 2;
            resolve(result);
            // reject("오류 발생"); // 의도적으로 오류 넣어봤음. catch에서 잡고 출력 됨.
        }, 700);
    });
};

async function sub(n, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = n - 1 ;
            resolve(result);
        }, 500);
    });
};

// 1. async 함수는 promise를 return 한다.
// 2. await 키워드는 async 함수 내부에서만 사용 가능하다.

async function exec() {
    const x = await add(4, 3);
    console.log(x);
    const y = await mul(x);
    console.log(y);
    const z = await sub(y);
    console.log(z);
};

exec();
