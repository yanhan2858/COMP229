/*
 * File name: index.js
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-05
 */

var express = require('express');
var router = express.Router();

var homeCursor = [
  'html, body { cursor: url(/Page/Static/Person.cur) 0 0, auto !important; }',
  'a:hover { cursor: url(/Page/Static/Help.cur) 0 0, auto !important; }'
].join('\n');

var contactCursor = [
  'html, body { cursor: url(/Page/Static/Person.cur) 0 0, auto !important; }',
  'a:hover { cursor: url(/Page/Static/Help.cur) 0 0, auto !important; }',
  'input:hover { cursor: url(/Page/Static/Handwriting.cur) 0 0, auto !important; }'
].join('\n');

var aboutCursor = [
  'html, body { cursor: url(/Page/Static/Person.cur) 0 0, auto !important; }',
  'a:hover { cursor: url(/Page/Static/Help.cur) 0 0, auto !important; }',
  'img.portrait { width: 160px; height: 160px; object-fit: cover; border-radius: 8px; }'
].join('\n');

var projectsStyle = [
  'body { margin: 0; color: #f4f1ea; background: #10262c; font-family: "Noto Serif JP", "Times New Roman", serif; }',
  'main { max-width: 880px; margin: 0 auto; padding: 24px 20px 48px; }',
  'article { margin-bottom: 28px; padding-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.25); }',
  'img { display: block; width: 160px; height: 96px; image-rendering: pixelated; }',
  'a { color: #f4f1ea; }'
].join('\n');

/* Section: routes for the same pages Live Server opens */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Homepage',
    currentPage: 'home',
    stylesheets: ['/Page/home.css', '/nav.css'],
    extraStyle: homeCursor,
    sent: req.query.sent === '1',
    senderName: req.query.from || ''
  });
});

router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'Student Web',
    currentPage: 'about',
    stylesheets: ['/studentweb/about.css', '/nav.css'],
    extraStyle: aboutCursor
  });
});

router.get('/projects', function (req, res, next) {
  res.render('projects', {
    title: 'Projects',
    currentPage: 'projects',
    stylesheets: ['/nav.css'],
    extraStyle: projectsStyle
  });
});

router.get('/services', function (req, res, next) {
  res.redirect('https://liyigarden.xyz');
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact',
    currentPage: 'contact',
    stylesheets: ['/Page/contact.css', '/nav.css'],
    extraStyle: contactCursor
  });
});

/* The form posts here. Keep the fields, then return to the home page. */
router.post('/contact', function (req, res, next) {
  var contactSubmission = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
    message: req.body.message
  };

  console.log('Contact form captured:', contactSubmission);
  res.redirect('/?sent=1&from=' + encodeURIComponent(contactSubmission.firstName || ''));
});

module.exports = router;
