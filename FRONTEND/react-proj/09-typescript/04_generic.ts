// Generic
// 기본적으로 선언할 때 type을 지정하는데,
// 다양한 타입에 대해 처리를 해줘야 될 때가 있음

// x y 둘 다 number거나, x y 둘 다 string이길 원한다면 오버로딩 해줘야함
function printXY(x: number, y:number): void;
function printXY(x:string, y:string): void;

function printXY(x:number | string, y:number | string) {
    console.log(x, y);
}
printXY(100, 200);

// 하지만 허용할 타입 개수가 많아질 수록 오버로딩을 계속 해줘야 해 가독성이 떨어짐
// 그래서 제네릭 사용
// T를 많이 사용하지만, 대문자라면 다른 거 사용해도 괜찮음
function printXYByGeneric<T>(x: T, y:T) {
    console.log(x, y);
}
// 함수를 호출할 때 데이터 타입을 지정
printXYByGeneric<string>("a", "b");
printXYByGeneric<number>(1, 2);

// 예시 2 (배열)
const numArrLength = (arr:number[]):number => arr.length;
const strArrLength = (arr:string[]):number => arr.length;

// 만약 객체 배열과 다른 타입들의 배열도 length를 구하는 함수를 만들고 싶다면?
function allArrLength<T>(arr: T[]) {
    return arr.length;
}
allArrLength<string>(["a", "b"]);

// 예시 3 (타입 여러개)
function exampleGeneric<T, U>(x: T, y:U) {
    console.log(x, y)
}
exampleGeneric<string, number>("example", 3);

// 예시 4 (인터페이스에서도 제네릭 가능)
interface Phone<T> {
    company: string,
    model: string,
    option: T
}

interface SamsungOption {
    a: string,
    b: number
}

const galaxy23: Phone<SamsungOption> = {
    company: 'samsung',
    model: 'galaxy23',
    option: {
        a: 'samsung goodgood',
        b: 1234
    }
}

interface IphoneOption {
    a: string,
    c: number
}

const iphone15: Phone<IphoneOption> = {
    company: 'apple',
    model: 'iphone15',
    option: {
        a: "iPhone zizone",
        c: 9999
    }
}

// 제네릭 실습
function arrElement<T>(arr:T[], index:number):T {
    return arr[index];
}

console.log(arrElement<string>(["a"], 0));

// 실습 2
function arrElement2<T>(arr:T[], index:number) {
    return arr.length >= index ? arr[index] : false
}

console.log(arrElement2<string>(["a"], 3));