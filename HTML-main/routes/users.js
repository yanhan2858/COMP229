/*
 * File name: users.js
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-04
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
