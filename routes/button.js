module.exports = function(app) {
  app.get('/button', function (req, res){
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
                            }
    }
    req.session.button = ["colour", "word", "strip"];
    res.render('button', {
      title: "enter more information",
      buttoninfo1: "button colour",
      buttoninfo2: "button word",
      buttoninfo3: "strip colour",
    });
  });
  app.post('/button', function (req, res) {
    var batteries = req.session.bominfo.aabatteries + req.session.bominfo.dbatteries;
    if (!req.session.button) {
      req.session.button = ["buttonColour", "word", "stripColour"];
    }
    var buttonOutcome = "enter more information"
    var stripOutcome = ""

    if (req.body.red == "") {
      req.session.button[0] = "red";
    }
    else if (req.body.white == "") {
      req.session.button[0] = "white";
    }
    else if (req.body.blue == "") {
      req.session.button[0] = "blue";
    }
    else if (req.body.yellow == "") {
      req.session.button[0] = "yellow";
    }
    else if (req.body.black == "") {
      req.session.button[0] = "black";
    }
    else if (req.body.Abort == "Abort") {
      req.session.button[1] = "Abort";
    }
    else if (req.body.Detonate == "Detonate") {
      req.session.button[1] = "Detonate";
    }
    else if (req.body.Hold == "Hold") {
      req.session.button[1] = "Hold";
    }
    else if (req.body.Press == "Press") {
      req.session.button[1] = "Press";
    }
    else if (req.body.stripRed == "") {
      req.session.button[2] = "stripRed";
    }
    else if (req.body.stripWhite == "") {
      req.session.button[2] = "stripWhite";
    }
    else if (req.body.stripBlue == "") {
      req.session.button[2] = "stripBlue";
    }
    else if (req.body.stripYellow == "") {
      req.session.button[2] = "stripYellow";
    }

    if(req.session.button[0] == "blue" && req.session.button[1] == "Abort") {
      buttonOutcome = "hold the button "
    }
    else if(batteries > 1 && req.session.button[1] == "Detonate") {
      buttonOutcome = "press and immediatly release the button "
    }
    else if(req.session.button[0] == "white" && req.session.bominfo.carlit == "on") {
      buttonOutcome = "hold the button "
    }
    else if(batteries > 2 && req.session.bominfo.frklit == "on") {
      buttonOutcome = "hold the button "
    }
    else if(req.session.button[0] == "yellow") {
      buttonOutcome = "hold the button "
    }
    else if(req.session.button[0] == "red" && req.session.button[1] == "Hold") {
      buttonOutcome = "press and immediatly release the button "
    }
    else if(req.session.button[0] !== "buttonColour" && req.session.button[1] !== "word") {
      buttonOutcome = "hold the button "
    }

    if(req.session.button[0] !== "buttonColour" && req.session.button[1] !== "word") {
      if (batteries > 1 && req.session.button[1] == "Detonate") {

      }
      else {
        if (req.session.button[0] == "red" && req.session.button[1] == "Hold") {

        }
        else {
          if(req.session.button[2] == "stripBlue") {
            stripOutcome = "and release when timer has a 4"
          }
          else if(req.session.button[2] == "stripYellow") {
            stripOutcome = "and release when timer has a 5"
          }
          else if(req.session.button[2] !== "strip") {
            stripOutcome = "and release when timer has a 1"
          }
        }
      }
    }

    res.render('button', {
      title: buttonOutcome + stripOutcome,
      buttoninfo1: "button colour",
      buttoninfo2: "button word",
      buttoninfo3: "strip colour",
    });
  });
}
