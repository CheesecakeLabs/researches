require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ganache");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      chainId: 1337
    },
    ganache: {
      gasLimit: 6000000000,
      defaultBalanceEther: 10,
      url: 'http://127.0.0.1:8545',
    },
  },
  solidity: "0.8.0",
};

