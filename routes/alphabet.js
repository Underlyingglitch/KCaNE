module.exports = function(app) {
  app.get('/alphabet', function (req, res){
    res.render('alphabet', {
      title: "",
    });
  });

  function checkword(word) {
    var wordbank = ['jqxz', 'qew', 'ac', 'zny', 'tjl', 'okbv', 'dfw', 'ykq', 'lxe', 'gs', 'vsi', 'pqjs', 'vcn', 'jr', 'irnm', 'op', 'qydx', 'hdu', 'pkd', 'argf'];
    var wordbank_array = [[ 'j', 'q', 'x', 'z' ], [ 'q', 'e', 'w' ], [ 'a', 'c' ], [ 'z', 'n', 'y' ],[ 't', 'j', 'l' ], [ 'o', 'k', 'b', 'v' ], [ 'd', 'f', 'w' ], [ 'y', 'k', 'q' ], [ 'l', 'x', 'e' ], [ 'g', 's' ], [ 'v', 's', 'i' ], [ 'p', 'q', 'j', 's' ], [ 'v', 'c', 'n' ], [ 'j', 'r' ], [ 'i', 'r', 'n', 'm' ], [ 'o', 'p' ], [ 'q', 'y', 'd', 'x' ], [ 'h', 'd', 'u' ], [ 'p', 'k', 'd' ], [ 'a', 'r', 'g', 'f' ]];

    var i = 0;

    var output_array = [];

    while (i<wordbank_array.length) {
      var count = wordbank_array[i].length;
      var x = 0;
      var m = 0;
      while (m<wordbank_array[i].length) {
        if (word.includes(wordbank_array[i][m])) {
          x++;
        }
        m++;
      }
      if (count == x) {
        //all letters match
        output_array.push(wordbank[i]);
      }
      i++
    }
    return output_array;
  }

  app.post('/alphabet', function (req, res) {

    if (req.body.submit == "Enter") {
      var input = req.body.input;
      res.render('alphabet', {
        title: checkword(input),
      });
    }
  });

}
