exports.commentInfos = () => {
    // mysql 연결 select * from comment;
    // 결과값 리턴한다고 가정
    return [{
        id: 1,
        userid: "seeun",
        date: "2023-10-26",
        comment: "huhuhu"
    },{
        id: 2,
        userid: "hongin",
        date: "2023-10-26",
        comment: "nanana"
    }];
}