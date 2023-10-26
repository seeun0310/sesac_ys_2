const { mvc } = require("../model/model");


exports.main = (req, res) => {
    res.render("index");
}

exports.axios = (req, res) => {
    const login = mvc();
    console.log(login);

    if(req.body.id == login.won[0] && req.body.pw == login.won[1]){
        data = {
            isSuccess: true,
            msg: `${login.won[2]}님 환영합니다.`,
        }
    }
    else if(req.body.id == login.two[0] && req.body.pw == login.two[1]){
        data = {
            isSuccess: true,
            msg: `${login.two[2]}님 환영합니다.`,
        }
    }
    else if(req.body.id == login.three[0] && req.body.pw == login.three[1]){
        data = {
            isSuccess: true,
            msg: `${login.three[2]}님 환영합니다.`,
        }
    }else {
        data = {
            isSuccess: false,
            msg: "아이디 또는 비밀번호를 잘못 입력했습니다."
        }
    }
    console.log(req.body);
    res.send(data);
    // const realId = "jungseeun0310";
    // const realPw = "rr212529";
    // let data;
    // if(req.body.id == realId && req.body.pw == realPw){
    //     data = {
    //         isSuccess: true,
    //         msg: "로그인 성공!",
    //     }
    // }else {
    //     data = {
    //         isSuccess: false,
    //         msg: "로그인 실패!",
    //     }
    // }
    // console.log(req.body);
    // res.send(data);
}