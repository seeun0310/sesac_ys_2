// 함수 자체의 type -> 함수가 실행되어 결국 return 되는 값의 type
function sum(a:number, b:number):number {
    return a + b;
}
console.log(sum(1, 2));

// 화살표 함수도 가능
const minus = (a:number, b:number):number => {
    return a - b;
}
console.log(minus(1, 2));

// 옵셔널 매개변수
const minus2 = (a:number, b?:number):number => {
    if (b) return a - b;
    return a;
}

interface Calculator {
    sum: (a:number, b:number) => number
    sub?: () => void;
}

const calc: Calculator = {
    sum: sum
}

// never
function goingOn():never {
    while(true) {
        console.log("gogo");
    }
}

// void: 함수 자체의 리턴 값이 없을 때 사용
// 오버로딩 : 함수의 이름은 같으나 형태가 다른 함수
function hello(num: number): number;
function hello(str: string, num?: number): string;

function hello(param1:any, param2?: any) {
    console.log(param1);
    console.log(param2);
    return param1
}

hello(3);
hello("hi", 20);

// 실습
function sum1 (a:number, b:number):void {
    return console.log(a+b);
}
sum1(5, 11);

function sum2 (...result:number[]):number {
    let sum2Result: number = 0;
    let i:number;
    for (i = 0; i < result.length; i++) {
        sum2Result += result[i];
    }
    return sum2Result;
}
console.log(sum2(1, 2, 3, 4, 10));
