const express = require("express");
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render("validation-silsup.ejs");
})

app.post('/post', function(req, res){
    console.log(req.body);
    res.send("야호");
});



app.listen(PORT, function(){
    console.log(`server open: ${PORT}`);
})