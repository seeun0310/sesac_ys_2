const express = require("express");
const app = express();
const PORT = 8008;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.render('axios-post-silsup');
});

app.post('/axios', function(req, res){
    const realId = "jungseeun0310";
    const realPw = "rr212529";
    console.log(req.body);
    res.send(req.body);
})




app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});