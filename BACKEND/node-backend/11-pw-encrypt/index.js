const crypto = require("crypto");

function createHastedPw(pw) {
    return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log(createHastedPw("1234"));
console.log(createHastedPw("1235"));

const input = "1234";

const db_pw = "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w=="
console.log("compare result: ", createHastedPw(input) == db_pw);
// true


function createHashedPwWithSalt(pw) {
    const salt = crypto.randomBytes(16).toString("base64");
    console.log("salt: ", salt);
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
    // 암호화 할 문자열, salt, 반복 횟수
}

function comparePw (pw, salt) {
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}

const db_pw_salt = "fv0k/6T9k5kYHlgbsfFB4UKBV9Lp1OmmreQcoN40c8Ie98y2Dzge/6ZcrzVcEaydnfnyUrz2A/MN2B5wlpC7ow==";
const db_salt = "3HiF2rCFS192YhQMwW0r4w==";
console.log("compare result: ", createHashedPwWithSalt(input) == db_pw_salt);
// false : salt가 실행시마다 계속 달라져서 보안력 대박임

const dbPwSalt = "fv0k/6T9k5kYHlgbsfFB4UKBV9Lp1OmmreQcoN40c8Ie98y2Dzge/6ZcrzVcEaydnfnyUrz2A/MN2B5wlpC7ow==";
const dbSalt = "3HiF2rCFS192YhQMwW0r4w==";
console.log("compare result with salt: ", comparePw(input, dbSalt) == db_pw_salt);
// true : salt도 저장했기 때문에 true로 뜸 굿굿 이게 답임

console.log("pw 1234 with salt: ", createHashedPwWithSalt("1234"));

