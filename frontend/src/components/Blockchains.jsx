import { ethers } from 'ethers';
import abi from '../../../artifacts/contracts/samples/SimpleAccountFactory.sol/SimpleAccountFactory.json'
// import address from '../abis/contractAddress.json'

import { getGlobalState, setGlobalState  } from './store'

const {ethereum } = window
// const contractAddress =  address.address
const contractAbi = abi.abi


const contractAddress =  '0x510f0Cc1B138F440a905C11c71cCd1F358eBd3BA';
const connectWallet = async () => {
    try {
        if (!ethereum) return alert('Wallet not found')
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
    }catch(error){
        reportError(error)
    }
}
const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
  
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload()
      })
  
      window.ethereum.on('accountsChanged', async () => {
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
        await isWalletConnected()
      })
  
      if (accounts.length) {
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
      } else {
        alert('Please connect wallet.')
        console.log('No accounts found.')
      }
    } catch (error) {
      reportError(error)
    }
  }

  const getContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount')
  
    if (connectedAccount) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, contractAbi, signer)
      return contract
    } else {
      return getGlobalState('contract')
    }
  
  }
 
  const CreateNewAccount = async (address, salt) => {
    try {
  
      if (!ethereum) return alert("Please install Metamask")
      // const connectedAccount = getGlobalState("connectedAccount")
      const contract = await getContract()
      console.log(address, salt)
      const newAccount = await contract.createAccount(address, salt)
      console.log("newAccount ", newAccount)
      return true
    } catch (error) {
      reportError(error)
    } 
    
  }

  const FundWallet = async (account, amount ) => {
    try {
  
      if (!ethereum) return alert("Please install Metamask")
      // const connectedAccount = getGlobalState("connectedAccount")
      const amt = ethers.utils.parseEther(amount)
      console.log("..............",amt)
      const contract = await getContract()
      const organisation = await contract.fundWallet(account,{value: amt})
      // setGlobalState("organisation", organisation )
      console.log(organisation) ;
      return true;
    } catch (error) {
      reportError(error)
    }
  }

  const GetCreatedAddress = async ( newaddress, newsalt ) => {
    try {
  
      if (!ethereum) return alert("Please install Metamask")
      // const connectedAccount = getGlobalState("connectedAccount")
      console.log("Connected to", newaddress, newsalt)
      const contract = await getContract()
      const Newaddress = await contract.getCreatedAddress(newaddress, newsalt)
      setGlobalState("Newaddress", Newaddress )
      console.log(Newaddress) ;
      return true;
    } catch (error) {
      reportError(error)
    }
  }


 

  const Balance = async (account) => {
    try {
  
      if (!ethereum) return alert("Please install Metamask")
      // const connectedAccount = getGlobalState("connectedAccount")
      const contract = await getContract()
      const bal = await contract.balanceOf(account)
      console.log("bal ",Number(bal))
      setGlobalState('bal', Number(bal))
      return bal;
    } catch (error) {
      reportError(error)
    }
  }




const reportError = (error) => { 
    console.log(error.message)
    throw new Error( "Error", error)
}

export {
    connectWallet,
    isWalletConnected,
    getContract,
    CreateNewAccount,
    GetCreatedAddress,
    FundWallet,
    Balance,
}