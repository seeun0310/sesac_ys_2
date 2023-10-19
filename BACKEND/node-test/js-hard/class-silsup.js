// 클래스 실습

// 1. shape 클래스 만들기
// class Shape {
//     constructor(가로, 세로) {
//          this.weight = 가로;
//          this.height = 세로;
//      }
//     getArea() {
//         return this.weight*this.height;
//     }
// }

// let rec1 = new Shape(3, 4);
// console.log(rec1.getArea());

// 2. 클래스 상속 (선택)
class Shape {
    constructor(가로, 세로) {
         this.weight = 가로;
         this.height = 세로;
     }
}
class Rec extends Shape {
    getArea() {
        return this.weight*this.height;
    }
    getDiagonal() {
        return Math.sqrt(this.weight**2+this.height**2);
    }
}
class Triangle extends Shape {
    getArea() {
        return (this.weight*this.height)/2;
    }
}
class Circle extends Shape {
    constructor(가로, 세로, 반지름) {
        super(가로, 세로);
        this.radius = 반지름;
    }
    getArea() {
        return (this.radius)**2*3.14;
    }
}
// let rec2 = new Rec(3, 4);
// console.log(rec2.getDiagonal());
// let tri = new Triangle(3, 4);
// console.log(tri.getArea());
// let cir = new Circle(3, 4, 5);
// console.log(cir.getArea());

// 3. 클래스 상속 (선택)
let rec2 = new Rec(3, 4);
let tri = new Triangle(3, 4);
let cir = new Circle(3, 4, 5);
console.log(rec2.getArea());
console.log(tri.getArea());
console.log(cir.getArea());