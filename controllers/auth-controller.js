const bcrypt = require('bcryptjs');
const signingKey = require('../config/keys');
const signingKey = require('../config/keys');


let auth = (req, res) => {
      let email = req.body.email
      let password = req.body.password
      console.log("Email", email);
      console.log("Password", password);

      let token = generateToken(
        { email: email }, signingKey.SIGNING_KEY,
        new Date().getTime() + (2 * 60 * 1000)
        );


      let cookieConfig = {
                            domain: 'localhost', path: '/refresh', secure: false,
                            expires: new Date(Date.now() + 300000), httpOnly: true
                          }

      return res.status(200).cookie('refresh_token', email, cookieConfig)
                              .json({ 
                                status: 'Successful authentication', token: token
                              });
     
}


module.exports = {
  auth
}
