require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

const { PRIVATE_KEY, INFURA_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
