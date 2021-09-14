module.exports = function (app) {
  app.get('/battleship', (req, res) => {
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
    // hello
    req.session.battleship = [];
    res.render('battleship', {
      title: null,
    });
  });

  app.post('/battleship', (req, res) => {
    if (!req.session.battleship) {
      req.session.battleship = [];
    }

    res.render('battleship', {
      title: null,
    });
  });
};
