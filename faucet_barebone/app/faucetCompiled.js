var faucetCompiled = {
  Faucet: {
    code: "0x606060405234610000575b60008054600160a060020a0319166c0100000000000000000000000033810204179055670de0b6b3a76400006001555b5b61019d806100496000396000f36060604052361561004b5760e060020a600035046312065fe08114610054578063148f2e5e146100735780633ba150361461009757806390b08a52146100b8578063b603cd80146100d7575b6100525b5b565b005b34610000576100616100f8565b60408051918252519081900360200190f35b3461000057610083600435610107565b604080519115158252519081900360200190f35b3461000057610083610137565b604080519115158252519081900360200190f35b3461000057610061610165565b60408051918252519081900360200190f35b346100005761008361016c565b604080519115158252519081900360200190f35b600160a060020a033016315b90565b600154604051600091600160a060020a0384169181156108fc02919084818181858888f19450505050505b919050565b600154604051600091600160a060020a0333169181156108fc02919084818181858888f19450505050505b90565b6001545b90565b6000805433600160a060020a039081169116141561010457600054600160a060020a0316ff506001610104565b5b9056",
    info: {
      abiDefinition: 
      [{
          constant: false,
          inputs: [],
          name: "getBalance",
          outputs: [{
              name: "",
              type: "uint256"
          }],
          payable: false,
          type: "function"
      }, {
          constant: false,
          inputs: [{
              name: "toWhom",
              type: "address"
          }],
          name: "sendWei",
          outputs: [{
              name: "",
              type: "bool"
          }],
          payable: false,
          type: "function"
      }, {
          constant: false,
          inputs: [],
          name: "getWei",
          outputs: [{
              name: "",
              type: "bool"
          }],
          payable: false,
          type: "function"
      }, {
          constant: false,
          inputs: [],
          name: "getSendAmount",
          outputs: [{
              name: "",
              type: "uint256"
          }],
          payable: false,
          type: "function"
      }, {
          constant: false,
          inputs: [],
          name: "killMe",
          outputs: [{
              name: "",
              type: "bool"
          }],
          payable: false,
          type: "function"
      }, {
          inputs: [],
          payable: false,
          type: "constructor"
      }, {
          payable: true,
          type: "fallback"
      }]
      ,
      compilerOptions: "--bin --abi --userdoc --devdoc --add-std --optimize -o /tmp/solc353086699",
      compilerVersion: "0.4.6",
      developerDoc: {
        methods: {}
      },
      language: "Solidity",
      languageVersion: "0.4.6",
      source: "pragma solidity ^0.4.0; contract Faucet { address owner; uint256 sendAmount; function Faucet() { owner = msg.sender; sendAmount = 1000000000000000000; } function getBalance() returns (uint) { return this.balance; } function getWei() returns (bool) { return msg.sender.send(sendAmount); } function sendWei(address toWhom) returns (bool) { return toWhom.send(sendAmount); } function getSendAmount() returns (uint256) { return sendAmount; } function killMe() returns (bool) { if (msg.sender == owner) { suicide(owner); return true; } } function () payable {} }",
      userDoc: {
        methods: {}
      }
    }
  }
}

