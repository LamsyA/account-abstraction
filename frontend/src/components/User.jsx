import { useState } from "react";
import { Balance, CreateNewAccount, FundWallet, GetCreatedAddress } from "./Blockchains";
import {  useGlobalState } from "./store";

const User = () => {

  const [newAddress] = useGlobalState("Newaddress");
  const [bal] = useGlobalState("bal");

  const [address, setAddress] = useState("");
  const [salt, setSalt] = useState("");
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");

  const [newaddress, setNewAddress] = useState("");
  const [newsalt, setNewSalt] = useState("");

  const submitAccount = async (e) => {
    e.preventDefault();
    if (!address || !salt) return;
    try {
      const result = await CreateNewAccount(address, salt);
      if (result === true) {
        alert("Success");
      } else {
        alert("Failed to create a new account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFund = async (e) => {
    e.preventDefault();
    if (!account || !amount) return;
    try {
      const result = await FundWallet(account, amount);
      if (result === true) {
        alert("Success");
      } else {
        alert("Failed to fund the wallet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!newaddress || !newsalt) return;
    try {
      const result = await GetCreatedAddress(newaddress, Number(newsalt));
      if (result === true) {
        alert("Success");
      } else {
        alert("Failed to get the created address");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkBalance = async(e) => {
    e.preventDefault();
   await Balance(balance);
  };

  return (
    <div className="flex justify-between items-start mt-10">
      <div className="flex flex-col w-1/2">
        <form
          className="bg-white p-8 shadow-md rounded-lg mb-4"
          onSubmit={submitAccount}
        >
          <div className="mb-4">
            <div className="font-semibold text-lg bg-blue-300 uppercase text-white mb-4 p-2 rounded shadow-md">
              Create Address
            </div>
            <label htmlFor="address" className="text-md font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salt" className="text-md font-semibold text-gray-700 mb-2">
              Salt
            </label>
            <input
              type="text"
              id="salt"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Salt"
              value={salt}
              onChange={(e) => setSalt(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center items-center hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        <form
          className="bg-white p-8 shadow-md rounded-lg"
          onSubmit={onFormSubmit}
        >
          <div className="mb-4">
            <div className="font-semibold text-lg bg-blue-300 uppercase text-white mb-4 p-2 rounded shadow-md">
              Get Address
            </div>
            <label htmlFor="newaddress" className="text-md font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="newaddress"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Address"
              value={newaddress}
              onChange={(e) => setNewAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newsalt" className="text-md font-semibold text-gray-700 mb-2">
              Salt
            </label>
            <input
              type="number"
              id="newsalt"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Salt"
              value={newsalt}
              onChange={(e) => setNewSalt(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center items-center hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
        {newAddress && (
          <div className="bg-green-200 py-2 px-4 mt-4 rounded">
            Address: {newAddress}
          </div>
        )}
      </div>

      <div className="flex flex-col w-1/2 ml-4">
        <form
          className="bg-white p-8 shadow-md rounded-lg mb-4"
          onSubmit={onFund}
        >
          <div className="font-semibold text-lg bg-blue-300 uppercase text-white mb-4 p-2 rounded shadow-md">
            Fund Wallet
          </div>
          <div className="mb-4">
            <label htmlFor="account" className="text-md font-semibold text-gray-700 mb-2">
              Account
            </label>
            <input
              type="text"
              id="account"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="text-md font-semibold text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center items-center hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        <form
          className="bg-white p-8 shadow-md rounded-lg"
          onSubmit={checkBalance}
        >
          <div className="font-semibold text-lg bg-blue-300 uppercase text-white mb-4 p-2 rounded shadow-md">
            Wallet Balance
          </div>
          <div className="mb-4">
            <label htmlFor="balance" className="text-md font-semibold text-gray-700 mb-2">
              Account
            </label>
            <input
              type="text"
              id="balance"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="Account"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            onClick={checkBalance}
            className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center items-center hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Display after Wallet Address form submission */}
        {bal && (
          <div className="bg-green-200 py-2 px-4 mt-4 rounded">
            Wallet Balance: {bal}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
