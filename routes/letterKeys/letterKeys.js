const express = require('express');

const router = express.Router();

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
  res.render('letter_keys', {
    title: 'test',
  });
});

router.post('/', (req, res) => {
  const num = parseInt(req.body.input, 10);
  let output = '';
  const batteryCount = req.session.bominfo.aabatteries + req.session.bominfo.dbatteries;
  if (num === 69) {
    output = 'D';
  } else
  if (num % 6 === 0) {
    output = 'A';
  } else
  if (batteryCount >= 2 && num % 3 === 0) {
    output = 'B';
  } else
  if ((req.session.bominfo.serialNo.includes('c') || req.session.bominfo.serialNo.includes('e') || req.session.bominfo.serialNo.includes('3')) && (num >= 22 && num <= 79)) {
    output = 'B';
  } else
  if (req.session.bominfo.serialNo.includes('c') || req.session.bominfo.serialNo.includes('e') || req.session.bominfo.serialNo.includes('3')) {
    output = 'C';
  } else
  if (num < 46) {
    output = 'D';
  } else {
    output = 'A';
  }
  res.render('letter_keys', {
    output,
  });
});

module.exports = router;
