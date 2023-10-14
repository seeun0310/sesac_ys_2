const cat = {
    name: '세은',
    age: 21,
    mew: function(){
        console.log("냐옹");
    },
};

const cat2= {
    name: '민지',
    age: 21,
    mew: function(){
        console.log("냐옹");
    },
};

const cat3 = {
    name: '세현',
    age: 20,
    mew: function(){
        console.log("냐옹");
    },
};

// class : 객체를 만드는 틀
// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫글자를 대문자로 바꾼 규칙임

class Cat {
    // constructor : 생성자 : 메소드의 일종. 클래스를 이용해 객체를 만드는 순간에 호출되는 메소드
    constructor(이름, 나이) {
        this.name = 이름;
        this.age = 나이;
        // this : 클래스에서 만들어진 객체 자기 자신.
    };

    // 메소드
    mew () {
        console.log("세은야옹");
    };

    info() {
        console.log(`이름은 : ${this.name}, 나이는 : ${this.age}`);
    }
};

const cat4 = new Cat("세은", 21);
const cat5 = new Cat("세현", 20);
console.log(cat4);
console.log(cat5);
cat4.mew();
cat4.info();