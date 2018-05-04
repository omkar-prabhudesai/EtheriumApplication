const assert = require('assert')
const ganache = require('ganache-cli')
//by convention if we want to initilize with constructor, capitalize it
//shown below i.e. W of web3
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const{interface,bytecode} = require('../compile');

let accounts;
let inbox;
beforeEach(async ()=>{
    //Get a list of all accounts
   accounts = await web3.eth.getAccounts()
    //Use one of that account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode,arguments:['Hi There!']})
        .send({from:accounts[0],gas:1000000});
});

describe('Inbox',()=>{

    it('Deploys contract',()=>{
        console.log(inbox)
    })
});


//---------------------Sample Test case with mocha---------------------
/* class Car {

    park(){
        return "stopped";
    }
    drive(){
        return "vroom";
    }
}

let car;
beforeEach(()=>{
    //anything in this block will execute prior to run each test i.e. it(...) block
    car = new Car();
});
//describe needs any text argument.This sould not confused with name of class 
//we want to test
describe('Car', () =>{
    it('can park',()=>{
        assert.equal(car.park(),'stopped')
    });

    it('can drive', ()=>{
        assert.equal(car.drive(),'vroom')
    });
}); */