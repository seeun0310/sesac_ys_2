const express = require("express");
const app = express();
const port = 8000;
const path = require('path');
const dotenv = require("dotenv");
// cross-env (npm i cross-env)
// 배포버전이냐 개발버전이냐에 따라 다른 env 파일을 로드할 수 있게끔 도와줌
dotenv.config({path: path.join(__dirname, "./config/envs/.env")}); 
dotenv.config({path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`)})

dotenv.config(); // index.js와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게끔 함
console.log("PASSWORD: ", process.env.PASSWORD);



app.get('/', (req, res)=>{
    res.send("hello seeun");
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});