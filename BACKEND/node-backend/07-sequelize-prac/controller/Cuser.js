const { Visitor } = require('../model/User');

exports.index = (req, res) => {
  res.render("index");
}

exports.signup = async (req, res) => {
    res.render("signup");
    // const visitor = Visitor.create({
    //     id: "1",
    //     userid: "jungseeun0310",
    //     pw: "rr212529!!r",
    //     name: "정세은"
    //   });
    const visit = await Visitor.create({
        id: req.body.id,
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
     })
    .then((result) => {
        console.log("signup result: ", result);
        res.send({ result: true });
    })
}

 exports.signin = (req, res) => {
    res.render("signin");
     Visitor.findOne({
         where: {
             userid: req.body.userid,
             pw: req.body.pw
         }
     }).then((result) => {
         alert("로그인 성공");
         res.render("profile");
     }).catch((err) => {
         alert("로그인 실패");
         res.render("signin");
     })
 }

exports.edit = (req, res) => {
    res.render("profile");
    Visitor.update({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
    },
    {
        where: { userid: req.params.userid }
    }).then((result) => {
        console.log("profile update: ", result)
        res.send(result);
    })
}

exports.delete = (req, res) => {
    res.render("profile");
    Visitor.destroy({
        where: {
            userid: req.params.userid
        }
    }).then((result) => {
        console.log("user delete: ", result);
        res.send({ result: true });
    })
}

exports.profile = (req, res) => {
    res.render("profile");
    Visitor.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
    }).then((result) => {
        console.log("signup result: ", result);
        res.send(result);
    })
}


// exports.signup = (req, res) => {
//   res.render('signup')
// }
// exports.post_signup = (req, res) => {
//   User.post_signup(req.body, function () {
//     res.send({ result: true })
//   })
// }

// exports.signin = (req, res) => {
//   res.render('signin')
// }
// exports.post_signin = (req, res) => {
//   User.post_signin(req.body, function (rows) {
//     console.log(rows[0])
//     if (rows.length > 0) res.send({ result: true, id: rows[0].id })
//     else res.send({ result: false })
//   })
// }

// exports.profile = (req, res) => {
//   User.get_user(req.body.id, function (result) {
//     console.log('profile', result)
//     if (result.length > 0) res.render('profile', { data: result[0] })
//     else res.redirect('/user/signin')
//   })
// }

// exports.profile_edit = (req, res) => {
//   const data = {
//     ...req.body,
//     id: req.params.id,
//   }
//   User.update_profile(data, function () {
//     res.send({ result: true })
//   })
// }

// exports.profile_delete = (req, res) => {
//   User.delete_user(req.params.id, function () {
//     res.send({ result: true })
//   })
// }