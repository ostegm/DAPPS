// Save this in Faucet.sol and remove this comment
pragma solidity ^0.4.0;

contract Faucet {
    address owner;
    uint256 sendAmount;

    function Faucet() {
        owner = msg.sender;
        sendAmount = 1000000000000000000;
    }

    function getBalance() returns (uint) {
         return this.balance;
    }

    function getWei() returns (bool) {
        return msg.sender.send(sendAmount);
    }

    function sendWei(address toWhom) returns (bool) {
        return toWhom.send(sendAmount);
    }

    function getSendAmount() returns (uint256) {
        return sendAmount;
    }

    function killMe() returns (bool) {
        if (msg.sender == owner) {
            suicide(owner);
            return true;
        }
    }

    function () payable {}
}
