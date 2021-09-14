const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('anagrams', {
    output: '',
  });
});

let output = '';

router.post('/', (req, res) => {
  function wordCheck(word1, word2, word3) {
    if (req.body.input == word1 || req.body.input == word3) {
      output = word2;
    } else if (req.body.input == word2) {
      output = word3;
    }
  }
  if (req.body.submit == '') {
    wordCheck('stream', 'master', 'tamers');
    wordCheck('looped', 'poodle', 'pooled');
    wordCheck('cellar', 'caller', 'recall');
    wordCheck('seated', 'sedate', 'teased');
    wordCheck('rescue', 'secure', 'recuse');
    wordCheck('rashes', 'shears', 'shares');
    wordCheck('barely', 'barley', 'bleary');
    wordCheck('duster', 'rusted', 'rudest');
  }
  res.render('anagrams', {
    output,
  });
});

module.exports = router;
