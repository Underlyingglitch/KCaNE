module.exports = function(app) {
  app.get('/adjacent_letters', function (req, res){

    res.render('adjacent_letters', {
      title: "",
    });
  });
  var letters = ["", "", "", "", "", "", "", "", "", "", "", ""];
  var hor = [];
  var ver = [];
  var output = [];
  app.post('/adjacent_letters', function (req, res) {
    if (req.body.submit == "") {
      letters = req.body.letters.split("");
    }
    var output = [];
    function solveletter(position, up, down, right, left) {
      if(position !== "") {
        if (position == "a") {
          hor = ["g", "j", "m", "o", "y"];
          ver = ["h", "k", "p", "r", "w"];
        }
        else if (position == "b") {
          hor = ["i", "k", "l", "r", "t"];
          ver = ["c", "d", "f", "y", "z"];
        }
        else if (position == "c") {
          hor = ["b", "h", "i", "j", "w"];
          ver = ["d", "e", "m", "t", "u"];
        }
        else if (position == "d") {
          hor = ["i", "k", "o", "p", "q"];
          ver = ["c", "j", "t", "u", "w"];
        }
        else if (position == "e") {
          hor = ["a", "c", "g", "i", "j"];
          ver = ["k", "s", "u", "w", "z"];
        }
        else if (position == "f") {
          hor = ["c", "e", "r", "v", "y"];
          ver = ["a", "g", "j", "p", "q"];
        }
        else if (position == "g") {
          hor = ["a", "c", "f", "n", "s"];
          ver = ["h", "o", "q", "y", "z"];
        }
        else if (position == "h") {
          hor = ["l", "r", "t", "u", "x"];
          ver = ["d", "k", "m", "p", "s"];
        }
        else if (position == "i") {
          hor = ["d", "l", "o", "w", "z"];
          ver = ["e", "f", "n", "u", "v"];
        }
        else if (position == "j") {
          hor = ["b", "q", "t", "u", "w"];
          ver = ["e", "h", "i", "o", "s"];
        }
        else if (position == "k") {
          hor = ["a", "f", "p", "x", "y"];
          ver = ["d", "i", "o", "r", "z"];
        }
        else if (position == "l") {
          hor = ["g", "k", "p", "t", "z"];
          ver = ["a", "b", "r", "v", "x"];
        }
        else if (position == "m") {
          hor = ["e", "i", "l", "q", "t"];
          ver = ["b", "f", "p", "w", "x"];
        }
        else if (position == "n") {
          hor = ["p", "q", "r", "s", "v"];
          ver = ["a", "f", "g", "h", "l"];
        }
        else if (position == "o") {
          hor = ["h", "j", "l", "u", "z"];
          ver = ["i", "q", "s", "t", "x"];
        }
        else if (position == "p") {
          hor = ["d", "m", "n", "o", "x"];
          ver = ["c", "f", "h", "k", "r"];
        }
        else if (position == "q") {
          hor = ["c", "e", "o", "p", "v"];
          ver = ["b", "d", "i", "k", "n"];
        }
        else if (position == "r") {
          hor = ["a", "e", "g", "s", "u"];
          ver = ["b", "n", "o", "x", "y"];
        }
        else if (position == "s") {
          hor = ["a", "b", "e", "k", "q"];
          ver = ["g", "m", "v", "y", "z"];
        }
        else if (position == "t") {
          hor = ["g", "v", "x", "y", "z"];
          ver = ["c", "j", "l", "s", "u"];
        }
        else if (position == "u") {
          hor = ["f", "m", "v", "x", "z"];
          ver = ["b", "i", "l", "n", "y"];
        }
        else if (position == "v") {
          hor = ["d", "h", "m", "n", "w"];
          ver = ["a", "e", "j", "q", "x"];
        }
        else if (position == "w") {
          hor = ["d", "f", "h", "m", "n"];
          ver = ["g", "l", "q", "r", "t"];
        }
        else if (position == "x") {
          hor = ["b", "d", "f", "k", "w"];
          ver = ["a", "j", "n", "o", "v"];
        }
        else if (position == "y") {
          hor = ["b", "c", "h", "s", "u"];
          ver = ["a", "g", "m", "t", "w"];
        }
        else if (position == "z") {
          hor = ["j", "n", "r", "s", "y"];
          ver = ["c", "l", "m", "p", "v"];
        }
      }
      if(up !== "" && ver.includes(up) == true) {
        output.push(position);
      }
      else if(down !== "" && ver.includes(down) == true) {
        output.push(position);
      }
      else if(right !== "" && hor.includes(right) == true) {
        output.push(position);
      }
      else if(left !== "" && hor.includes(left) == true) {
        output.push(position);
      }
    }

    solveletter(letters[0], "", letters[4], letters[1], "");
    solveletter(letters[1], "", letters[5], letters[2], letters[0]);
    solveletter(letters[2], "", letters[6], letters[3], letters[1]);
    solveletter(letters[3], "", letters[7], "", letters[2]);
    solveletter(letters[4], letters[0], letters[8], letters[5], "");
    solveletter(letters[5], letters[1], letters[9], letters[6], letters[4]);
    solveletter(letters[6], letters[2], letters[10], letters[7], letters[5]);
    solveletter(letters[7], letters[3], letters[11], "", letters[6]);
    solveletter(letters[8], letters[4], "", letters[9], "");
    solveletter(letters[9], letters[5], "", letters[10], letters[8]);
    solveletter(letters[10], letters[6], "", letters[11], letters[9]);
    solveletter(letters[11], letters[7], "", "", letters[10]);

    res.render('adjacent_letters', {
      title: output,
    });
  });
}
