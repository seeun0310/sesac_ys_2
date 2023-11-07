const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw (pw) {
    return bcrypt.hashSync(pw, salt)
}

console.log("pw 1234: ", bcryptPw("1234"));

const dbPw = bcryptPw("1234");

function comparePw (pw, dbPw) {
    return bcrypt.compareSync(pw, dbPw);
}

console.log("compare pw 1234: ", comparePw("1234", dbPw));