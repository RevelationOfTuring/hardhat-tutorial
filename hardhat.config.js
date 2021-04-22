require("@nomiclabs/hardhat-waffle")
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ExchainUrl = "http://18.167.142.95:26659";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

module.exports = {
    solidity: "0.7.3",
    networks: {
        exchain: {
            url: ExchainUrl,
            accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
        }
    }
};