let str:string = "hi";
console.log(str);

let num:number = 12345;

let undif:undefined;

let nu:null;

let arr:number[] = [1,2,3,4,5];

let strArr:string[] = ['abc', 'def'];
let strArr2:Array<string> = ['abc', 'def'];

let numStrArr: (number | string)[] = [1, 2, 3, 'hi'];
let numStrArr2: Array<number | string> = [1, 2, 3, 'hi'];

let abc: number | string = "abc";

// typescript에서 any를 사용하는 건 지양해야함.
let anyArr: any[] = [1, 'a', null, undefined, {}];

// interface, type
let obj:object = {
    name: "seeun",
    age: 1
}

// Tuple
let drink:[string, number] = ['cola', 2500];
console.log(drink[0]);
drink[0] = "cider";
console.log(drink[0]);
// drink[2] = 'aaaa'
// Tuple의 한계. 위처럼 할당하는 건 오류로 잡지만 push 메소드를 이용하면 오류를 잡지 못함
drink.push("aaaa");
console.log(drink); // ['cider', 2500, 'aaaa']

let drink2: readonly [string, number] = ['cola', 2500];
// drink2[0] = 'aaaa';

// Enum
// sun, rain, cloud 날씨에 대한 내용 쓸 거임
enum Weather {
    sun = 0,
    rain = 1,
    cloud = 2,
    // sun,
    // rain,
    // cloud 와 같음 (열거형이므로 0, 1, 2 자동 부여됨)
}

console.log(Weather.sun); // 0

const weather = 0;

if(weather == Weather.sun) {
    console.log("맑은 날씨입니다.")
}

let aaaa : Weather = 2; // 3은 안 들어감
console.log(aaaa); // 2

enum Weather2 {
    sun = "sun",
    rain = "rain",
    cloud = "cloud",
}

console.log(Weather2.sun); // sun

