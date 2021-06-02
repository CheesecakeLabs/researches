const hre = require("hardhat");


async function main() {
  const Token = await hre.ethers.getContractFactory("ERC721PresetMinterPauserAutoId");
  const token = await Token.deploy("Name", "Symbol", "base_url");

  await token.deployed();
  console.log("ERC721PresetMinterPauserAutoId deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
