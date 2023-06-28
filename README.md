# ACCOUN ABSTRACTION
A smart wallet where a user could create as many wallets as needed and fund them. This project demonstrates the implementation of account abstraction EIP-4337


## Getting Started

First, run the development server:

```npm run dev``` 

``` npx hardhat compile ```   to compile the contract

``` npx hardhat test ``` to run the test

Connect your wallet to polygon testnet and get some ETH from  [Polygon faucet](https://mumbaifaucet.com/)

# Simple Account Factory

This is a sample factory contract for creating SimpleAccount contracts. The factory utilizes the Create2 library from OpenZeppelin to generate counterfactual addresses for the accounts. It also incorporates an ERC1967Proxy to enable upgradability of the SimpleAccount contract.

## Prerequisites

- Solidity version 0.8.12 or higher
- OpenZeppelin contracts: Create2.sol, ERC1967Proxy.sol

## License

This contract is licensed under the GPL-3.0 License. Please see the [SPDX-License-Identifier](https://spdx.org/licenses/GPL-3.0.html) for more details.

## Overview

The SimpleAccountFactory contract allows users to create SimpleAccount contracts and manage their balances. It follows a specific process to ensure proper initialization and compatibility with entry point contracts.

### SimpleAccount Contract

The SimpleAccount contract is used as the implementation contract for the factory. It requires an entry point contract address during initialization. SimpleAccount holds user account information and provides various functionalities.

### Factory Initialization

When deploying the SimpleAccountFactory contract, an entry point contract (IEntryPoint) must be provided as a constructor parameter. This entry point contract will be used for initializing the SimpleAccount contracts.

### Create Account

The `createAccount` function is used to create a new account and returns its address. Even if the account is already deployed, this function still returns the account's address. This allows the `entryPoint.getSenderAddress()` function to work correctly, regardless of whether the account was just created or already existed.

If the account does not exist, the function creates a new ERC1967Proxy instance, passing the accountImplementation contract's address and the owner's address as initialization parameters. It then returns the address of the proxy.

### Fund Wallet

The `fundWallet` function enables users to add funds to a specific account. It takes the account's address as a parameter and increases the balance associated with that account by the amount of Ether sent with the function call.

### Counterfactual Address Calculation

The `getCreatedAddress` function calculates the counterfactual address of an account based on the provided parameters. It utilizes the Create2 library's `computeAddress` function, passing the salt and the initialization code of the ERC1967Proxy contract with the accountImplementation contract's address and the owner's address.

### Wallet Balance

The `balanceOf` function allows users to check the balance of a specific account by providing its address. It returns the current balance associated with the account.

## Usage

To use this factory contract, follow these steps:

1. Deploy the SimpleAccountFactory contract, providing the desired entry point contract address during deployment.
2. Call the `createAccount` function, passing the owner's address and a unique salt value as parameters. This will create a new SimpleAccount contract or return the address of an existing account.
3. Use the `fundWallet` function to add funds to the created account by specifying the account's address and sending Ether with the function call.
4. If needed, use the `balanceOf` function to check the current balance of a specific account.

Note: Make sure to include the required OpenZeppelin contracts, specifically Create2.sol and ERC1967Proxy.sol, in your Solidity project.

Feel free to customize and modify this contract to suit your specific use case.

## License

This contract is licensed under the GPL-3.0 License. For details, please see the [SPDX-License-Identifier](https://spdx.org/licenses/GPL-3.0.html) at the beginning of the contract.



## Author

Olamide Adetula
