const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

db.Customer.hasMany(db.Orders, {
    foreignKey: "custid",
    // sourceKey: "id", // 참조하고 있는 테이블의 컬럼이 다르다면 
    // onDelete: "CASCADE" // 테이블에서 onDelete를 했다면
})
db.Orders.belongsTo(db.Customer, {
    foreignKey: "custid",
    // targetKey: "id", // 참조하고 있는 테이블의 컬럼이 다르다면 
    // onDelete: "CASCADE" // 테이블에서 onDelete를 했다면
})

module.exports = db;