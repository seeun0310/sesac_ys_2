const Sequelize = require("sequelize");

// key에 접근하는 방법 예시. 그래서 밑에 ["development"] 사용 가능했음
// const data = {
//     "development-ddd" : {}
// }
// data["development-ddd"];


const config = require("../config/config.json")["development"]; // 객체의 development 키를 가지고 오고 싶었음

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체를 만듦

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize:Sequelize};

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체가 

// db.User = require("./Visitor")(sequelize, Sequelize);

module.exports = db;