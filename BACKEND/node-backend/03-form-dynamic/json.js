const data = {name: "seeun", gender: "woman"};

const jsonData = JSON.stringify(data);

console.log("json: ", jsonData); // 직렬화(객체 -> json)

console.log("js object: ", JSON.parse(jsonData)); // 역직렬화(json -> 객체)