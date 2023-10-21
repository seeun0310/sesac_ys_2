const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path"); // path : 파일 경로를 받았을 때, 확장자나 파일 이름을 가져올 수 있게 된다.

// upload라는 객체 안에 미들웨어 함수가 존재. single(), array()
// 미들웨어 : 요청과 응답 사이에 존재.
// multer가 임의의 문자열을 생성해서 그 문자열을 파일 이름으로 만듦. 심지어 확장자도 붙여주지 않음
const upload = multer({
    dest: "uploads/", // 경로를 uploads 폴더 안에 저장하겠다
}); 

// 내가 원하는 경로, 파일명 설정하기
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done) {
            done(null, "uploads/");
        },
        filename: function(req, file, done){
            console.log("uploadDetail filename", req.body);
            console.log(file) // file.originalname : 미니언.webp일 때
            const ext = path.extname(file.originalname); // .webp가 담김
            const baseName = path.basename(file.originalname, ext); // 미니언이 담김
            // 미니언_중복될일없는숫자.webp로 만들어보겠음
            const fileName = baseName + "_" + Date.now() + ext;

            done(null, fileName);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
}); 

// 클라이언트가 uploads 폴더에 저장한 이미지파일에 접근할 수 있도록 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads")); // result.ejs에서 사용할 수 있게 됨!!

// - storage : 파일을 저장할 정보
    // diskStorage : 파일을 디스크에 저장하기 위한 메소드
    // destination : 파일이 저장될 경로 설정
    // filename : 파일명
// - limits : 파일 제한
    // fileSize : 파일 사이즈 제한(최대 크기)

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render("index");
});

// single() : 미들웨어 => 클라이언트가 보낸 요청 중에 userfile이라는 name의 파일 데이터가 있다면
// 파일을 multer의 설정대로 저장해서 req.file이라는 객체를 생성해서 다음 함수에 넘겨줌
app.post('/upload', upload.single('userfile'), function(req, res){
    console.log("file:",req.file);
    console.log("body:",req.body); // null값 나옴
    res.send("파일 업로드");
});

app.post('/upload/detail', uploadDetail.single('userfile'), function(req, res){
    console.log("file detail:", req.file);
    console.log("body detail:", req.body);
    res.render("result", {
        src: req.file.path,
        title: req.body.title,
    });
})

// array : 파일 여러개 업로드 (name(input) 하나로 여러개의 파일을 받는 방법)
// req.files 생성
app.post('/upload/array', uploadDetail.array("userfile"),function(req, res){
    console.log("file 여러 개(ver1):", req.files);
    res.send("여러개 업로드 ver1 성공!!");
});

// fields() : 파일 여러개 업로드. name이 두 개 이상(input 두 개 이상)
app.post('/upload/fields', uploadDetail.fields([{name: "userfile1"}, {name: "userfile2"}]), function(req, res){
    console.log("file 여러 개(ver2):", req.files);
    res.send("여러개 업로드 ver2 성공!!");
})

// 동적 파일 전송
app.post('/upload/dynamic', upload.single('userfile'), function(req, res){
    res.send({ src: req.file.path });
});

app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});