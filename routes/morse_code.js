module.exports = function (app) {
  app.get('/morse_code', (req, res) => {
    req.session.morse_code = [];
    res.render('morse_code', {
      title: '',
      wordOutput: endWord,
      wordInput: word.join(''),
      freqOutput: frequency,
    });
  });

  var word = [];
  var endWord = '';
  var frequency = '';

  app.post('/morse_code', (req, res) => {
    if (req.body.a == '.-') {
      word.push('a');
    } else if (req.body.b == '-...') {
      word.push('b');
    } else if (req.body.c == '-.-.') {
      word.push('c');
    } else if (req.body.e == '.') {
      word.push('e');
    } else if (req.body.f == '..-.') {
      word.push('f');
    } else if (req.body.g == '--.') {
      word.push('g');
    } else if (req.body.h == '....') {
      word.push('h');
    } else if (req.body.i == '..') {
      word.push('i');
    } else if (req.body.k == '-.-') {
      word.push('k');
    } else if (req.body.l == '.-..') {
      word.push('l');
    } else if (req.body.m == '--') {
      word.push('m');
    } else if (req.body.o == '---') {
      word.push('o');
    } else if (req.body.r == '.-.') {
      word.push('r');
    } else if (req.body.s == '...') {
      word.push('s');
    } else if (req.body.t == '-') {
      word.push('t');
    } else if (req.body.v == '...-') {
      word.push('v');
    } else if (req.body.x == '-..-') {
      word.push('x');
    } else if (req.body.remove == 'X') {
      word.pop();
    }

    if (word[0] == 'b') {
      if (word[1] == 'e') {
        endWord = 'beats';
        frequency = '3.600 MHz';
      } else if (word[1] == 'i') {
        endWord = 'bistro';
        frequency = '3.552 MHz';
      } else if (word[1] == 'o') {
        if (word[2] == 'm') {
          endWord = 'bombs';
          frequency = '3.565 MHz';
        } else if (word[2] == 'x') {
          endWord = 'boxes';
          frequency = '3.535 MHz';
        }
      } else if (word[1] == 'r') {
        if (word[2] == 'e') {
          endWord = 'break';
          frequency = '3.572 MHz';
        } else if (word[2] == 'i') {
          endWord = 'brick';
          frequency = '3.575 MHz';
        }
      }
    } else if (word[0] == 'f') {
      endWord = 'flick';
      frequency = '3.555 MHz';
    } else if (word[0] == 'h') {
      endWord = 'halls';
      frequency = '3.515 MHz';
    } else if (word[0] == 'l') {
      endWord = 'leaks';
      frequency = '3.542 MHz';
    } else if (word[0] == 's') {
      if (word[1] == 'h') {
        endWord = 'shell';
        frequency = '3.505 MHz';
      } else if (word[1] == 'l') {
        endWord = 'slick';
        frequency = '3.522 MHz';
      } else if (word[1] == 't') {
        if (word[2] == 'e') {
          endWord = 'steak';
          frequency = '3.582 MHz';
        } else if (word[2] == 'i') {
          endWord = 'sting';
          frequency = '3.592 MHz';
        } else if (word[2] == 'r') {
          endWord = 'strobe';
          frequency = '3.545 MHz';
        }
      }
    } else if (word[0] == 't') {
      endWord = 'trick';
      frequency = '3.595 MHz';
    } else if (word[0] == 'v') {
      endWord = 'vector';
      frequency = '3.532 MHz';
    }

    res.render('morse_code', {
      title: '',
      wordOutput: endWord,
      wordInput: word.join(''),
      freqOutput: frequency,
    });
  });
};
