const { expect } = require("chai");

describe("Cancel sale", function () {
  let contract, owner, buyer, seller, buyerContract, sellerContract;

  beforeEach(async () => {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    contract = await Poketoken.deploy();
    await contract.deployed();
    const signers = await ethers.getSigners();
    owner = signers[0];
    buyer = signers[1];
    seller = signers[2];
    buyerContract = await contract.connect(buyer);
    sellerContract = await contract.connect(seller);
  });

  it("can remove poketoken from sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    const tokenId = ethers.BigNumber.from(0);
    await sellerContract.cancelSale(tokenId);
    const forSale = await buyerContract.listFromSale();
    expect(forSale.length).to.equal(0);
  });

  it("can't remove others poketoken from sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    const tokenId = ethers.BigNumber.from(0);
    buyerContract.cancelSale(tokenId).catch(async () => {
      const forSale = await buyerContract.listFromSale();
      expect(forSale.length).to.equal(1);
    });
  });

  it("can't remove poketoken from sale twice", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    const tokenId = ethers.BigNumber.from(0);
    await sellerContract.cancelSale(tokenId);
    sellerContract.cancelSale(tokenId).catch(async () => {
      const forSale = await buyerContract.listFromSale();
      expect(forSale.length).to.equal(0);
    });
  });
});
