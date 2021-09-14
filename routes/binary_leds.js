module.exports = function (app) {
  app.get('/binary_leds', (req, res) => {
    res.render('binary_leds', {
      title: 'test',
    });
  });

  app.post('/binary_leds', (req, res) => {
    if (req.body.submit == 'Submit') {
      console.log('hello');
    }
  });
};
