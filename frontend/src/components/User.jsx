import { useState } from "react";
import { CreateNewAccount } from "./Blockchains";

const User = () => {
  const [address, setAddress] = useState("");
  const [salt, setSalt] = useState("");
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const [newaddress, setNewaddress] = useState("");
  const [newsalt, setNewsalt] = useState("");

  const submitAccount = async (e) => {
    e.preventDefault();
    console.log("testing")
    if(!address || !salt) return
    try {
    console.log("testing --------")
        
      const result = await CreateNewAccount(address, salt)
      if (result === true) {
        alert("success")
      }else {
        alert("Failed to create new account")
      }
      console.log("result ",result)
    } catch (error) {
      console.log(error)
  }
  
  };

  const onFund = () => {
    console.log(account);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(newaddress, newsalt);
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
              placeholder="salt"
              value={newaddress}
              onChange={(e) => setNewaddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newsalt" className="text-md font-semibold text-gray-700 mb-2">
              Salt
            </label>
            <input
              type="text"
              id="newsalt"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              placeholder="salt "
              value={newsalt}
              onChange={(e) => setNewsalt(e.target.value)}
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

        {/* Display after Get Address form submission */}
        {newaddress && newsalt && (
          <div className="bg-green-200 py-2 px-4 mt-4 rounded">
            Address: {newaddress}, Salt: {newsalt}
          </div>
        )}
      </div>

      <div className="flex flex-col w-1/2 ml-4">
        <form
          className="bg-white p-8 shadow-md rounded-lg mb-4"
          onSubmit={onFormSubmit}
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
          <button
            type="button"
            onClick={onFund}
            className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center items-center hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        <form
          className="bg-white p-8 shadow-md rounded-lg"
          onSubmit={onFormSubmit}
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
              placeholder="Address"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="flex bg-blue-500 text-white py-2 px-4 rounded-md justify-center items-center hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Display after Wallet Address form submission */}
        {balance && (
          <div className="bg-green-200 py-2 px-4 mt-4 rounded">
            Wallet Address: {balance}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
