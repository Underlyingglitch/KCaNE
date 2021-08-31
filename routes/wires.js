module.exports = function(app) {
  app.get('/wires', function (req, res){
    if (!req.session.bominfo) {
      console.log("Test data in gebruik.");
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
                              sndlit: [ 'on', 'on' ]
                            }
    }
    req.session.wires = [];
    res.render('wires', {
      title: "add a wire",
      colours: []
    });
  });

  app.post('/wires', function (req, res) {
    if (!req.session.wires) {
      req.session.wires = [];
    }

    if (req.body.delete == "X") {
      if (req.session.wires.length > 0) {
        req.session.wires.length = req.session.wires.length - 1;
      }
    }
    if (req.session.wires.length < 6) {
      if (req.body.red == "") {
        req.session.wires.push("red");
      }
      else if (req.body.white == "") {
        req.session.wires.push("white");
      }
      else if (req.body.blue == "") {
        req.session.wires.push("blue");
      }
      else if (req.body.yellow == "") {
        req.session.wires.push("yellow");
      }
      else if (req.body.black == "") {
        req.session.wires.push("black");
      }
    }
    var lastWire = req.session.wires[req.session.wires.length - 1];
    var uniq = req.session.wires
      .map((name) => {
        return {
          count: 1,
          name: name
        }
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
      }, {})
    var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
    var outcome = "enter wires"
    var str = ".1abc2.5efg3mno";
    var digits = req.session.bominfo.serialNo.replace(/\D/g, "");
    var lastDigit = digits[digits.length - 1];

    function isEven(value) {
      if (value%2 == 0)
          return true;
      else
          return false;
    }

    if (req.session.wires.length == 3) {
      if (req.session.wires.includes("red") == false) {
            outcome = "cut the second wire";
            }
      else if (lastWire == "white") {
          outcome = "cut the last wire"
          }
      else if (duplicates.includes("blue") == true){
          outcome = "cut the last blue wire"
          }
      else {
          outcome = "cut the last wire"
      }
    }
    else if (req.session.wires.length == 4) {
        if (duplicates.includes("red") == true && isEven(lastDigit) == false) {
          outcome = "cut the last red wire"
        }
        else if (req.session.wires.includes("red") == false && lastWire == "yellow") {
          outcome = "cut the first wire"
        }
        else if (req.session.wires.includes("blue") == true && duplicates.includes("blue") == false) {
          outcome = "cut the first wire"
        }
        else if (duplicates.includes("yellow") == true) {
          outcome = "cut the last wire"
        }
        else {
          outcome = "cut the second wire"
        }
    }
    else if (req.session.wires.length == 5) {
        if (lastWire == "black" && isEven(lastDigit) == false) {
          outcome = "cut the fourth wire"
        }
        else if (req.session.wires.includes("red") == true && duplicates.includes("red") == false && duplicates.includes("yellow") == true) {
          outcome = "cut the first wire"
        }
        else if (req.session.wires.includes("black") == false) {
          outcome = "cut the second wire"
        }
        else {
          outcome = "cut the first wire"
        }

    }
    else if (req.session.wires.length == 6) {
      if (req.session.wires.includes("yellow") == false && isEven(lastDigit) == false) {
        outcome = "cut the third wire"
      }
      else if (req.session.wires.includes("yellow") == true && duplicates.includes("yellow") == false && duplicates.includes("white")) {
        outcome = "cut the fourth wire"
      }
      else if (req.session.wires.includes("red") == false) {
        outcome = "cut the last wire"
      }
      else {
        outcome = "cut the fourth wire"
      }

    }
    res.render('wires', {
      title: outcome,
      colours: req.session.wires
    });
  });
}
