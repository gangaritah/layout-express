const bcrypt = require('bcryptjs');
const signingKey = require('../config/keys');


let auth = (req, res) => {
      let email = req.body.email
      let password = req.body.password
      console.log("Email", email);
      console.log("Password", password);
      return res.status(200).send(
        { status: 'authentication ok', auth: true}
      );
     
}


module.exports = {
  auth
}
