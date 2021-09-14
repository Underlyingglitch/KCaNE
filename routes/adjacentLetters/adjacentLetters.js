const express = require('express');
const { solveLetter } = require('./adjacentLetters.services');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('adjacent_letters', {
    title: '',
  });
});

let letters = new Array(12);

router.post('/', (req, res) => {
  if (req.body.submit === '') {
    letters = req.body.letters.split('');
  }

  const results = [
    solveLetter(letters[0], '', letters[4], letters[1], ''),
    solveLetter(letters[1], '', letters[5], letters[2], letters[0]),
    solveLetter(letters[2], '', letters[6], letters[3], letters[1]),
    solveLetter(letters[3], '', letters[7], '', letters[2]),
    solveLetter(letters[4], letters[0], letters[8], letters[5], ''),
    solveLetter(letters[5], letters[1], letters[9], letters[6], letters[4]),
    solveLetter(letters[6], letters[2], letters[10], letters[7], letters[5]),
    solveLetter(letters[7], letters[3], letters[11], '', letters[6]),
    solveLetter(letters[8], letters[4], '', letters[9], ''),
    solveLetter(letters[9], letters[5], '', letters[10], letters[8]),
    solveLetter(letters[10], letters[6], '', letters[11], letters[9]),
    solveLetter(letters[11], letters[7], '', '', letters[10]),
  ];

  const output = results.filter((result) => result);

  res.render('adjacent_letters', {
    title: output,
  });
});

module.exports = router;
