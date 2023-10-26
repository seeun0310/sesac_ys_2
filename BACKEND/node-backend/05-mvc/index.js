const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// mvc 사용 before
// app.get("/", function(req, res){
//     res.render("index");
// })

// mvc 사용 after
const router = require("./routes"); // routes 폴더 안의 index.js 파일 자동 매칭
app.use("/", router);


// 존재하지 않는 get 요청에 대해 
app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다.");
})

app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});