var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');
var VerifyToken = require('../auth/verifyToken');
const fetch = require('node-fetch')
const cors = require('cors');
router.use(cors());
const API_KEY = process.env.API_KEY
var jwt = require('jsonwebtoken');
var config = require('../config');

router.get('/getBars', VerifyToken, function (req, res) {
  let token = req.headers['x-access-token']
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    User.findById(decoded.id, function (err, user) {
  if (err) return res.status(500).send("There was a problem finding the user.");
  if (!user) return res.status(404).send("No user found.");
  fetchBars(user.location.coordinates, res)
    });
  });
});

function fetchBars(arg1, arg2){
  fetch(`https://api.yelp.com/v3/businesses/search?latitude=${arg1[1]}&longitude=${arg1[0]}&categories=bars`, {
          method: 'GET',
          headers: {
      'Authorization': `Bearer ${API_KEY}`
    },
  })
  .then(response => response.json())
  .then(result => arg2.status(200).send(result))
  .catch(error => console.log('error', error));
}

// CREATES A NEW USER
// router.post('/', function (req, res) {
//     User.create({
//             name : req.body.name,
//             email : req.body.email,
//             password : req.body.password
//         },
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
// router.get('/:id', function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!user) return res.status(404).send("No user found.");
//         res.status(200).send(user);
//     });
// });

// DELETES A USER FROM THE DATABASE
// router.delete('/:id', function (req, res) {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem deleting the user.");
//         res.status(200).send("User: "+ user.name +" was deleted.");
//     });
// });

// UPDATES A SINGLE USER IN THE DATABASE
// router.put('/:id', function (req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
//         if (err) return res.status(500).send("There was a problem updating the user.");
//         res.status(200).send(user);
//     });
// });



module.exports = router;
