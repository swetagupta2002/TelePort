const path=require('path');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC;
console.log("MNEMONIC is",mnemonic);
module.exports = {
  contracts_build_directory: path.join(__dirname, "../client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache GUI
      network_id: "*"
    },
    mumbai: {
      provider: function() {
        return new HDWalletProvider(`${mnemonic}`, "https://polygon-mumbai.g.alchemy.com/v2/wjirmQHAm7a6ClIERn5XF_WTzYaS4rq6");
      },
      network_id: '80001',
      //gas: 20000000,
      //gasPrice:1000000000,        
      confirmations: 1,    
      timeoutBlocks: 200, 
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};