const express = require("express");
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done) {
            done(null, "uploads/");
        },
        filename: function(req, file, done){
            console.log(file);
            const ext = path.extname(file.originalname);
            const fileName = req.body.id + "_" + Date.now() + ext;

            done(null, fileName);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
}); 

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get('/', function(req, res){
    res.render("dynamic-silsup");
});

app.post('/upload/dynamic', uploadDetail.single('userfile'), function(req, res){
    res.send({ src: req.file.path,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
});
});



app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});