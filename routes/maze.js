module.exports = function(app) {
  app.get('/maze', function (req, res){

    res.render('maze', {
      title: "",
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
      a5: a5,
      a6: a6,
      b1: b1,
      b2: b2,
      b3: b3,
      b4: b4,
      b5: b5,
      b6: b6,
      c1: c1,
      c2: c2,
      c3: c3,
      c4: c4,
      c5: c5,
      c6: c6,
      d1: d1,
      d2: d2,
      d3: d3,
      d4: d4,
      d5: d5,
      d6: d6,
      e1: e1,
      e2: e2,
      e3: e3,
      e4: e4,
      e5: e5,
      e6: e6,
      f1: f1,
      f2: f2,
      f3: f3,
      f4: f4,
      f5: f5,
      f6: f6,
      a1color: "",
      a2color: "",
      a3color: "",
      a4color: "",
      a5color: "",
      a6color: "",
      b1color: "",
      b2color: "",
      b3color: "",
      b4color: "",
      b5color: "",
      b6color: "",
      c1color: "",
      c2color: "",
      c3color: "",
      c4color: "",
      c5color: "",
      c6color: "",
      d1color: "",
      d2color: "",
      d3color: "",
      d4color: "",
      d5color: "",
      d6color: "",
      e1color: "",
      e2color: "",
      e3color: "",
      e4color: "",
      e5color: "",
      e6color: "",
      f1color: "",
      f2color: "",
      f3color: "",
      f4color: "",
      f5color: "",
      f6color: "",
    });
  });

  var a1 = "";
  var a2 = "";
  var a3 = "";
  var a4 = "";
  var a5 = "";
  var a6 = "";
  var b1 = "";
  var b2 = "";
  var b3 = "";
  var b4 = "";
  var b5 = "";
  var b6 = "";
  var c1 = "";
  var c2 = "";
  var c3 = "";
  var c4 = "";
  var c5 = "";
  var c6 = "";
  var d1 = "";
  var d2 = "";
  var d3 = "";
  var d4 = "";
  var d5 = "";
  var d6 = "";
  var e1 = "";
  var e2 = "";
  var e3 = "";
  var e4 = "";
  var e5 = "";
  var e6 = "";
  var f1 = "";
  var f2 = "";
  var f3 = "";
  var f4 = "";
  var f5 = "";
  var f6 = "";
  var a1color = "";
  var a2color = "";
  var a3color = "";
  var a4color = "";
  var a5color = "";
  var a6color = "";
  var b1color = "";
  var b2color = "";
  var b3color = "";
  var b4color = "";
  var b5color = "";
  var b6color = "";
  var c1color = "";
  var c2color = "";
  var c3color = "";
  var c4color = "";
  var c5color = "";
  var c6color = "";
  var d1color = "";
  var d2color = "";
  var d3color = "";
  var d4color = "";
  var d5color = "";
  var d6color = "";
  var e1color = "";
  var e2color = "";
  var e3color = "";
  var e4color = "";
  var e5color = "";
  var e6color = "";
  var f1color = "";
  var f2color = "";
  var f3color = "";
  var f4color = "";
  var f5color = "";
  var f6color = "";
  app.post('/maze', function (req, res) {
    function clearColor() {
      a1color = "";
      a2color = "";
      a3color = "";
      a4color = "";
      a5color = "";
      a6color = "";
      b1color = "";
      b2color = "";
      b3color = "";
      b4color = "";
      b5color = "";
      b6color = "";
      c1color = "";
      c2color = "";
      c3color = "";
      c4color = "";
      c5color = "";
      c6color = "";
      d1color = "";
      d2color = "";
      d3color = "";
      d4color = "";
      d5color = "";
      d6color = "";
      e1color = "";
      e2color = "";
      e3color = "";
      e4color = "";
      e5color = "";
      e6color = "";
      f1color = "";
      f2color = "";
      f3color = "";
      f4color = "";
      f5color = "";
      f6color = "";
    }
    var maze = "";

    if (req.body.submit == "") {

    }
    if (req.body.idInput == "a2" || req.body.idInput == "f3") {
      maze = "1";
    }
    else if (req.body.idInput == "b4" || req.body.idInput == "e2") {
      maze = "2";
    }
    else if (req.body.idInput == "d4" || req.body.idInput == "f4") {
      maze = "3";
    }
    else if (req.body.idInput == "a1" || req.body.idInput == "a4") {
      maze = "4";
    }
    else if (req.body.idInput == "d6" || req.body.idInput == "e3") {
      maze = "5";
    }
    else if (req.body.idInput == "c5" || req.body.idInput == "e1") {
      maze = "6";
    }
    else if (req.body.idInput == "b1" || req.body.idInput == "b6") {
      maze = "7";
    }
    else if (req.body.idInput == "c4" || req.body.idInput == "d1") {
      maze = "8";
    }
    else if (req.body.idInput == "a5" || req.body.idInput == "c2") {
      maze = "9";
    }

    if(maze == "1") {
      a1 = "";
      a2 = "1";
      a3 = "1";
      a4 = "1";
      a5 = "";
      a6 = "";
      b1 = "3";
      b2 = "";
      b3 = "3";
      b4 = "3";
      b5 = "3";
      b6 = "1";
      c1 = "1";
      c2 = "2";
      c3 = "1";
      c4 = "3";
      c5 = "1";
      c6 = "";
      d1 = "";
      d2 = "3";
      d3 = "";
      d4 = "2";
      d5 = "";
      d6 = "1";
      e1 = "3";
      e2 = "3";
      e3 = "3";
      e4 = "3";
      e5 = "2";
      e6 = "";
      f1 = "3";
      f2 = "";
      f3 = "";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "2") {
      a1 = "3";
      a2 = "";
      a3 = "1";
      a4 = "";
      a5 = "1";
      a6 = "1";
      b1 = "";
      b2 = "2";
      b3 = "";
      b4 = "2";
      b5 = "1";
      b6 = "";
      c1 = "2";
      c2 = "";
      c3 = "2";
      c4 = "";
      c5 = "1";
      c6 = "1";
      d1 = "";
      d2 = "2";
      d3 = "";
      d4 = "2";
      d5 = "";
      d6 = "";
      e1 = "";
      e2 = "3";
      e3 = "3";
      e4 = "1";
      e5 = "2";
      e6 = "";
      f1 = "3";
      f2 = "";
      f3 = "";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "3") {
      a1 = "";
      a2 = "2";
      a3 = "";
      a4 = "1";
      a5 = "1";
      a6 = "";
      b1 = "3";
      b2 = "1";
      b3 = "1";
      b4 = "1";
      b5 = "3";
      b6 = "";
      c1 = "1";
      c2 = "1";
      c3 = "1";
      c4 = "1";
      c5 = "2";
      c6 = "";
      d1 = "1";
      d2 = "3";
      d3 = "";
      d4 = "1";
      d5 = "1";
      d6 = "1";
      e1 = "";
      e2 = "2";
      e3 = "1";
      e4 = "1";
      e5 = "1";
      e6 = "";
      f1 = "";
      f2 = "";
      f3 = "";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "4") {
      a1 = "";
      a2 = "1";
      a3 = "1";
      a4 = "1";
      a5 = "";
      a6 = "";
      b1 = "1";
      b2 = "1";
      b3 = "3";
      b4 = "3";
      b5 = "3";
      b6 = "";
      c1 = "3";
      c2 = "";
      c3 = "2";
      c4 = "3";
      c5 = "3";
      c6 = "1";
      d1 = "3";
      d2 = "3";
      d3 = "";
      d4 = "3";
      d5 = "3";
      d6 = "";
      e1 = "3";
      e2 = "3";
      e3 = "2";
      e4 = "3";
      e5 = "1";
      e6 = "1";
      f1 = "";
      f2 = "";
      f3 = "";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "5") {
      a1 = "3";
      a2 = "";
      a3 = "";
      a4 = "1";
      a5 = "1";
      a6 = "1";
      b1 = "3";
      b2 = "3";
      b3 = "1";
      b4 = "3";
      b5 = "";
      b6 = "";
      c1 = "3";
      c2 = "3";
      c3 = "3";
      c4 = "3";
      c5 = "3";
      c6 = "";
      d1 = "3";
      d2 = "";
      d3 = "2";
      d4 = "1";
      d5 = "3";
      d6 = "";
      e1 = "";
      e2 = "2";
      e3 = "";
      e4 = "2";
      e5 = "2";
      e6 = "";
      f1 = "";
      f2 = "3";
      f3 = "";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "6") {
      a1 = "1";
      a2 = "1";
      a3 = "";
      a4 = "3";
      a5 = "";
      a6 = "";
      b1 = "";
      b2 = "1";
      b3 = "2";
      b4 = "1";
      b5 = "2";
      b6 = "";
      c1 = "1";
      c2 = "1";
      c3 = "2";
      c4 = "";
      c5 = "2";
      c6 = "";
      d1 = "3";
      d2 = "";
      d3 = "1";
      d4 = "1";
      d5 = "1";
      d6 = "1";
      e1 = "";
      e2 = "2";
      e3 = "";
      e4 = "1";
      e5 = "3";
      e6 = "";
      f1 = "";
      f2 = "";
      f3 = "3";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "7") {
      a1 = "";
      a2 = "1";
      a3 = "3";
      a4 = "";
      a5 = "1";
      a6 = "";
      b1 = "3";
      b2 = "";
      b3 = "2";
      b4 = "1";
      b5 = "2";
      b6 = "";
      c1 = "3";
      c2 = "2";
      c3 = "";
      c4 = "";
      c5 = "3";
      c6 = "";
      d1 = "1";
      d2 = "3";
      d3 = "2";
      d4 = "3";
      d5 = "3";
      d6 = "";
      e1 = "";
      e2 = "2";
      e3 = "";
      e4 = "2";
      e5 = "1";
      e6 = "";
      f1 = "";
      f2 = "";
      f3 = "3";
      f4 = "";
      f5 = "";
      f6 = "";
    }
    else if(maze == "8") {
      a1 = "1";
      a2 = "";
      a3 = "1";
      a4 = "1";
      a5 = "1";
      a6 = "";
      b1 = "";
      b2 = "3";
      b3 = "";
      b4 = "3";
      b5 = "1";
      b6 = "";
      c1 = "3";
      c2 = "2";
      c3 = "3";
      c4 = "1"
      c5 = "3";
      c6 = "";
      d1 = "1";
      d2 = "3";
      d3 = "3";
      d4 = "3";
      d5 = "3";
      d6 = "";
      e1 = "";
      e2 = "2";
      e3 = "1";
      e4 = "3";
      e5 = "3";
      e6 = "";
      f1 = "";
      f2 = "";
      f3 = "";
      f4 = "3";
      f5 = "3";
      f6 = "";
    }
    else if(maze == "9") {
      a1 = "1";
      a2 = "1";
      a3 = "";
      a4 = "1";
      a5 = "1";
      a6 = "";
      b1 = "";
      b2 = "1";
      b3 = "3";
      b4 = "1";
      b5 = "1";
      b6 = "1";
      c1 = "3";
      c2 = "";
      c3 = "2";
      c4 = ""
      c5 = "1";
      c6 = "";
      d1 = "3";
      d2 = "2";
      d3 = "";
      d4 = "2";
      d5 = "";
      d6 = "1";
      e1 = "";
      e2 = "1";
      e3 = "2";
      e4 = "3";
      e5 = "1";
      e6 = "";
      f1 = "";
      f2 = "";
      f3 = "";
      f4 = "";
      f5 = "3";
      f6 = "";
    }

    if(req.body.startInput == "a1") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        a1color = "green";
    }
    else if(req.body.startInput == "a2") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        a2color = "green";
    }
    else if(req.body.startInput == "a3") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        a3color = "green";
    }
    else if(req.body.startInput == "a4") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        a4color = "green";
    }
    else if(req.body.startInput == "a5") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        a5color = "green";
    }
    else if(req.body.startInput == "a6") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        a6color = "green";
    }
    else if(req.body.startInput == "b1") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        b1color = "green";
    }
    else if(req.body.startInput == "b2") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        b2color = "green";
    }
    else if(req.body.startInput == "b3") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        b3color = "green";
    }
    else if(req.body.startInput == "b4") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        b4color = "green";
    }
    else if(req.body.startInput == "b5") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        b5color = "green";
    }
    else if(req.body.startInput == "b6") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        b6color = "green";
    }
    else if(req.body.startInput == "c1") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        c1color = "green";
    }
    else if(req.body.startInput == "c2") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        c2color = "green";
    }
    else if(req.body.startInput == "c3") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        c3color = "green";
    }
    else if(req.body.startInput == "c4") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        c4color = "green";
    }
    else if(req.body.startInput == "c5") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        c5color = "green";
    }
    else if(req.body.startInput == "c6") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        c6color = "green";
    }
    else if(req.body.startInput == "d1") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        d1color = "green";
    }
    else if(req.body.startInput == "d2") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        d2color = "green";
    }
    else if(req.body.startInput == "d3") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        d3color = "green";
    }
    else if(req.body.startInput == "d4") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        d4color = "green";
    }
    else if(req.body.startInput == "d5") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        d5color = "green";
    }
    else if(req.body.startInput == "d6") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        d6color = "green";
    }
    else if(req.body.startInput == "e1") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        e1color = "green";
    }
    else if(req.body.startInput == "e2") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        e2color = "green";
    }
    else if(req.body.startInput == "e3") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        e3color = "green";
    }
    else if(req.body.startInput == "e4") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        e4color = "green";
    }
    else if(req.body.startInput == "e5") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        e5color = "green";
    }
    else if(req.body.startInput == "e6") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        e6color = "green";
    }
    else if(req.body.startInput == "f1") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        f1color = "green";
    }
    else if(req.body.startInput == "f2") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        f2color = "green";
    }
    else if(req.body.startInput == "f3") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        f3color = "green";
    }
    else if(req.body.startInput == "f4") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        f4color = "green";
    }
    else if(req.body.startInput == "f5") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        f5color = "green";
    }
    else if(req.body.startInput == "f6") {
      if(a1color== "green" || a2color== "green" || a3color== "green" || a4color== "green" || a5color== "green" || a6color== "green" || b1color== "green" || b2color== "green" || b3color== "green" || b4color== "green" || b5color== "green" || b6color== "green" || c1color== "green" || c2color== "green" || c3color== "green" || c4color== "green" || c5color== "green" || c6color== "green" || d1color== "green" || d2color== "green" || d3color== "green" || d4color== "green" || d5color== "green" || d6color== "green" || e1color== "green" || e2color== "green" || e3color== "green" || e4color== "green" || e5color== "green" || e6color== "green" || f1color== "green" || f2color== "green" || f3color== "green" || f4color== "green" || f5color== "green" || f6color== "green") {
          clearColor()
      }
        f6color = "green";
    }

    if(req.body.endInput == "a1") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        a1color = "red";
    }
    else if(req.body.endInput == "a2") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        a2color = "red";
    }
    else if(req.body.endInput == "a3") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        a3color = "red";
    }
    else if(req.body.endInput == "a4") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        a4color = "red";
    }
    else if(req.body.endInput == "a5") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        a5color = "red";
    }
    else if(req.body.endInput == "a6") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        a6color = "red";
    }
    else if(req.body.endInput == "b1") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        b1color = "red";
    }
    else if(req.body.endInput == "b2") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        b2color = "red";
    }
    else if(req.body.endInput == "b3") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        b3color = "red";
    }
    else if(req.body.endInput == "b4") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        b4color = "red";
    }
    else if(req.body.endInput == "b5") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        b5color = "red";
    }
    else if(req.body.endInput == "b6") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        b6color = "red";
    }
    else if(req.body.endInput == "c1") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        c1color = "red";
    }
    else if(req.body.endInput == "c2") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        c2color = "red";
    }
    else if(req.body.endInput == "c3") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        c3color = "red";
    }
    else if(req.body.endInput == "c4") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        c4color = "red";
    }
    else if(req.body.endInput == "c5") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        c5color = "red";
    }
    else if(req.body.endInput == "c6") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        c6color = "red";
    }
    else if(req.body.endInput == "d1") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        d1color = "red";
    }
    else if(req.body.endInput == "d2") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        d2color = "red";
    }
    else if(req.body.endInput == "d3") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        d3color = "red";
    }
    else if(req.body.endInput == "d4") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        d4color = "red";
    }
    else if(req.body.endInput == "d5") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        d5color = "red";
    }
    else if(req.body.endInput == "d6") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        d6color = "red";
    }
    else if(req.body.endInput == "e1") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        e1color = "red";
    }
    else if(req.body.endInput == "e2") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        e2color = "red";
    }
    else if(req.body.endInput == "e3") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        e3color = "red";
    }
    else if(req.body.endInput == "e4") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        e4color = "red";
    }
    else if(req.body.endInput == "e5") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        e5color = "red";
    }
    else if(req.body.endInput == "e6") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        e6color = "red";
    }
    else if(req.body.endInput == "f1") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        f1color = "red";
    }
    else if(req.body.endInput == "f2") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        f2color = "red";
    }
    else if(req.body.endInput == "f3") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        f3color = "red";
    }
    else if(req.body.endInput == "f4") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        f4color = "red";
    }
    else if(req.body.endInput == "f5") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        f5color = "red";
    }
    else if(req.body.endInput == "f6") {
      if(a1color== "red" || a2color== "red" || a3color== "red" || a4color== "red" || a5color== "red" || a6color== "red" || b1color== "red" || b2color== "red" || b3color== "red" || b4color== "red" || b5color== "red" || b6color== "red" || c1color== "red" || c2color== "red" || c3color== "red" || c4color== "red" || c5color== "red" || c6color== "red" || d1color== "red" || d2color== "red" || d3color== "red" || d4color== "red" || d5color== "red" || d6color== "red" || e1color== "red" || e2color== "red" || e3color== "red" || e4color== "red" || e5color== "red" || e6color== "red" || f1color== "red" || f2color== "red" || f3color== "red" || f4color== "red" || f5color== "red" || f6color== "red") {
          clearColor()
      }
        f6color = "red";
    }



    res.render('maze', {
      title: "",
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
      a5: a5,
      a6: a6,
      b1: b1,
      b2: b2,
      b3: b3,
      b4: b4,
      b5: b5,
      b6: b6,
      c1: c1,
      c2: c2,
      c3: c3,
      c4: c4,
      c5: c5,
      c6: c6,
      d1: d1,
      d2: d2,
      d3: d3,
      d4: d4,
      d5: d5,
      d6: d6,
      e1: e1,
      e2: e2,
      e3: e3,
      e4: e4,
      e5: e5,
      e6: e6,
      f1: f1,
      f2: f2,
      f3: f3,
      f4: f4,
      f5: f5,
      f6: f6,

      a1color: a1color,
      a2color: a2color,
      a3color: a3color,
      a4color: a4color,
      a5color: a5color,
      a6color: a6color,
      b1color: b1color,
      b2color: b2color,
      b3color: b3color,
      b4color: b4color,
      b5color: b5color,
      b6color: b6color,
      c1color: c1color,
      c2color: c2color,
      c3color: c3color,
      c4color: c4color,
      c5color: c5color,
      c6color: c6color,
      d1color: d1color,
      d2color: d2color,
      d3color: d3color,
      d4color: d4color,
      d5color: d5color,
      d6color: d6color,
      e1color: e1color,
      e2color: e2color,
      e3color: e3color,
      e4color: e4color,
      e5color: e5color,
      e6color: e6color,
      f1color: f1color,
      f2color: f2color,
      f3color: f3color,
      f4color: f4color,
      f5color: f5color,
      f6color: f6color,
    });
  });
}
