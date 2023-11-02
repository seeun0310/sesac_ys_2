// orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
//    custid    CHAR(10) NOT NULL, 
//    prodname  CHAR(6) NOT NULL, 
//    price     INT  NOT NULL, 
//    amount    SMALLINT  NOT NULL,
//    FOREIGN KEY (custid) REFERENCES customer(custid)

function Orders(sequelize, Datatypes) {
    return sequelize.define(
        "orders",
        {
            orderid: {
                type: Datatypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            custid: {
                type: Datatypes.STRING(10),
                allowNull: false
            },
            prodname: {
                type: Datatypes.STRING(6),
                allowNull: false
            },
            price: {
                type: Datatypes.INTEGER,
                allowNull: false
            },
            amount: {
                type: Datatypes.INTEGER,
                allowNull: false
            },
        },
        {
            tableName: "orders",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Orders;