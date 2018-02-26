# lottery-smart-contract
An Ethereum smart-contract that models a lottery.

How it works:
  - to take part in the lottery every user needs to send some amount of money(which cannot be less than 0.01 ETH for each user)
  - after some people have entered the contract a "third-party"(manager of the contract) will tell the contract to pick a winner,
    beware that he does not pick the winner itself the contract does that.
  - after it picks the winner the contract sends him the full price and resets to continue for other players that want to play.
  
  
* You can use '''npm deploy.js''' to deploy it using Infura API in the Ethereum network.
* You need to set the mnemonic 12-words of Metamask for your account in order to be able to deploy it.
* The contract is thoroughly tested using Mocha testing framework on the Ganache network.
* As the provides is used the truffle-hdwallet-provider.
