const express = require("express");
const app = express();
const PORT = 8008;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes/router");

app.use("/", router);

app.use('/axios', router);

app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다.");
})


app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});