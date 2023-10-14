class House {
    constructor(이름, 연도) {
        this.name = 이름;
        this.year = 연도;
    }

    age() {
        console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었습니다`)
    }
}

const home = new House('우리집', 2021);
home.age();

class Apartment extends House {
    constructor(이름, 연도, 층) {
        // super : 부모(House)의 생성자 호출
        super(이름, 연도);
        this.floor = 층;
    }

    // 오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것 - 구조 똑같이 해야함
    age() {
        // super로 부모도 호출 가능~
        super.age();
        console.log(`${this.year + 1}년에 입주 시작했습니다.`);
    }
}

// 오버라이딩 vs 오버로딩(js에는 없음. 상속과 관련 없음)
// 오버로딩 : 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것.

const apart = new Apartment('호반베르디움', 2015, 9);
console.log(apart);
apart.age();
