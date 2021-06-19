require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_URL = "Change this";
const WALLET_PRIVATE_KEY = "Change this";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      chainId: 1337,
    },
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
  solidity: "0.8.0",
};
