module.exports = function (app) {
    app.get('/maze', (req, res) => {
      res.render('maze', {
        title: '',
      });
    });
  
    app.post('/maze', (req, res) => {
  
      if (req.body.submit == '') {
  
      }
  
      res.render('maze', {
        title: '',
      });
    });
  };