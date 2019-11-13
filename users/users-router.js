const router = require('express').Router();
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

// MAKE NAIVE makeToken AND verifyToken functions!!
// do this on a front - end script so you can use btoa and atob functions
// you can load a hashing function like md5 using a script tag

router.get('/', restricted, (req, res) => {
  
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.json({message: 'You shall not pass' + '-' + err.message})
      });

});

module.exports = router;