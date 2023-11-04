const Visitor = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = async (req, res) => {
  res.render("signup");
  try {
    const result = await Visitor.create({
      id: req.body.id,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
    console.log("signup result: ", result);
    res.send({ result: true });
  } catch (err) {
    console.error(err);
    console.log("실패다옹");
    res.render("signup");
  }
};

exports.signin = async (req, res) => {
  res.render("signin");
    const result = await Visitor.findOne({
      where: {
        userid: req.body.userid,
        pw: req.body.pw,
      },
    }).then((result) => {
      console.log();
      if (result) res.send({ result: true, id: result.id});
      else res.send({result: false});
    })
    };

  exports.profile = (req, res) => {
      Visitor.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
      }).then((result) => {
        console.log("signup result: ", result);
        res.send(result);
      });
  };

exports.edit = (req, res) => {
  Visitor.update(req.body, {
    where: {userid: req.body.userid}
  }).then((result) => {
    console.log("profile update: ", result);
    if (result[0]) res.send({result: true});
    else res.send({result: false});
  });
};

exports.delete = (req, res) => {
  Visitor.destroy({
    where: {
      userid: req.params.userid,
    },
  }).then((result) => {
    console.log("user delete: ", result);
    if(result) res.send({ result: true });
    else res.send({result: false});
  });
};


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
