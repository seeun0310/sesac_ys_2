const express = require("express");
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render("form-silsup");
})

app.post('/post', function(req, res){
    console.log(req.body);
    res.render("result", {
        name: req.body.name
    })
});



app.listen(PORT, function(){
    console.log(`server open: ${PORT}`);
})

