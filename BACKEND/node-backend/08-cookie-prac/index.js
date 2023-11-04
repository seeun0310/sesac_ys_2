const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");

app.use(cookieParser()); // 쿠키를 해석할 수 있게 해줌.

const cookieConfig = {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
}

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/popup', (req, res) => {
    res.render("popup");
})

app.post('/close', (req, res) => {
    res.cookie("popup", "yes", cookieConfig); // 응답에 쿠키를 담는 메소드
    res.send({result : true});
    console.log(req.cookies);
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});