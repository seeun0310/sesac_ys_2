import { StringMappingType } from "typescript";

// or
type gender = 'Men' | 'Women';
const lily:gender = 'Men';

// [상품명, 가격] 적으려고 함
type productInfo = [string, number];
const cola: productInfo = ["cola", 2000];

// 객체에 대한 타입을 지정할 경우
type ProductInfo2 ={
    productName: string,
    price: number
}

const cider: ProductInfo2 = {
    productName: 'cider',
    price: 2000,
}

type ProductInfo3 ={
    productName: string,
    price: number,
    sale?: number, // 있어도 되고 없어도 되는 값 (number | undefined) 와 같은 역할을 함
}

const beer: ProductInfo3 = {
    productName: 'beer',
    price: 3000,
    // sale: 10,
}

interface Seller {
    name: string,
    age: 22,
}

interface ProductInfo4 {
    productName: string,
    price: number,
    sale?: object,
    seller?: Seller,
}

const soju: ProductInfo4 = {
 productName: "soju",
 price: 2000,
 seller: {name: "seeun", age: 22}
}

// ?. 옵셔널 체이닝.
console.log(soju.seller?.name)
// soju.seller -> seller는 optional한 key -> undefined가 될 수 있음
// name에 값이 없다면 undefined 뜸


// interface 상속
interface Person {
    name: string,
    age: number
}

interface Student extends Person {
    studentID: string,
    eat: (aa: number) => void;
}

const person: Person = {
    name: 'seeun',
    age: 21,
}

const student: Student = {
    studentID: '22011401',
    name: 'seeun',
    age: 21,
    eat: () => console.log("hi"),
}

// interface 실습
interface Game {
    title: string,
    price: number,
    desc?: string,
    category: string,
    platform: string
}
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }

  
