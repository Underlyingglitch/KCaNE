const express = require('express');

const rootRouter = express.Router();

const adjacentLetters = require('./adjacentLetters/adjacentLetters');
const button = require('./button/button');
const complicatedWires = require('./complicatedWires/complicatedWires');
const fastMath = require('./fastMath/fastMath');
const maze = require('./maze/maze');
const memory = require('./memory/memory');
const morseCode = require('./morseCode/morseCode');
const password = require('./password/password');
const simonSays = require('./simonSays/simonSays');
const wires = require('./wires/wires');

rootRouter.use('/adjacent_letters', adjacentLetters);
rootRouter.use('/button', button);
rootRouter.use('/complicated_wires', complicatedWires);
rootRouter.use('/fast_math', fastMath);
rootRouter.use('/maze', maze);
rootRouter.use('/memory', memory);
rootRouter.use('/morse_code', morseCode);
rootRouter.use('/password', password);
rootRouter.use('/simon_says', simonSays);
rootRouter.use('/wires', wires);

module.exports = rootRouter;
