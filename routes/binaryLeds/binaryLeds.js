const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('binary_leds', {
    title: 'test',
  });
});

router.post('/', (req, res) => {
  if (req.body.submit == 'Submit') {
    console.log('hello');
  }
});

module.exports = router;
