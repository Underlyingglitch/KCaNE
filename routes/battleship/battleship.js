const express = require('express');
const Battleship = require('./battleship.services');

const battleshipService = new Battleship();

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
  let render = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  console.log(battleshipService.getFromSerial(0, 1, 1, req.session.bominfo.serialNo));
  res.render('battleship', {
    title: 'test',
    render,
  });
});

router.post('/', (req, res) => {
  res.render('battleship', {
    title: 'post',
  });
});

module.exports = router;
