const express = require("express");
const app = express();
const PORT = 8008;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.render('axios-get-silsup');
});

app.get('/axios', function(req, res){
    console.log(req.query);
    res.send(req.query);
})



app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});