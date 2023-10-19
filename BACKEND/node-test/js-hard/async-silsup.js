// async / await 실습 1. callback -> promise

// function call(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log(name);
//             resolve(name);
//         }, 1000);
//     })
// }

// function back() {
//     return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('back');
//         resolve('back');
//     }, 1000);
// })
// }

// function hell() {
//     return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('callback hell');
//     }, 1000);
// })
// }

// call('kim')
// .then((result) => {
//     console.log(result + '반가워');
//     return back(result);
// })
// .then((result) => {
//     console.log(result + '을 실행했구나');
//     return hell(result);
// })
// .then((result) => {
//     console.log('여기는 ' + result);
// });


// async 사용

// async function call(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log(name);
//             resolve(name);
//         }, 1000);
//     })
// }

// async function back(cb) {
//     return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('back');
//         resolve('back');
//     }, 1000);
// })
// }

// async function hell(cb) {
//     return new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('callback hell');
//     }, 1000);
// })
// }

// async function seeun() {
//     const a = await call('kim');
//     console.log(a + '반가워');
//     const b = await back();
//     console.log(b + '을 실행했구나');
//     const c = await hell();
//     console.log('여기는' + c);
// }

// seeun();

// 2. promise로 배경색 변경하기

async function color(색깔) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            document.body.style.backgroundColor = 색깔;
            resolve(document.body.style.backgroundColor);
        }, 1000)
    });
};


async function change() {
    await color('red');
    await color('orange');
    await color('yellow');
    await color('green');
    await color('blue');
}
change();