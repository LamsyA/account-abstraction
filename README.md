# ACCOUN ABSTRACTION
A smart wallet where a user could create as many wallets as needed and fund them. This project demonstrates the implementation of account abstraction EIP-4337


## Getting Started

First, run the development server:

```npm run dev``` 

``` npx hardhat compile ```   to compile the contract

``` npx hardhat test ``` to run the test

Connect your wallet to polygon testnet and get some ETH from  [Polygon faucet](https://mumbaifaucet.com/)

### Functions

creates a smart wallet for a user using EIP4337. Users could create many wallets as they wish. On wallet creation, the user is required a input the wallet serial number for 

identification.

allows created wallets to be funded with ETH. It requires the address of the wallet that is to be funded

gets the balance of a wallet. It requires the account's seiral number to be inputed.



### Author

Olamide Adetula
