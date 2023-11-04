const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");
app.set("view engine", "ejs");

app.use(session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할 거냐?
    saveUninitialized: true, // 클라이언트가 처음 접속할 때, 세션을 한 번 초기화 할 건지 말건지?
    cookie: {
        httpOnly: true, // document.cookie로는 접속 x
        maxAge: 3000
    },
    // secure: true // https에서만 동작하도록 함
}))

app.get('/get', (req, res) => {
    req.session.user = "seeun";
    console.log("session: ", req.session);
    res.send({result:true});
})

app.get('/', (req, res) => {
    if(req.session.user) {
        let user = req.session.user;
        res.render("logout", {user});
    }else {
        res.render("index");
    }
});





// app.get('/set', (req, res) => {
//     console.log("session: ", req.session);
//     res.send(req.session);
// })

// app.get('/get', (req, res)=>{
//     // if(req.session.user) {
//     //     res.render("profile", {})
//     // }else {
//     //     res.redirect("/login");
//     // }
//     console.log(req.session.user);
//     res.send({ user: req.session.user });
// })

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});