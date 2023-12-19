const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서 동작
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);
// const Socket = require("socket.io")
// const io = Socket(server) 를 줄여서 쓴 거임

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("client1");
});

io.on("connection", (socket)=>{
    // 콜백함수의 매개변수에 있는 socket 객체
    // 접속한 클라이언트의 소켓
    console.log("socket id", socket.id);

    // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를
    // 받을 이벤트를 등록함
    socket.on("hello", (res)=>{
        // res : socket을 이용해 보내준 데이터
        console.log(res);
        socket.emit("bye", {msg: "안녕히 가세요~"})
    })

    socket.on("entry", (res)=>{
        console.log(res);
        io.emit("notice", {msg: `${socket.id}님이 입장했습니다.`})
    })

    socket.on("helloPrac", (res)=>{
        console.log("client: ", res);
        socket.emit("helloMsg", "hello : 안녕하세요.");
    })

    socket.on("studyPrac", (res)=>{
        console.log("client: ", res);
        socket.emit("studyMsg", "study : 공부합시다!")
    })

    socket.on("byePrac", (res)=>{
        console.log("client: ", res);
        socket.emit("byeMsg", "bye : 잘가~")
    })
   
})

server.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});