const express = require('express');

const rootRouter = express.Router();

const adjacentLetters = require('./adjacentLetters/adjacentLetters');
const adventureGames = require('./adventureGames/adventureGames');
const alphabet = require('./alphabet/alphabet');
const anagrams = require('./anagrams/anagrams');
const battleship = require('./battleship/battleship');
const binaryLeds = require('./binaryLeds/binaryLeds');
const button = require('./button/button');
const cheapCheckout = require('./cheapCheckout/cheapCheckout');
const complicatedWires = require('./complicatedWires/complicatedWires');
const keypads = require('./keypads/keypads');
const letterKeys = require('./letterKeys/letterKeys');
const maze = require('./maze/maze');
const memory = require('./memory/memory');
const morseCode = require('./morseCode/morseCode');
const password = require('./password/password');
const simonSays = require('./simonSays/simonSays');
const whosOnFirst = require('./whosOnFirst/whosOnFirst');
const wires = require('./wires/wires');
const wireSequence = require('./wireSequence/wireSequence');

rootRouter.use('/adjacent_letters', adjacentLetters);
rootRouter.use('/adventure_games', adventureGames);
rootRouter.use('/alphabet', alphabet);
rootRouter.use('/anagrams', anagrams);
rootRouter.use('/battleship', battleship);
rootRouter.use('/binary_leds', binaryLeds);
rootRouter.use('/button', button);
rootRouter.use('/cheap_checkout', cheapCheckout);
rootRouter.use('/complicated_wires', complicatedWires);
rootRouter.use('/keypads', keypads);
rootRouter.use('/letter_keys', letterKeys);
rootRouter.use('/maze', maze);
rootRouter.use('/memory', memory);
rootRouter.use('/morse_code', morseCode);
rootRouter.use('/password', password);
rootRouter.use('/simon_says', simonSays);
rootRouter.use('/whos_on_first', whosOnFirst);
rootRouter.use('/wires', wires);
rootRouter.use('/wire_sequence', wireSequence);

module.exports = rootRouter;
