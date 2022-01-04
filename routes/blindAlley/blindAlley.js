const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.bominfo) {
    console.log('Test data in gebruik.');
    req.session.bominfo = {
      aabatteries: '3',
      dbatteries: '3',
      batteryHolders: '4',
      serialNo: '3ar62h',
      port_dvi: '0',
      port_parallel: '1',
      port_ps2: '0',
      port_rj45: '0',
      port_serial: '2',
      port_rca: '0',
      snd: 'on',
    };
  }
  console.log(req.session.bominfo);
  const outputs = {
    TopLeft: 0,
    TopMid: 0,
    MidLeft: 0,
    Mid: 0,
    MidRight: 0,
    BottomLeft: 0,
    BottomMid: 0,
    BottomRight: 0,
  };

  // check statements for first region
  if (Object.keys(req.session.bominfo).includes('bob')) {
    outputs.TopLeft += 1;
  }
  if (Object.keys(req.session.bominfo).includes('carlit')) {
    outputs.TopLeft += 1;
  }
  if (Object.keys(req.session.bominfo).includes('indlit')) {
    outputs.TopLeft += 1;
  }
  if (req.session.bominfo.batteryHolders % 2 === 0) {
    outputs.TopLeft += 1;
  }

  // check statements for second region
  if (Object.keys(req.session.bominfo).includes('car')) {
    outputs.TopMid += 1;
  }
  if (Object.keys(req.session.bominfo).includes('nsa')) {
    outputs.TopMid += 1;
  }
  if (Object.keys(req.session.bominfo).includes('frklit')) {
    outputs.TopMid += 1;
  }
  if (req.session.bominfo.port_rj45 > 0) {
    outputs.TopMid += 1;
  }

  // check statements for third region
  if (Object.keys(req.session.bominfo).includes('frq')) {
    outputs.MidLeft += 1;
  }
  if (Object.keys(req.session.bominfo).includes('ind')) {
    outputs.MidLeft += 1;
  }
  if (Object.keys(req.session.bominfo).includes('trn')) {
    outputs.MidLeft += 1;
  }
  if (req.session.bominfo.port_dvi > 0) {
    outputs.MidLeft += 1;
  }

  // check statements for fourth region
  if (Object.keys(req.session.bominfo).includes('sig')) {
    outputs.Mid += 1;
  }
  if (Object.keys(req.session.bominfo).includes('snd')) {
    outputs.Mid += 1;
    console.log('snd');
  }
  if (Object.keys(req.session.bominfo).includes('nsalit')) {
    outputs.Mid += 1;
  }
  if ((parseInt(req.session.bominfo.aabatteries, 10)
   + parseInt(req.session.bominfo.dbatteries, 10)) % 2 === 0) {
    outputs.Mid += 1;
    console.log('even');
  }

  // check statements for fifth region
  if (Object.keys(req.session.bominfo).includes('boblit')) {
    outputs.MidRight += 1;
  }
  if (Object.keys(req.session.bominfo).includes('clrlit')) {
    outputs.MidRight += 1;
  }
  if (req.session.bominfo.port_ps2 > 0) {
    outputs.MidRight += 1;
  }
  if (req.session.bominfo.port_serial > 0) {
    outputs.MidRight += 1;
  }

  // check statements for sixth region

  const serialIntegers = req.session.bominfo.serialNo.replace(/\D/g, '');
  let evenCheck = false;
  for (let i = 0; i < serialIntegers.length; i += 1) {
    if (parseInt(serialIntegers[i], 10) % 2 === 0) {
      evenCheck = true;
    }
  }
  if (Object.keys(req.session.bominfo).includes('frqlit')) {
    outputs.BottomLeft += 1;
  }
  if (Object.keys(req.session.bominfo).includes('siglit')) {
    outputs.BottomLeft += 1;
  }
  if (Object.keys(req.session.bominfo).includes('trnlit')) {
    outputs.BottomLeft += 1;
  }
  if (evenCheck) {
    outputs.BottomLeft += 1;
  }

  // check statements for seventh region

  function isVowel(x) {
    let result = x;
    result = x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u';
    return result;
  }
  let vowelCheck = false;
  for (let i = 0; i < req.session.bominfo.serialNo.length; i += 1) {
    if (isVowel(req.session.bominfo.serialNo.charAt(i))) {
      vowelCheck = true;
    }
  }

  if (Object.keys(req.session.bominfo).includes('frk')) {
    outputs.BottomMid += 1;
  }
  if (Object.keys(req.session.bominfo).includes('msalit')) {
    outputs.BottomMid += 1;
  }
  if (req.session.bominfo.port_parallel > 0) {
    outputs.BottomMid += 1;
  }
  if (vowelCheck) {
    outputs.BottomMid += 1;
  }

  // check statements for last region

  if (Object.keys(req.session.bominfo).includes('clr')) {
    outputs.BottomRight += 1;
  }
  if (Object.keys(req.session.bominfo).includes('msa')) {
    outputs.BottomRight += 1;
  }
  if (Object.keys(req.session.bominfo).includes('sndlit')) {
    outputs.BottomRight += 1;
  }
  if (req.session.bominfo.port_rca > 0) {
    outputs.BottomRight += 1;
  }

  // log the outputs
  console.log(outputs);
  res.render('blind_alley', {
    title: 'test',
  });
});

router.post('/', (req, res) => {
  res.render('blind_alley', {
    title: '',
  });
});

module.exports = router;
