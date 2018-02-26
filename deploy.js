const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'put mnemonic phrase here(metamask)',
   'https://rinkeby.infura.io/KfMytWv7mKYBicPMjz7U'
);

const web3 = new Web3(provider);

//a function that exist only for the sake of using async/await syntax
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};

deploy();
