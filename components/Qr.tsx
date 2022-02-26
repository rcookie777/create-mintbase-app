import Navbar from '../components/Navbar'
import { useWallet } from '../services/providers/MintbaseWalletContext'
import React, { useState } from "react";


const Qr = () => {
  const { wallet, isConnected, details } = useWallet()
  const [clickedButton, setClickedButton] = useState('')
  const buttonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(!isConnected)return
        console.log(wallet?.api?.isTokenOwner(`wallet?.activeAccount?.accountId`, `0:spartantest.mintspace2.testnet`))
        if(wallet?.api?.isTokenOwner(`wallet?.activeAccount?.accountId`, `0:spartantest.mintspace2.testnet`)) return (alert('Welcome to spartan blockchain'))
        if(!wallet?.api?.isTokenOwner(`wallet?.activeAccount?.accountId`, `0:spartantest.mintspace2.testnet`)) return (alert('Not invited'))
    };



    return <>
    <nav className="w-full border-b">
                <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                    <div aria-label="Home. logo" role="img">
                       {/* <img className="w-12 md:w-auto" src="" alt=""/> */}
                    </div>
                    <div>
                        <button  className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                        </button>
                        <div id="menu" className="md:block lg:block hidden">
                            <button onClick={
                isConnected
                  ? () => {
                      wallet?.disconnect()
                      window.location.reload()
                    }
                  : () => {
                      wallet?.connect({ requestSignIn: true })
                    }
              }
            >
              {isConnected ? 'Disconnect' : 'Connect'} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6">
                                <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                            <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                {/* <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                    <a href="javascript: void(0)">Feature</a>
                                </li>
                                <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="javascript: void(0)">Marketplace</a>
                                </li>
                                <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="javascript: void(0)">Company</a>
                                </li> */}
                                <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="https://spartanblockchain.org/">Become a Spartan</a>
                                </li>
                                <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="http://localhost:3000/minter">Mint a ticket</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button onClick className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm" onClick={
                isConnected
                  ? () => {
                      wallet?.disconnect()
                      window.location.reload()
                    }
                  : () => {
                      wallet?.connect({ requestSignIn: true })
                    }
              }
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </button>
                </div>
            </nav>
            <div className="bg-gray-100">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    {!isConnected && (
                       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        Connect to wallet
                        </h1>
                            )}
                        {isConnected && (
                       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        Hi, {wallet?.activeAccount?.accountId}
                        </h1>
                            )}
                            {/* See if your invited
                            <span className="text-green-700">,</span>
                            Click Here */}
                    
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg"></p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button name="qr" onClick={buttonHandler} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm ">
                        {!isConnected && (
                        <p className="text-sm py-2 px-3">
                        Connect Wallet
                        </p>
                            )}    
                        {isConnected && (
                        <p className="text-sm py-2 px-3">
                            Click me to enter
                        {/* Click here to enter {wallet?.activeAccount?.accountId} */}
                        </p>
                            )}
                        </button>
                    </div>
                </div>
            </div>
    </>

}


export default Qr
