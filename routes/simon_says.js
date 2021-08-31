module.exports = function(app) {
  app.get('/simon_says', function (req, res){
    if (!req.session.bominfo) {
      console.log("Test data in gebruik.");
      req.session.bominfo = {
                              batteries: '3',
                              serialNo: '3ar62h',
                              port_dvi: '0',
                              port_parallel: '1',
                              port_ps2: '0',
                              port_rj45: '0',
                              port_serial: '2',
                              port_rca: '0',
                              snd: 'on',
                              sndlit: [ 'on', 'on' ]
                            }
    }
    req.session.simon_says = [];
    res.render('simon_says', {
      title: "",
      colours: [],
      box: 0,
    });
  });
  var input = [];
  var answer = [];
  var vowel = false

  app.post('/simon_says', function (req, res) {
    var letters = req.session.bominfo.serialNo.replace(/[0-9]/g, '');


    if(letters.includes("a") == true) {
      vowel = true
    }
    else if(letters.includes("e") == true) {
      vowel = true
    }
    else if(letters.includes("o") == true) {
      vowel = true
    }
    else if(letters.includes("i") == true) {
      vowel = true
    }
    else if(letters.includes("u") == true) {
      vowel = true
    }

    if (req.body.red == "") {
      input = ["red"];
    }
    else if (req.body.green == "") {
      input = ["green"];
    }
    else if (req.body.blue == "") {
      input = ["blue"];
    }
    else if (req.body.yellow == "") {
      input = ["yellow"];
    }

    if(vowel == true) {
      if(req.body.strikes == 0) {
        if(input == "red") {
          answer = "blue";
        }
        else if(input == "blue") {
          answer = "red";
        }
        else if(input == "green") {
          answer = "yellow";
        }
        else if(input == "yellow") {
          answer = "green";
        }
      }
      else if(req.body.strikes == 1) {
        if(input == "red") {
          answer = "yellow";
        }
        else if(input == "blue") {
          answer = "green";
        }
        else if(input == "green") {
          answer = "blue";
        }
        else if(input == "yellow") {
          answer = "red";
        }
      }
      else if(req.body.strikes >= 2) {
        if(input == "red") {
          answer = "green";
        }
        else if(input == "blue") {
          answer = "red";
        }
        else if(input == "green") {
          answer = "yellow";
        }
        else if(input == "yellow") {
          answer = "blue";
        }
      }
    }
    else if(vowel == false) {
      if(req.body.strikes == 0) {
        if(input == "red") {
          answer = "blue";
        }
        else if(input == "blue") {
          answer = "yellow";
        }
        else if(input == "green") {
          answer = "green";
        }
        else if(input == "yellow") {
          answer = "red";
        }
      }
      else if(req.body.strikes == 1) {
        if(input == "red") {
          answer = "red";
        }
        else if(input == "blue") {
          answer = "blue";
        }
        else if(input == "green") {
          answer = "yellow";
        }
        else if(input == "yellow") {
          answer = "green";
        }
      }
      else if(req.body.strikes >= 2) {
        if(input == "red") {
          answer = "yellow";
        }
        else if(input == "green") {
          answer = "red";
        }
        else if(input == "green") {
          answer = "blue";
        }
        else if(input == "yellow") {
          answer = "red";
        }
      }
    }

    res.render('simon_says', {
      title: "",
      colours: [answer],
      box: req.body.strikes,
    });
  });
}
