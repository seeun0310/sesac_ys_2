exports.mvc = () => {
    let users =
    `spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

    // let i = [users.split("\n")];

    let i = users.split("\n");
    let won = i[0].split("//");
    let two = i[1].split("//");
    let three = i[2].split("//");
    console.log(won);
    console.log(two);
    console.log(three);

    return {
        won: won,
        two: two,
        three: three
    };
}
