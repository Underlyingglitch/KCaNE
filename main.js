const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
var fs = require('fs');

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

app.use(session({secret: "Shh, its a secret!"}));

// Load index.pug
app.get('/', function (req, res) {
  res.render('index', {
    title: "default",
  });
});



app.post('/', function (req, res) {
  console.log(req.body);
  if (req.body.pizzatime == "") {
    console.log("pizza");
  }
  else if (req.body.pastatime == "") {
    console.log("pasta");
  }
  req.session.bominfo = req.body;
  res.render('index', {
    title: req.session.bominfo.serialNo
  });
});


app.get('/test', function (req, res) {
  if (req.session.test) {
    res.send(req.session);
  }
  else {
    res.send("fuck you");
  }

});


app.get('/module/:moduleId', function (req, res) {
  res.send(req.params["moduleId"])
});

fs.readdirSync(path.join(__dirname, '/routes')).forEach(function(file) {
  var name = file.substr(0, file.indexOf('.'));
  require('./routes/' + name)(app);
});

// Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
