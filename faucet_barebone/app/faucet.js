// ~/DAPPS/faucet_barebone/app/faucet.js
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log("Coinbase: " + web3.eth.coinbase);

// Your deployed address changes every time you deploy.
var faucetAddress = "0xab243f8e270ea55f686e77d02742a291577d488e"; //net14658
faucetInstance = web3.eth.contract(faucetCompiled.Faucet.info.abiDefinition).at(faucetAddress);

// Query eth for balance
console.log("Contract balance: " + web3.eth.getBalance(faucetAddress));

// Query the contract directly
console.log("Faucet balance: " + faucetInstance.getBalance.call());

function topUp() {
    var txn = web3.eth.sendTransaction({ 
        from: web3.eth.coinbase, 
        to: faucetAddress,
        value: web3.toWei(1, "ether") 
    });
    console.log("topUp txn: " + txn);
}

var targetAccount = web3.eth.accounts[1];
function sendWei() {
    var txn = faucetInstance.sendWei(
        targetAccount,
        {from: web3.eth.coinbase});
    console.log("sendWei txn: " + txn);
}

