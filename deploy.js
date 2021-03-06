const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'pattern cushion hood risk marine other item anchor shiver depend vault equip',
    'https://rinkeby.infura.io/v3/c0418b806d3f432ead94598cbc562b84'
)

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(interface);
  console.log('Attempting to deploy from account ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x'+bytecode })
    .send({ gas: '4000000', from: accounts[0] });
  console.log(interface);
  console.log('Contract deployed to ', result.options.address);
};

deploy()