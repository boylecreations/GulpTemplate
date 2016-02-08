var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    args: {
        welcome: {
          title: 'Boyle Creations',
          desc: 'A cool website',
          waypoint: '0vh'
        },
        blog: {
          title: 'Check out my Blog',
          desc: 'a bunch of blog info',
          waypoint: '100vh'
        },
        portfolio: {
          title: 'My Projects',
          desc: 'Handpicked projects from over the  years',
          waypoint: '200vh'
        },
        contact: {
          title: 'Lets get in Touch',
          desc: 'I am just an email away',
          waypoint: '300vh'
        }
      }
  });
});

module.exports = router;
