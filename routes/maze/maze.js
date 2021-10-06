const express = require('express');
require('./maze.services');
const mazeService = new Maze();

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
    output: 'enter parameters',
    rendermaze: [false, [null,null,null,null,null,null]],
  });
});

router.post('/', (req, res) => {
  let output = "done!";
  res.render('maze', {
    output: output,
    rm: [true, mazes[1]],
    rF: function(x) {
      return mazeService.renderField(x);
    },
  });
});

module.exports = router;
