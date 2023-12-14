function sum(a,b) {
    console.log("ab 인자를 받는 함수")
    console.log(a);
    console.log(b);
    return a + b;
}

function sum(a,b,c) {
    console.log("abc 인자를 받는 함수")
    console.log(a);
    console.log(b);
    console.log(c);
    return a + b + c;
}

sum(1, 2);