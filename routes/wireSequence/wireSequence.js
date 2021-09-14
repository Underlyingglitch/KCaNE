const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.bominfo) {
    console.log('Test data in gebruik.');
    req.session.bominfo = {
      batteries: '3',
      serialNo: '3yr62h',
      port_dvi: '0',
      port_parallel: '1',
      port_ps2: '0',
      port_rj45: '0',
      port_serial: '2',
      port_rca: '0',
      snd: 'on',
      sndlit: ['on', 'on'],
    };
  }
  res.render('wire_sequence', {
    title: '',
  });
});

router.post('/', (req, res) => {
  let redList1 = [];
  let blueList1 = [];
  let blackList1 = [];

  if (req.body.reset === '') {
    redList1 = [];
    blueList1 = [];
    blackList1 = [];
  }
  let outcome = '';

  if (req.body.red === 'on') {
    if (req.body.a === 'on') {
      redList1.push('a');
    } else if (req.body.b === 'on') {
      redList1.push('b');
    } else if (req.body.c === 'on') {
      redList1.push('c');
    }
    if (redList1.length === 1) {
      if (redList1[0] === 'a') {
        outcome = 'do not cut';
      }
      if (redList1[0] === 'b') {
        outcome = 'do not cut';
      }
      if (redList1[0] === 'c') {
        outcome = 'cut';
      }
    } else if (redList1.length === 2) {
      if (redList1[1] === 'a') {
        outcome = 'do not cut';
      }
      if (redList1[1] === 'b') {
        outcome = 'cut';
      }
      if (redList1[1] === 'c') {
        outcome = 'do not cut';
      }
    } else if (redList1.length === 3) {
      if (redList1[2] === 'a') {
        outcome = 'cut';
      }
      if (redList1[2] === 'b') {
        outcome = 'do not cut';
      }
      if (redList1[2] === 'c') {
        outcome = 'do not cut';
      }
    } else if (redList1.length === 4) {
      if (redList1[3] === 'a') {
        outcome = 'cut';
      }
      if (redList1[3] === 'b') {
        outcome = 'do not cut';
      }
      if (redList1[3] === 'c') {
        outcome = 'cut';
      }
    } else if (redList1.length === 5) {
      if (redList1[4] === 'a') {
        outcome = 'do not cut';
      }
      if (redList1[4] === 'b') {
        outcome = 'cut';
      }
      if (redList1[4] === 'c') {
        outcome = 'do not cut';
      }
    } else if (redList1.length === 6) {
      if (redList1[5] === 'a') {
        outcome = 'cut';
      }
      if (redList1[5] === 'b') {
        outcome = 'do not cut';
      }
      if (redList1[5] === 'c') {
        outcome = 'cut';
      }
    } else if (redList1.length === 7) {
      if (redList1[6] === 'a') {
        outcome = 'cut';
      }
      if (redList1[6] === 'b') {
        outcome = 'cut';
      }
      if (redList1[6] === 'c') {
        outcome = 'cut';
      }
    } else if (redList1.length === 8) {
      if (redList1[7] === 'a') {
        outcome = 'cut';
      }
      if (redList1[7] === 'b') {
        outcome = 'cut';
      }
      if (redList1[7] === 'c') {
        outcome = 'do not cut';
      }
    } else if (redList1.length === 9) {
      if (redList1[8] === 'a') {
        outcome = 'do not cut';
      }
      if (redList1[8] === 'b') {
        outcome = 'cut';
      }
      if (redList1[8] === 'c') {
        outcome = 'do not cut';
      }
    }
  } else if (req.body.blue === 'on') {
    if (req.body.a === 'on') {
      blueList1.push('a');
    } else if (req.body.b === 'on') {
      blueList1.push('b');
    } else if (req.body.c === 'on') {
      blueList1.push('c');
    }
    if (blueList1.length === 1) {
      if (blueList1[0] === 'a') {
        outcome = 'do not cut';
      }
      if (blueList1[0] === 'b') {
        outcome = 'cut';
      }
      if (blueList1[0] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blueList1.length === 2) {
      if (blueList1[1] === 'a') {
        outcome = 'cut';
      }
      if (blueList1[1] === 'b') {
        outcome = 'do not cut';
      }
      if (blueList1[1] === 'c') {
        outcome = 'cut';
      }
    } else if (blueList1.length === 3) {
      if (blueList1[2] === 'a') {
        outcome = 'do not cut';
      }
      if (blueList1[2] === 'b') {
        outcome = 'cut';
      }
      if (blueList1[2] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blueList1.length === 4) {
      if (blueList1[3] === 'a') {
        outcome = 'cut';
      }
      if (blueList1[3] === 'b') {
        outcome = 'do not cut';
      }
      if (blueList1[3] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blueList1.length === 5) {
      if (blueList1[4] === 'a') {
        outcome = 'do not cut';
      }
      if (blueList1[4] === 'b') {
        outcome = 'cut';
      }
      if (blueList1[4] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blueList1.length === 6) {
      if (blueList1[5] === 'a') {
        outcome = 'do not cut';
      }
      if (blueList1[5] === 'b') {
        outcome = 'cut';
      }
      if (blueList1[5] === 'c') {
        outcome = 'cut';
      }
    } else if (blueList1.length === 7) {
      if (blueList1[6] === 'a') {
        outcome = 'do not cut';
      }
      if (blueList1[6] === 'b') {
        outcome = 'do not cut';
      }
      if (blueList1[6] === 'c') {
        outcome = 'cut';
      }
    } else if (blueList1.length === 8) {
      if (blueList1[7] === 'a') {
        outcome = 'cut';
      }
      if (blueList1[7] === 'b') {
        outcome = 'do not cut';
      }
      if (blueList1[7] === 'c') {
        outcome = 'cut';
      }
    } else if (blueList1.length === 9) {
      if (blueList1[8] === 'a') {
        outcome = 'cut';
      }
      if (blueList1[8] === 'b') {
        outcome = 'do not cut';
      }
      if (blueList1[8] === 'c') {
        outcome = 'do not cut';
      }
    }
  } else if (req.body.black === 'on') {
    if (req.body.a === 'on') {
      blackList1.push('a');
    } else if (req.body.b === 'on') {
      blackList1.push('b');
    } else if (req.body.c === 'on') {
      blackList1.push('c');
    }
    if (blackList1.length === 1) {
      if (blackList1[0] === 'a') {
        outcome = 'cut';
      }
      if (blackList1[0] === 'b') {
        outcome = 'cut';
      }
      if (blackList1[0] === 'c') {
        outcome = 'cut';
      }
    } else if (blackList1.length === 2) {
      if (blackList1[1] === 'a') {
        outcome = 'cut';
      }
      if (blackList1[1] === 'b') {
        outcome = 'do not cut';
      }
      if (blackList1[1] === 'c') {
        outcome = 'cut';
      }
    } else if (blackList1.length === 3) {
      if (blackList1[2] === 'a') {
        outcome = 'do not cut';
      }
      if (blackList1[2] === 'b') {
        outcome = 'cut';
      }
      if (blackList1[2] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blackList1.length === 4) {
      if (blackList1[3] === 'a') {
        outcome = 'cut';
      }
      if (blackList1[3] === 'b') {
        outcome = 'do not cut';
      }
      if (blackList1[3] === 'c') {
        outcome = 'cut';
      }
    } else if (blackList1.length === 5) {
      if (blackList1[4] === 'a') {
        outcome = 'do not cut';
      }
      if (blackList1[4] === 'b') {
        outcome = 'cut';
      }
      if (blackList1[4] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blackList1.length === 6) {
      if (blackList1[5] === 'a') {
        outcome = 'do not cut';
      }
      if (blackList1[5] === 'b') {
        outcome = 'cut';
      }
      if (blackList1[5] === 'c') {
        outcome = 'cut';
      }
    } else if (blackList1.length === 7) {
      if (blackList1[6] === 'a') {
        outcome = 'cut';
      }
      if (blackList1[6] === 'b') {
        outcome = 'cut';
      }
      if (blackList1[6] === 'c') {
        outcome = 'do not cut';
      }
    } else if (blackList1.length === 8) {
      if (blackList1[7] === 'a') {
        outcome = 'do not cut';
      }
      if (blackList1[7] === 'b') {
        outcome = 'do not cut';
      }
      if (blackList1[7] === 'c') {
        outcome = 'cut';
      }
    } else if (blackList1.length === 9) {
      if (blackList1[8] === 'a') {
        outcome = 'do not cut';
      }
      if (blackList1[8] === 'b') {
        outcome = 'do not cut';
      }
      if (blackList1[8] === 'c') {
        outcome = 'cut';
      }
    }
  }

  console.log(redList1);

  res.render('wire_sequence', {
    title: outcome,
    redList: redList1,
    blueList: blueList1,
    blackList: blackList1,
  });
});

module.exports = router;
