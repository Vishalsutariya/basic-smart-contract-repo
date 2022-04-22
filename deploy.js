// deploy code will go here for deploy contract on Rinkeby network
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(

    //Mnemonic Key goes here
    'This is Dummy Key, You should add your respective Key',
    //Infura API's Rinkey Endpoints goes here
    'Here you can give your Rinkeby Endpoints from Infura account'
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