module.exports = function(app) {
  app.get('/whos_on_first', function (req, res){
    if (!req.session.bominfo) {
      console.log("Test data in gebruik.");
      req.session.bominfo = {
                              batteries: '3',
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
    };
    var outcomeText = "";
    res.render('whos_on_first', {
      title: "",
      output: outcomeText,
    });
  });

  app.post('/whos_on_first', function (req, res) {
    var chosenWord = "no word chosen";
    var outcomeText = "";

    if (req.body.yes == "YES") {
      chosenWord = "yes"
    }
    else if (req.body.first == "FIRST") {
      chosenWord = "first"
    }
    else if (req.body.display == "DISPLAY") {
      chosenWord = "display"
    }
    else if (req.body.okay == "OKAY") {
      chosenWord = "okay"
    }
    else if (req.body.says == "SAYS") {
      chosenWord = "says"
    }
    else if (req.body.nothing == "NOTHING") {
      chosenWord = "nothing"
    }
    else if (req.body.empty == "") {
      chosenWord = ""
    }
    else if (req.body.blank == "BLANK") {
      chosenWord = "blank"
    }
    else if (req.body.no == "NO") {
      chosenWord = "no"
    }
    else if (req.body.led == "LED") {
      chosenWord = "led"
    }
    else if (req.body.lead == "LEAD") {
      chosenWord = "lead"
    }
    else if (req.body.read == "READ") {
      chosenWord = "read"
    }
    else if (req.body.red == "RED") {
      chosenWord = "red"
    }
    else if (req.body.reed == "REED") {
      chosenWord = "reed"
    }
    else if (req.body.leed == "LEED") {
      chosenWord = "leed"
    }
    else if (req.body.hold_on == "HOLD ON") {
      chosenWord = "hold_on"
    }
    else if (req.body.you == "YOU") {
      chosenWord = "you"
    }
    else if (req.body.you_are == "YOU ARE") {
      chosenWord = "you_are"
    }
    else if (req.body.your == "YOUR") {
      chosenWord = "your"
    }
    else if (req.body.you_re == "YOU'RE") {
      chosenWord = "you_re"
    }
    else if (req.body.ur == "UR") {
      chosenWord = "ur"
    }
    else if (req.body.there == "THERE") {
      chosenWord = "there"
    }
    else if (req.body.they_re == "THEY'RE") {
      chosenWord = "they_re"
    }
    else if (req.body.their == "THEIR") {
      chosenWord = "their"
    }
    else if (req.body.they_are == "THEY ARE") {
      chosenWord = "they_are"
    }
    else if (req.body.see == "SEE") {
      chosenWord = "see"
    }
    else if (req.body.c == "C") {
      chosenWord = "c"
    }
    else if (req.body.cee == "CEE") {
      chosenWord = "cee"
    }

    if(chosenWord == "yes" || chosenWord == "nothing" || chosenWord == "led" || chosenWord == "they_are") {
      position = "Middle Left"
    }
    else if(chosenWord == "ur") {
      position = "Top Left"
    }
    else if(chosenWord == "" || chosenWord == "reed" || chosenWord == "leed" || chosenWord == "they_re") {
      position = "Bottom Left"
    }
    else if(chosenWord == "display" || chosenWord == "says" || chosenWord == "no" || chosenWord == "lead" || chosenWord == "hold_on" || chosenWord == "you_are" || chosenWord == "there" || chosenWord == "see" || chosenWord == "cee") {
      position = "Bottom Right"
    }
    else if(chosenWord == "blank" || chosenWord == "read" || chosenWord == "red" || chosenWord == "you" || chosenWord == "your" || chosenWord == "you_re" || chosenWord == "their") {
      position = "Middle Right"
    }
    else if(chosenWord == "first" || chosenWord == "okay" || chosenWord == "c") {
      position = "Top Right"
    }

    if(position !== "") {
      if (req.body.second_ready == "READY") {
        outcomeText = "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT";
      }
      else if (req.body.second_first == "FIRST") {
        outcomeText = "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST";
      }
      else if (req.body.second_no == "NO") {
        outcomeText = "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE";
      }
      else if (req.body.second_blank == "BLANK") {
        outcomeText = "WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST";
      }
      else if (req.body.second_nothing == "NOTHING") {
        outcomeText = "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY";
      }
      else if (req.body.second_yes == "YES") {
        outcomeText = "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT";
      }
      else if (req.body.second_what == "WHAT") {
        outcomeText = "UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT";
      }
      else if (req.body.second_uhhh == "UHHH") {
        outcomeText = "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST";
      }
      else if (req.body.second_left == "LEFT") {
        outcomeText = "RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING";
      }
      else if (req.body.second_right == "RIGHT") {
        outcomeText = "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST";
      }
      else if (req.body.second_middle == "MIDDLE") {
        outcomeText = "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES";
      }
      else if (req.body.second_okay == "OKAY") {
        outcomeText = "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT";
      }
      else if (req.body.second_press == "PRESS") {
        outcomeText = "RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT";
      }
      else if (req.body.second_you == "YOU") {
        outcomeText = "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U";
      }
      else if (req.body.second_you_are == "YOU ARE") {
        outcomeText = "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE";
      }
      else if (req.body.second_your == "YOUR") {
        outcomeText = "UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU'RE, YOU, WHAT?, HOLD, LIKE, DONE";
      }
      else if (req.body.second_you_re == "YOU'RE") {
        outcomeText = "YOU, YOU'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD";
      }
      else if (req.body.second_ur == "UR") {
        outcomeText = "DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU'RE, LIKE, NEXT, UH UH, YOU ARE, YOU";
      }
      else if (req.body.second_u == "U") {
        outcomeText = "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR";
      }
      else if (req.body.second_uh_huh == "UH HUH") {
        outcomeText = "UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU'RE, UR, U, WHAT?";
      }
      else if (req.body.second_uh_uh == "UH UH") {
        outcomeText = "UR, U, YOU ARE, YOU'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?";
      }
      else if (req.body.second_whatq == "WHAT?") {
        outcomeText = "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE";
      }
      else if (req.body.second_done == "DONE") {
        outcomeText = "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE";
      }
      else if (req.body.second_next == "NEXT") {
        outcomeText = "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU'RE, U, YOU";
      }
      else if (req.body.second_hold == "HOLD") {
        outcomeText = "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD, UH HUH, YOUR, LIKE";
      }
      else if (req.body.second_sure == "SURE") {
        outcomeText = "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH";
      }
      else if (req.body.second_like == "LIKE") {
        outcomeText = "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR";
      }
      else if (req.body.second_wait == "WAIT") {
        outcomeText = "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE";
      }
    }

    res.render('whos_on_first', {
      title: position,
      output: outcomeText,
    });
  });
}
