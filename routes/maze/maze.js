const mazes = [
  [
    0000,1000,0001,0100,1000,1000,
    0001,0110,1001,1100,1010,0010,
    0001,1100,0011,0110,1010,0000,
    0001,1110,1000,1001,1110,0000,
    0000,1010,0011,0110,1011,0100,
    0000,0011,0100,0001,0110,0000
  ]
];

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
  res.render('maze', {
    title: 'maze',
    mazes: mazes[0],
  });
});

router.post('/', (req, res) => {

  res.render('maze', {
    title: "post",
  });
});

module.exports = router;
