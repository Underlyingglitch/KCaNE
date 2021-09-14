const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('keypads', {
    title: '',
    keypads: list,
    answer: outcome,
  });
});

var list = [];
var outcome = [];

router.post('/', (req, res) => {
  const column1 = ['28-balloon', '13-at', '30-upsidedowny', '12-squigglyn', '7-squidknife', '9-hookn', '23-leftc'];
  const column2 = ['16-euro', '28-balloon', '23-leftc', '26-cursive', '3-hollowstar', '9-hookn', '20-questionmark'];
  const column3 = ['1-copyright', '8-pumpkin', '26-cursive', '5-doublek', '15-meltedthree', '30-upsidedowny', '3-hollowstar'];
  const column4 = ['11-six', '21-paragraph', '31-bt', '7-squidknife', '5-doublek', '20-questionmark', '4-smileyface'];
  const column5 = ['24-pitchfork', '4-smileyface', '31-bt', '22-rightc', '21-paragraph', '19-dragon', '2-filledstar'];
  const column6 = ['11-six', '16-euro', '27-tracks', '14-ae', '24-pitchfork', '18-nwithhat', '6-omega'];

  function sortColmn(column) {
    if (list.includes(column[0]) == true && outcome.length < 4) {
      outcome.push(column[0]);
    }
    if (list.includes(column[1]) == true && outcome.length < 4) {
      outcome.push(column[1]);
    }
    if (list.includes(column[2]) == true && outcome.length < 4) {
      outcome.push(column[2]);
    }
    if (list.includes(column[3]) == true && outcome.length < 4) {
      outcome.push(column[3]);
    }
    if (list.includes(column[4]) == true && outcome.length < 4) {
      outcome.push(column[4]);
    }
    if (list.includes(column[5]) == true && outcome.length < 4) {
      outcome.push(column[5]);
    }
    if (list.includes(column[6]) == true && outcome.length < 4) {
      outcome.push(column[6]);
    }
  }

  function checkDouble(symbol) {
    if (list.length < 4 && list.includes(symbol) == false) {
      list.push(symbol);
    }
  }

  if (req.body.balloon == '') {
    checkDouble('28-balloon');
  } else if (req.body.at == '') {
    checkDouble('13-at');
  } else if (req.body.upsidedowny == '') {
    checkDouble('30-upsidedowny');
  } else if (req.body.copyright == '') {
    checkDouble('1-copyright');
  } else if (req.body.squigglyn == '') {
    checkDouble('12-squigglyn');
  } else if (req.body.squidknife == '') {
    checkDouble('7-squidknife');
  } else if (req.body.hookn == '') {
    checkDouble('9-hookn');
  } else if (req.body.leftc == '') {
    checkDouble('23-leftc');
  } else if (req.body.euro == '') {
    checkDouble('16-euro');
  } else if (req.body.cursive == '') {
    checkDouble('26-cursive');
  } else if (req.body.hollowstar == '') {
    checkDouble('3-hollowstar');
  } else if (req.body.questionmark == '') {
    checkDouble('20-questionmark');
  } else if (req.body.pumpkin == '') {
    checkDouble('8-pumpkin');
  } else if (req.body.doublek == '') {
    checkDouble('5-doublek');
  } else if (req.body.meltedthree == '') {
    checkDouble('15-meltedthree');
  } else if (req.body.six == '') {
    checkDouble('11-six');
  } else if (req.body.paragraph == '') {
    checkDouble('21-paragraph');
  } else if (req.body.bt == '') {
    checkDouble('31-bt');
  } else if (req.body.smileyface == '') {
    checkDouble('4-smileyface');
  } else if (req.body.pitchfork == '') {
    checkDouble('24-pitchfork');
  } else if (req.body.rightc == '') {
    checkDouble('22-rightc');
  } else if (req.body.dragon == '') {
    checkDouble('19-dragon');
  } else if (req.body.filledstar == '') {
    checkDouble('2-filledstar');
  } else if (req.body.tracks == '') {
    checkDouble('27-tracks');
  } else if (req.body.ae == '') {
    checkDouble('14-ae');
  } else if (req.body.nwithhat == '') {
    checkDouble('18-nwithhat');
  } else if (req.body.omega == '') {
    checkDouble('6-omega');
  } else if (req.body.remove == '') {
    list.pop();
    outcome = [];
  }

  if (list.length == 4) {
    if (column1.includes(list[0]) == true && column1.includes(list[1]) == true && column1.includes(list[2]) == true && column1.includes(list[3]) == true) {
      sortColmn(column1);
    } else if (column2.includes(list[0]) == true && column2.includes(list[1]) == true && column2.includes(list[2]) == true && column2.includes(list[3]) == true) {
      sortColmn(column2);
    } else if (column3.includes(list[0]) == true && column3.includes(list[1]) == true && column3.includes(list[2]) == true && column3.includes(list[3]) == true) {
      sortColmn(column3);
    } else if (column4.includes(list[0]) == true && column4.includes(list[1]) == true && column4.includes(list[2]) == true && column4.includes(list[3]) == true) {
      sortColmn(column4);
    } else if (column5.includes(list[0]) == true && column5.includes(list[1]) == true && column5.includes(list[2]) == true && column5.includes(list[3]) == true) {
      sortColmn(column5);
    } else if (column6.includes(list[0]) == true && column6.includes(list[1]) == true && column6.includes(list[2]) == true && column6.includes(list[3]) == true) {
      sortColmn(column6);
    }
  }

  res.render('keypads', {
    title: '',
    keypads: list,
    answer: outcome,
  });
});

module.exports = router;
