module.exports = function (app) {
  app.get('/complicated_wires', (req, res) => {
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
        sndlit: ['on', 'on'],
      };
    }
    var outcome = outcome;
    res.render('complicated_wires', {
      title: '',
    });
  });

  app.post('/complicated_wires', (req, res) => {
    const batteries = req.session.bominfo.aabatteries + req.session.bominfo.dbatteries;
    let outcome = '';
    const digits = req.session.bominfo.serialNo.replace(/\D/g, '');
    const lastDigit = digits[digits.length - 1];

    function isEven(value) {
      if (value % 2 == 0) return true;
      return false;
    }

    if (req.body.red !== ('on') && req.body.blue !== ('on') && req.body.led !== ('on') && req.body.star !== ('on')) {
      outcome = 'cut';
    } else if (req.body.red !== ('on') && req.body.blue !== ('on') && req.body.led !== ('on') && req.body.star == ('on')) {
      outcome = 'cut';
    } else if (req.body.red == ('on') && req.body.blue !== ('on') && req.body.led !== ('on') && req.body.star == ('on')) {
      outcome = 'cut';
    } else if (req.body.red !== ('on') && req.body.blue !== ('on') && req.body.led == ('on') && req.body.star !== ('on')) {
      outcome = 'do not cut';
    } else if (req.body.red == ('on') && req.body.blue == ('on') && req.body.led == ('on') && req.body.star == ('on')) {
      outcome = 'do not cut';
    } else if (req.body.red !== ('on') && req.body.blue == ('on') && req.body.led !== ('on') && req.body.star == ('on')) {
      outcome = 'do not cut';
    } else if (req.body.red !== ('on') && req.body.blue == ('on') && req.body.led == ('on') && req.body.star == ('on')) {
      if (req.session.bominfo.port_parallel > 0) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red == ('on') && req.body.blue == ('on') && req.body.led !== ('on') && req.body.star == ('on')) {
      if (req.session.bominfo.port_parallel > 0) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red !== ('on') && req.body.blue == ('on') && req.body.led == ('on') && req.body.star !== ('on')) {
      if (req.session.bominfo.port_parallel > 0) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red == ('on') && req.body.blue !== ('on') && req.body.led == ('on') && req.body.star !== ('on')) {
      if (batteries > 1) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red == ('on') && req.body.blue !== ('on') && req.body.led == ('on') && req.body.star == ('on')) {
      if (batteries > 1) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red !== ('on') && req.body.blue !== ('on') && req.body.led == ('on') && req.body.star == ('on')) {
      if (batteries > 1) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red == ('on') && req.body.blue !== ('on') && req.body.led !== ('on') && req.body.star !== ('on')) {
      if (isEven(lastDigit) == true) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red !== ('on') && req.body.blue == ('on') && req.body.led !== ('on') && req.body.star !== ('on')) {
      if (isEven(lastDigit) == true) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red == ('on') && req.body.blue == ('on') && req.body.led !== ('on') && req.body.star !== ('on')) {
      if (isEven(lastDigit) == true) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    } else if (req.body.red == ('on') && req.body.blue == ('on') && req.body.led == ('on') && req.body.star !== ('on')) {
      if (isEven(lastDigit) == true) { outcome = 'cut'; } else {
        outcome = 'do not cut';
      }
    }

    res.render('complicated_wires', {
      title: outcome,
    });
  });
};
