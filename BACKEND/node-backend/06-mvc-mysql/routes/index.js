const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// ~~:8000 -> index.ejs 렌더
router.get("/", controller.home);


// :8000/visitor -> visitor.ejs 렌더
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);


// 방명록 하나 조회
router.get("/visitor/:id", controller.getVisitorById)

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;