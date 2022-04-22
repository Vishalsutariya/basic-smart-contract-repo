// deploy code will go here for deploy contract on Rinkeby network
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(

    //Mnemonic Key goes here
    'spread lawn decade okay faint twist illness escape deny ramp ring letter',
    //Infura API's Rinkey Endpoints goes here
    'https://rinkeby.infura.io/v3/18a6c04411544bdbaa8ed773dd17459c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account --> ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hello World!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to --> ', result.options.address);

    provider.engine.stop();
};

deploy();