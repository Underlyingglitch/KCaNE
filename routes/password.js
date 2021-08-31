module.exports = function(app) {
  app.get('/password', function (req, res){
    req.session.password = ["", "", "", "", ""];
    res.render('password', {
      title: "",
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
    });
  });

  var answers = ["about ", "after ", "again ", "below ", "could ", "every ", "first ", "found ", "great ", "house ", "large ", "learn ", "never ", "other ", "place ", "plant ", "point ", "right ", "small ", "sound ", "spell ", "still ", "study ", "their ", "there ", "these ", "thing ", "think ", "three ", "water ", "where ", "which ", "world ", "would ", "write "];
  app.post('/password', function (req, res) {
    if (!req.session.password) {
      req.session.password = ["", "", "", "", ""];
    }

    if (req.body.submit == "") {
      if (req.body.letters1 !== "") {
        req.session.password[0] = req.body.letters1.split("");
      }
      if (req.body.letters2 !== "") {
        req.session.password[1] = req.body.letters2.split("");
      }
      if (req.body.letters3 !== "") {
        req.session.password[2] = req.body.letters3.split("");
      }
      if (req.body.letters4 !== "") {
        req.session.password[3] = req.body.letters4.split("");
      }
      if (req.body.letters5 !== "") {
        req.session.password[4] = req.body.letters5.split("");
      }
    }

    function removal(word, position) {
      if (req.session.password[0].includes(word.split("")[0]) == true) {
        answers[position] = word + " "
        if (req.session.password[1].includes(word.split("")[1]) == true) {
          answers[position] = word + " "
          if (req.session.password[2].includes(word.split("")[2]) == true) {
            answers[position] = word + " "
            if (req.session.password[3].includes(word.split("")[3]) == true) {
              answers[position] = word + " "
              if (req.session.password[4].includes(word.split("")[4]) == true) {
                answers[position] = word + " "
              }
              else if(req.session.password[4] !== "") {
                answers[position] = ""
              }
            }
            else if(req.session.password[3] !== "") {
              answers[position] = ""
            }
          }
          else if(req.session.password[2] !== "") {
            answers[position] = ""
          }
        }
        else if(req.session.password[1] !== "") {
          answers[position] = ""
        }
      }
      else if(req.session.password[0] !== "") {
        answers[position] = ""
      }
    }

    removal("about", 0);
    removal("after", 1);
    removal("again", 2);
    removal("below", 3);
    removal("could", 4);
    removal("every", 5);
    removal("first", 6);
    removal("found", 7);
    removal("great", 8);
    removal("house", 9);
    removal("large", 10);
    removal("learn", 11);
    removal("never", 12);
    removal("other", 13);
    removal("place", 14);
    removal("plant", 15);
    removal("point", 16);
    removal("right", 17);
    removal("small", 18);
    removal("sound", 19);
    removal("spell", 20);
    removal("still", 21);
    removal("study", 22);
    removal("their", 23);
    removal("there", 24);
    removal("these", 25);
    removal("thing", 26);
    removal("think", 27);
    removal("three", 28);
    removal("water", 29);
    removal("where", 30);
    removal("which", 31);
    removal("world", 32);
    removal("would", 33);
    removal("write", 34);

    res.render('password', {
      title: answers.toString().replace(/,/g, ''),
      box1: req.body.letters1,
      box2: req.body.letters2,
      box3: req.body.letters3,
      box4: req.body.letters4,
      box5: req.body.letters5,
    });
  });
}
