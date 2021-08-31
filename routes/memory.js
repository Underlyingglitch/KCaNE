module.exports = function(app) {
  app.get('/memory', function (req, res){
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
    var s1label = "0"
    var s1pos = "0"
    var s12Text = "";
    var s13Text = "";
    var s12Arr = [];
    var s13Arr = [];
    var s2label = "0"
    var s2pos = "0"
    var s22Text = "";
    var s23Text = "";
    var s22Arr = [];
    var s23Arr = [];
    var s3label = "0"
    var s3pos = "0"
    var s32Text = "";
    var s33Text = "";
    var s32Arr = [];
    var s33Arr = [];
    var s4label = "0"
    var s4pos = "0"
    var s42Text = "";
    var s43Text = "";
    var s42Arr = [];
    var s43Arr = [];
    var s5label = "0"
    var s5pos = "0"
    var s52Text = "";
    var s53Text = "";
    var s52Arr = [];
    var s53Arr = [];

    req.session.memory = [];
    res.render('memory', {
      title: "",
      s1p2buttons: s12Arr,
      s1p3buttons: s13Arr,
      s1p2Text: s12Text,
      s1p3Text: s13Text,
      s2p2buttons: s22Arr,
      s2p3buttons: s23Arr,
      s2p2Text: s22Text,
      s2p3Text: s23Text,
      s3p2buttons: s32Arr,
      s3p3buttons: s33Arr,
      s3p2Text: s32Text,
      s3p3Text: s33Text,
      s4p2buttons: s42Arr,
      s4p3buttons: s43Arr,
      s4p2Text: s42Text,
      s4p3Text: s43Text,
      s5p2buttons: s52Arr,
      s5p3buttons: s53Arr,
      s5p2Text: s52Text,
      s5p3Text: s53Text,
    });
  });

  var s1label = "0"
  var s1pos = "0"
  var s12Text = "";
  var s13Text = "";
  var s12Arr = [];
  var s13Arr = [];
  var s2label = "0"
  var s2pos = "0"
  var s22Text = "";
  var s23Text = "";
  var s22Arr = [];
  var s23Arr = [];
  var s3label = "0"
  var s3pos = "0"
  var s32Text = "";
  var s33Text = "";
  var s32Arr = [];
  var s33Arr = [];
  var s4label = "0"
  var s4pos = "0"
  var s42Text = "";
  var s43Text = "";
  var s42Arr = [];
  var s43Arr = [];
  var s5label = "0"
  var s5pos = "0"
  var s52Text = "";
  var s53Text = "";
  var s52Arr = [];
  var s53Arr = [];

  app.post('/memory', function (req, res) {
    if (req.body.s1p1n1 == "1") {
        s12Text = "2";
        s1pos = "2";
        s13Arr = [1, 2, 3, 4];
    }
    else if (req.body.s1p1n2 == "2") {
      s12Text = "2";
      s1pos = "2";
      s13Arr = [1, 2, 3, 4];
    }
    else if (req.body.s1p1n3 == "3") {
      s12Text = "3";
      s1pos = "3";
      s13Arr = [1, 2, 3, 4];
    }
    else if (req.body.s1p1n4 == "4") {
      s12Text = "4";
      s1pos = "4";
      s13Arr = [1, 2, 3, 4];
    }
    if (req.body.s1p3n1 == "1") {
      s1label = "1";
    }
    else if (req.body.s1p3n2 == "2") {
      s1label = "2";
    }
    else if (req.body.s1p3n3 == "3") {
      s1label = "3";
    }
    else if (req.body.s1p3n4 == "4") {
      s1label = "4";
    }

    if(s1label !== "0" && s1pos !== "0") {
      if (req.body.s2p1n1 == "1") {
        s22Text = "";
        s23Text = "4";
        s22Arr = [1, 2, 3, 4];
        s23Arr =  [];
        s2label = "4";
      }
      else if (req.body.s2p1n2 == "2") {
        s22Text = s1pos;
        s23Text = "";
        s22Arr = [];
        s23Arr = [1, 2, 3, 4];
        s2pos = s1pos;
      }
      else if (req.body.s2p1n3 == "3") {
        s22Text = "1";
        s23Text = "";
        s22Arr = [];
        s23Arr = [1, 2, 3, 4];
        s2pos = "1";
      }
      else if (req.body.s2p1n4 == "4") {
        s22Text = s1pos;
        s23Text = "";
        s22Arr = [];
        s23Arr = [1, 2, 3, 4];
        s2pos = s1pos;
      }

      if (req.body.s2p3n1 == "1") {
        s2label = "1";
      }
      else if (req.body.s2p3n2 == "2") {
        s2label = "2";
      }
      else if (req.body.s2p3n3 == "3") {
        s2label = "3";
      }
      else if (req.body.s2p3n4 == "4") {
        s2label = "4";
      }
      if (req.body.s2p2n1 == "1") {
        s2pos = "1";
      }
      else if (req.body.s2p2n2 == "2") {
        s2pos = "2";
      }
      else if (req.body.s2p2n3 == "3") {
        s2pos = "3";
      }
      else if (req.body.s2p2n4 == "4") {
        s2pos = "4";
      }
    }

    if(s1label !== "0" && s1pos !== "0" && s2label !== "0" && s2pos !== "0") {
      if (req.body.s3p1n1 == "1") {
        s32Text = "";
        s33Text = s2label;
        s32Arr = [1, 2, 3, 4];
        s33Arr =  [];
        s3label = s2label;
      }
      else if (req.body.s3p1n2 == "2") {
        s32Text = "";
        s33Text = s1label;
        s32Arr = [1, 2, 3, 4];
        s33Arr = [];
        s3label = s1label;
      }
      else if (req.body.s3p1n3 == "3") {
        s32Text = "3";
        s33Text = "";
        s32Arr = [];
        s33Arr = [1, 2, 3, 4];
        s3pos = "3";
      }
      else if (req.body.s3p1n4 == "4") {
        s32Text = "";
        s33Text = "4";
        s32Arr = [1, 2, 3, 4];
        s33Arr = [];
        s3label = "4";
      }

      if (req.body.s3p3n1 == "1") {
        s3label = "1";
      }
      else if (req.body.s3p3n2 == "2") {
        s3label = "2";
      }
      else if (req.body.s3p3n3 == "3") {
        s3label = "3";
      }
      else if (req.body.s3p3n4 == "4") {
        s3label = "4";
      }
      if (req.body.s3p2n1 == "1") {
        s3pos = "1";
      }
      else if (req.body.s3p2n2 == "2") {
        s3pos = "2";
      }
      else if (req.body.s3p2n3 == "3") {
        s3pos = "3";
      }
      else if (req.body.s3p2n4 == "4") {
        s3pos = "4";
      }
    }

    if(s1label !== "0" && s1pos !== "0" && s2label !== "0" && s2pos !== "0" && s3label !== "0" && s3pos !== "0") {
      if (req.body.s4p1n1 == "1") {
        s42Text = s1pos;
        s43Text = "";
        s42Arr = [];
        s43Arr =  [1, 2, 3, 4];
        s4pos = s1pos;
      }
      else if (req.body.s4p1n2 == "2") {
        s42Text = "2";
        s43Text = "";
        s42Arr = [];
        s43Arr = [1, 2, 3, 4];
        s4pos = "2";
      }
      else if (req.body.s4p1n3 == "3") {
        s42Text = s2pos;
        s43Text = "";
        s42Arr = [];
        s43Arr = [1, 2, 3, 4];
        s4pos = s2pos;
      }
      else if (req.body.s4p1n4 == "4") {
        s42Text = s2pos;
        s43Text = "";
        s42Arr = [];
        s43Arr = [1, 2, 3, 4];
        s4pos = s2pos;
      }

      if (req.body.s4p3n1 == "1") {
        s4label = "1";
      }
      else if (req.body.s4p3n2 == "2") {
        s4label = "2";
      }
      else if (req.body.s4p3n3 == "3") {
        s4label = "3";
      }
      else if (req.body.s4p3n4 == "4") {
        s4label = "4";
      }
      if (req.body.s4p2n1 == "1") {
        s4pos = "1";
      }
      else if (req.body.s4p2n2 == "2") {
        s4pos = "2";
      }
      else if (req.body.s4p2n3 == "3") {
        s4pos = "3";
      }
      else if (req.body.s4p2n4 == "4") {
        s4pos = "4";
      }
    }

    if(s1label !== "0" && s1pos !== "0" && s2label !== "0" && s2pos !== "0" && s3label !== "0" && s3pos !== "0" && s4label !== "0" && s4pos !== "0") {
      if (req.body.s5p1n1 == "1") {
        s52Text = "";
        s53Text = s1label;
        s52Arr = [];
        s53Arr =  [];
        s5label = s1label;
      }
      else if (req.body.s5p1n2 == "2") {
        s52Text = "";
        s53Text = s2label;
        s52Arr = [];
        s53Arr =  [];
        s5label = s2label;
      }
      else if (req.body.s5p1n3 == "3") {
        s52Text = "";
        s53Text = s4label;
        s52Arr = [];
        s53Arr =  [];
        s5label = s4label;
      }
      else if (req.body.s5p1n4 == "4") {
        s52Text = "";
        s53Text = s3label;
        s52Arr = [];
        s53Arr =  [];
        s5label = s3label;
      }
    }



    res.render('memory', {
      title: "",
      s1p2buttons: s12Arr,
      s1p3buttons: s13Arr,
      s1p2Text: s12Text,
      s1p3Text: s13Text,
      s2p2buttons: s22Arr,
      s2p3buttons: s23Arr,
      s2p2Text: s22Text,
      s2p3Text: s23Text,
      s3p2buttons: s32Arr,
      s3p3buttons: s33Arr,
      s3p2Text: s32Text,
      s3p3Text: s33Text,
      s4p2buttons: s42Arr,
      s4p3buttons: s43Arr,
      s4p2Text: s42Text,
      s4p3Text: s43Text,
      s5p2buttons: s52Arr,
      s5p3buttons: s53Arr,
      s5p2Text: s52Text,
      s5p3Text: s53Text,
    });
  });
}
