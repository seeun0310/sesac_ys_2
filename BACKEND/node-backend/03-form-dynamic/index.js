const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render("index");
});

app.get('/ajax', function(req, res){
    console.log(req.query);
    // { key: value, key: value } 형태의 객체가 query에 담겨있음
    res.send(req.query);
});

app.post('/ajax', function(req, res){
    console.log(req.body);
    res.send(req.body);
});

app.get('/axios', function(req, res){
    console.log(req.query);
    res.send(req.query);
});

app.post('/axios', function(req, res){
    console.log(req.body);
    const data = {
        ...req.body, 
        msg: "반가워요",
    };
    res.send(data);
});

app.get('/fetch', function(req, res){
    console.log(req.query);
    res.send(req.query);
});

app.post('/fetch', function(req, res){
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});