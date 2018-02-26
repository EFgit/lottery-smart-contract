const path = require('path'); // cross - platform compatibility
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//use console.log(solc.compile(source,1)) to show output with  node compile.js
module.exports = solc.compile(source,1).contracts[':Lottery'];
