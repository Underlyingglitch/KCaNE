const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const fs = require('fs');

const upload = multer();
const app = express();
const port = 3000;

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static('public'));

app.use(session({ secret: 'Shh, its a secret!' }));

// Load index.pug
app.get('/', (req, res) => {
  if (typeof req.session.bominfo === 'undefined') {
    res.render('index', {
      title: 'default',
    });
  } else {
    res.render('index', {
      title: req.session.bominfo.serialNo,
    });
  }
});

app.post('/', (req, res) => {
  if (req.body.reset === '') {
    req.session.destroy();
  } else if (req.body.submit === '') {
    req.session.bominfo = req.body;
  }
  if (typeof req.session === 'undefined') {
    res.render('index', {
      title: 'default',
    });
  } else {
    res.render('index', {
      title: req.session.bominfo.serialNo,
    });
  }
});

app.get('/module/:moduleId', (req, res) => {
  res.send(req.params.moduleId);
});

fs.readdirSync(path.join(__dirname, '/routes')).forEach((file) => {
  const name = file.substr(0, file.indexOf('.'));
  require(`./routes/${name}`)(app);
});

// Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
