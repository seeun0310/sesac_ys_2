const { Customer, Orders, Sequelize } = require("../model");
const Op = Sequelize.Op; // operator 받아옴

exports.main = async (req, res) => {
    // Customer의 주문 목록 "custname"과 함께 보고싶다
    const cust = await Customer.findAll({
        attributes: ["custid", "custname", "birth"],
        where: { birth: { [Op.between]: ["2000-01-01", "2000-12-31"] } },
        include: [
            {
                model: Orders,
                attributes: { exclude: ["custid"] }, // 중복이므로 Orders에선 제외
                // where: {}
            }
        ],
        raw: true // 배열 하나로 합쳐버리는 옵션
    });

    res.send(cust);
}