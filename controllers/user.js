const path = require('path');

const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
    User.findAll()
      .then(users => {
        res.sendFile(path.join(__dirname, '../' ,'views', 'booking.html'));
      })
      .catch(err => {
        console.log(err);
      });
  };

exports.PostAddUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    req.user.createUser({
        name: name,
        email: email,
        phone: phone
    })
    .then(result => {
        //console.log(result);
        console.log('Created User');
        res.redirect('/admin/user');
      })
      .catch(err => console.log(err));
};

exports.Deleteuser = async (req, res, next) => {
    try {
        const uId = req.params.id;
        console.log(uId);
        const result = await User.destroy({ where: { id: uId } });
        console.log(result);
        res.status(200).json({ message: 'Successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};