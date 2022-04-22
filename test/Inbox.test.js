// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
beforeEach(async () => {

    //get a list of accounts from ganache
    accounts = await web3.eth.getAccounts();

    //Use one of those account to deploy contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hello World!'] })
        .send({ from: accounts[0], gas: '1000000' })

})

describe('Inbox', () => {
    it('deploy a contract', () => {
        console.log(inbox);
    });
});