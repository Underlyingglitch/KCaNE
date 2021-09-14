const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.bominfo) {
    console.log('Test data in gebruik.');
    req.session.bominfo = {
      aabatteries: '3',
      dbatteries: '3',
      serialNo: '3yr62h',
      port_dvi: '0',
      port_parallel: '1',
      port_ps2: '0',
      port_rj45: '2',
      port_serial: '1',
      port_rca: '0',
      snd: 'on',
      car: 'on',
      bob: 'on',
    };
  }
  res.render('adventure_games', {
    title: '',
    enemy: '',
    items: '',
    itemUse: '',
    weaponUse: '',
    weapons: '',
    box1: '',
    box2: '',
    box3: '',
    box4: '',
    box5: '',
    box6: '',
    box7: '',
  });
});

let enemy = '';
let items = [];
let weapons = [];
let weaponUse = '';
let itemUse = [];
let multiplePorts = false;
const unlits = [];
const lits = [];
let enemyStr = 0;
let enemyDex = 0;
let enemyInt = 0;
function doublePorts(port) {
  if (port > 1 && multiplePorts === false) {
    multiplePorts = true;
  }
}
function unlitAmount(indicator) {
  if (indicator === 'on') {
    unlits.push(indicator);
  }
}
function litAmount(indicator) {
  if (indicator === 'on') {
    lits.push(indicator);
  }
}

router.post('/', (req, res) => {
  const batteries = req.session.bominfo.aabatteries + req.session.bominfo.dbatteries;
  const digits = req.session.bominfo.serialNo.replace(/\D/g, '');
  const lastDigit = digits[digits.length - 1];
  const firstDigit = digits[0];
  const unlits = [];
  const lits = [];
  doublePorts(req.session.bominfo.port_dvi);
  doublePorts(req.session.bominfo.port_parallel);
  doublePorts(req.session.bominfo.port_ps2);
  doublePorts(req.session.bominfo.port_rj45);
  doublePorts(req.session.bominfo.port_serial);
  doublePorts(req.session.bominfo.port_rca);
  unlitAmount(req.session.bominfo.snd);
  unlitAmount(req.session.bominfo.clr);
  unlitAmount(req.session.bominfo.car);
  unlitAmount(req.session.bominfo.ind);
  unlitAmount(req.session.bominfo.frq);
  unlitAmount(req.session.bominfo.sig);
  unlitAmount(req.session.bominfo.nsa);
  unlitAmount(req.session.bominfo.msa);
  unlitAmount(req.session.bominfo.trn);
  unlitAmount(req.session.bominfo.bob);
  unlitAmount(req.session.bominfo.frk);
  litAmount(req.session.bominfo.sndlit);
  litAmount(req.session.bominfo.clrlit);
  litAmount(req.session.bominfo.carlit);
  litAmount(req.session.bominfo.indlit);
  litAmount(req.session.bominfo.frqlit);
  litAmount(req.session.bominfo.siglit);
  litAmount(req.session.bominfo.nsalit);
  litAmount(req.session.bominfo.msalit);
  litAmount(req.session.bominfo.trnlit);
  litAmount(req.session.bominfo.boblit);
  litAmount(req.session.bominfo.frklit);

  if (req.body.demon == 'Demon') {
    enemy = 'Demon';
    enemyStr = 50;
    enemyDex = 50;
    enemyInt = 50;
  }
  if (req.body.dragon == 'Dragon') {
    enemy = 'Dragon';
    enemyStr = 10;
    enemyDex = 11;
    enemyInt = 13;
  }
  if (req.body.eagle == 'Eagle') {
    enemy = 'Eagle';
    enemyStr = 4;
    enemyDex = 7;
    enemyInt = 3;
  }
  if (req.body.goblin == 'Goblin') {
    enemy = 'Goblin';
    enemyStr = 3;
    enemyDex = 6;
    enemyInt = 5;
  }
  if (req.body.golem == 'Golem') {
    enemy = 'Golem';
    enemyStr = 9;
    enemyDex = 4;
    enemyInt = 7;
  }
  if (req.body.troll == 'Troll') {
    enemy = 'Troll';
    enemyStr = 8;
    enemyDex = 5;
    enemyInt = 4;
  }
  if (req.body.lizard == 'Lizard') {
    enemy = 'Lizard';
    enemyStr = 4;
    enemyDex = 6;
    enemyInt = 3;
  }
  if (req.body.wizard == 'Wizard') {
    enemy = 'Wizard';
    enemyStr = 4;
    enemyDex = 3;
    enemyInt = 8;
  }

  if (req.body.balloon == 'Balloon') {
    if (items.includes('Balloon ') == false && items.length < 5) {
      items.push('Balloon ');
      if (req.body.force < 9.3 || req.body.pressure > 110) {
        if (enemy !== 'Eagle') {
          itemUse.push('Balloon ');
        }
      }
    }
  }
  if (req.body.battery == 'Battery') {
    if (items.includes('Battery ') == false && items.length < 5) {
      items.push('Battery ');
      if (batteries < 2) {
        if (enemy !== 'Golem' && enemy !== 'Wizard') {
          itemUse.push('Battery ');
        }
      }
    }
  }
  if (req.body.bellows == 'Bellows') {
    if (items.includes('Bellows ') == false && items.length < 5) {
      items.push('Bellows ');
      if (enemy == 'Dragon' || enemy == 'Eagle') {
        if (req.body.pressure > 105) {
          itemUse.push('Bellows ');
        }
      } else if (req.body.pressure < 95) {
        itemUse.push('Bellows ');
      }
    }
  }
  if (req.body.cheatcode == 'Cheatcode') {
    if (items.includes('Cheatcode ') == false && items.length < 5) {
      items.push('Cheatcode ');
    }
  }
  if (req.body.crystal_ball == 'Crystal Ball') {
    if (items.includes('Crystal Ball ') == false && items.length < 5) {
      items.push('Crystal Ball ');
      if (enemy !== 'Wizard' && lastDigit < req.body.intelligence) {
        itemUse.push('Crystal Ball ');
      }
    }
  }
  if (req.body.feather == 'Feather') {
    if (items.includes('Feather ') == false && items.length < 5) {
      items.push('Feather ');
      if (req.body.dexterity > req.body.intelligence || req.body.dexterity > req.body.strength) {
        itemUse.push('Feather ');
      }
    }
  }
  if (req.body.hard_drive == 'Hard Drive') {
    if (items.includes('Hard Drive ') == false && items.length < 5) {
      items.push('Hard Drive ');
      if (multiplePorts == true) {
        itemUse.push('Hard Drive ');
      }
    }
  }
  if (req.body.lamp == 'Lamp') {
    if (items.includes('Lamp ') == false && items.length < 5) {
      items.push('Lamp ');
      if (req.body.temperature < 12 && enemy !== 'Lizard') {
        itemUse.push('Lamp ');
      }
    }
  }
  if (req.body.moonstone == 'Moonstone') {
    if (items.includes('Moonstone ') == false && items.length < 5) {
      items.push('Moonstone ');
      if (unlits.length > 1) {
        itemUse.push('Moonstone ');
      }
    }
  }
  if (req.body.small_dog == 'Small Dog') {
    if (items.includes('Small Dog ') == false && items.length < 5) {
      items.push('Small Dog ');
      if (enemy !== 'Demon' && enemy !== 'Dragon' && enemy !== 'Troll') {
        itemUse.push('Small Dog ');
      }
    }
  }
  if (req.body.stepladder == 'Stepladder') {
    if (items.includes('Stepladder ') == false && items.length < 5) {
      items.push('Stepladder ');
      if (enemy !== 'Goblin' && enemy !== 'Lizard' && req.body.height < 4) {
        itemUse.push('Stepladder ');
      }
    }
  }
  if (req.body.sunstone == 'Sunstone') {
    if (items.includes('Sunstone ') == false && items.length < 5) {
      items.push('Sunstone ');
      if (lits.length > 1) {
        itemUse.push('Sunstone ');
      }
    }
  }
  if (req.body.symbol == 'Symbol') {
    if (items.includes('Symbol ') == false && items.length < 5) {
      items.push('Symbol ');
      if (enemy == 'Demon' || enemy == 'Golem' || req.body.temperature > 31) {
        itemUse.push('Symbol ');
      }
    }
  }
  if (req.body.ticket == 'Ticket') {
    if (items.includes('Ticket ') == false && items.length < 5) {
      items.push('Ticket ');
      if (req.body.height >= 4.6 && req.body.force >= 9.2 && req.body.force <= 10.4) {
        itemUse.push('Ticket ');
      }
    }
  }
  if (req.body.trophy == 'Trophy') {
    if (items.includes('Trophy ') == false && items.length < 5) {
      items.push('Trophy ');
      if (req.body.strength > firstDigit || enemy == 'Troll') {
        itemUse.push('Trophy ');
      }
    }
  }
  if (req.body.potion == 'Potion') {
    if (items.includes('Potion ') == false && items.length < 5) {
      items.push('Potion ');
      itemUse.push('Potion ');
    }
  }

  if (req.body.broadsword == 'Broadsword') {
    if (weapons.includes('Broadsword ') == false && weapons.length < 3) {
      weapons.push('Broadsword ');
    }
  }
  if (req.body.caber == 'Caber') {
    if (weapons.includes('Caber ') == false && weapons.length < 3) {
      weapons.push('Caber ');
    }
  }
  if (req.body.nasty_knife == 'Nasty Knife') {
    if (weapons.includes('Nasty Knife ') == false && weapons.length < 3) {
      weapons.push('Nasty Knife ');
    }
  }
  if (req.body.longbow == 'Longbow') {
    if (weapons.includes('Longbow ') == false && weapons.length < 3) {
      weapons.push('Longbow ');
    }
  }
  if (req.body.magic_orb == 'Magic Orb') {
    if (weapons.includes('Magic Orb ') == false && weapons.length < 3) {
      weapons.push('Magic Orb ');
    }
  }
  if (req.body.grimoire == 'Grimoire') {
    if (weapons.includes('Grimoire ') == false && weapons.length < 3) {
      weapons.push('Grimoire ');
    }
  }
  // if (req.body.submit == '') {

  // }
  if (req.body.reset == '') {
    weapons = [];
    items = [];
    enemy = '';
    itemUse = [];
    weaponUse = '';
  }

  console.log(weapons);

  if (weapons.length == 3) {
    if (weapons.includes('Caber ') == true && weapons.includes('Longbow ') == true && weapons.includes('Grimoire ') == true) {
      if (enemyStr - req.body.strength + 2 > enemyDex - req.body.dexterity + 2) {
        if (enemyStr - req.body.strength + 2 > enemyInt - req.body.intelligence + 2) {
          weaponUse = 'Caber';
        } else {
          weaponUse = 'Grimoire';
        }
      } else if (enemyDex - req.body.dexterity + 2 > enemyInt - req.body.intelligence + 2) {
        weaponUse = 'Longbow';
      } else {
        weaponUse = 'Grimoire';
      }
    } else if (weapons.includes('Caber ') == true && weapons.includes('Longbow ') == true && weapons.includes('Grimoire ') !== true) {
      if (enemyStr - req.body.strength + 2 > enemyDex - req.body.dexterity + 2) {
        weaponUse = 'Caber';
      } else {
        weaponUse = 'Longbow';
      }
    } else if (weapons.includes('Caber ') == true && weapons.includes('Longbow ') !== true && weapons.includes('Grimoire ') == true) {
      if (enemyStr - req.body.strength + 2 > enemyInt - req.body.intelligence + 2) {
        weaponUse = 'Caber';
      } else {
        weaponUse = 'Grimoire';
      }
    } else if (weapons.includes('Caber ') !== true && weapons.includes('Longbow ') == true && weapons.includes('Grimoire ') == true) {
      if (enemyDex - req.body.dexterity + 2 > enemyInt - req.body.intelligence + 2) {
        weaponUse = 'Longbow';
      } else {
        weaponUse = 'Grimoire';
      }
    } else if (weapons.includes('Caber ') == true && weapons.includes('Longbow ') !== true && weapons.includes('Grimoire ') !== true) {
      weaponUse = 'Caber';
    } else if (weapons.includes('Caber ') !== true && weapons.includes('Longbow ') == true && weapons.includes('Grimoire ') !== true) {
      weaponUse = 'Longbow';
    } else if (weapons.includes('Caber ') !== true && weapons.includes('Longbow ') !== true && weapons.includes('Grimoire ') == true) {
      weaponUse = 'Grimoire';
      console.log('Grimoire');
    } else {
      weaponUse = 'Broadsword';
    }
  }

  console.log(weaponUse);
  res.render('adventure_games', {
    title: 'hello',
    enemy,
    items,
    itemUse,
    weapons,
    weaponUse,
    box1: req.body.strength,
    box2: req.body.dexterity,
    box3: req.body.intelligence,
    box4: req.body.height,
    box5: req.body.temperature,
    box6: req.body.force,
    box7: req.body.pressure,
  });
});

module.exports = router;
