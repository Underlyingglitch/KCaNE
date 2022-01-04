const express = require('express');

const router = express.Router();

const index = require('./fastMathValues.json');

router.get('/', (req, res) => {
  if (!req.session.bominfo) {
    console.log('Test data in gebruik.');
    req.session.bominfo = {
      aabatteries: '3',
      dbatteries: '3',
      serialNo: '3yr62h',
      port_dvi: '0',
      port_parallel: '1',
      port_ps2: '0',
      port_rj45: '0',
      port_serial: '2',
      port_rca: '0',
      snd: 'on',
    };
  }
  res.render('fast_math', {
    title: 'test',
  });
});

router.post('/', (req, res) => {
  const letters = req.body.input.toUpperCase();
  const first = letters.charAt(0);
  const second = letters.charAt(1);
  let output = '';

  function format(num) {
    if (num.toString().length < 2) {
      return `0${num}`;
    }
    return num;
  }

  if (Object.keys(index).includes(first) && Object.keys(index).includes(second)) {
    output = index[first][second];

    if (Object.keys(req.session.bominfo).includes('msa_lit')) {
      output += 20;
    }
    if (req.session.bominfo.port_serial > 0) {
      output += 14;
    }
    if (req.session.bominfo.serialNo.includes('f') || req.session.bominfo.serialNo.includes('a') || req.session.bominfo.serialNo.includes('s') || req.session.bominfo.serialNo.includes('t')) {
      output -= 5;
    }
    if (req.session.bominfo.port_rj45 > 0) {
      output += 27;
    }
    if ((parseInt(req.session.bominfo.aabatteries, 10)
    + parseInt(req.session.bominfo.dbatteries, 10)) > 3) {
      output -= 15;
    }
    if (output > 99) {
      output -= 100;
    }
    if (output < 0) {
      output += 50;
    }
    output = format(output);
  } else {
    output = 'Enter valid letters';
  }

  res.render('fast_math', {
    output,
  });
});

module.exports = router;
