const express = require('express');
const Maze = require('./maze.services');

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
    rm: [true, mazeService.getMaze(8), [[1, 1], [2, 2]]],
    // rm: [false, [null, null, null, null, null, null], null],
    rF(x) {
      return mazeService.renderField(x);
    },
  });
});

router.post('/', (req, res) => {
  // eslint-disable-next-line prefer-const
  let output = 'done!';
  const id = mazeService.getMazeId(req.body.idInput);
  // let id = mazeService.getMazeId('a1');
  output = id;
  const startcoord = mazeService.coordToId(req.body.startInput);
  const endcoord = mazeService.coordToId(req.body.endInput);
  res.render('maze', {
    output,
    rm: [true, mazeService.getMaze(id), [startcoord, endcoord]],
    rF(x) {
      return mazeService.renderField(x);
    },
  });
});

module.exports = router;
