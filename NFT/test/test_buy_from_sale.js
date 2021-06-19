const { expect } = require("chai");

describe("Buy from sale", function () {
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

  it("can buy poketoken from sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    await buyerContract.buyFromSale(0, { value: 10 });
    const buyerBalance = await buyerContract.balanceOf(buyer.address);
    expect(buyerBalance).to.equal(1);
    const sellerBalance = await sellerContract.balanceOf(seller.address);
    expect(sellerBalance).to.equal(0);
  });

  it("can't buy poketoken from sale with invalid value", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    await buyerContract.buyFromSale(0, { value: 9 }).catch(async () => {
      const buyerBalance = await buyerContract.balanceOf(buyer.address);
      expect(buyerBalance).to.equal(0);
      const sellerBalance = await sellerContract.balanceOf(seller.address);
      expect(sellerBalance).to.equal(1);
    });
  });

  it("can't buy poketoken not for sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    buyerContract.buyFromSale(0, { value: 9 }).catch(async () => {
      const buyerBalance = await buyerContract.balanceOf(buyer.address);
      expect(buyerBalance).to.equal(0);
      const sellerBalance = await sellerContract.balanceOf(seller.address);
      expect(sellerBalance).to.equal(1);
    });
  });

  it("can't buy poketoken from sale twice", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    await buyerContract.buyFromSale(0, { value: 10 });
    buyerContract.buyFromSale(0, { value: 10 }).catch(async () => {
      const buyerBalance = await buyerContract.balanceOf(buyer.address);
      expect(buyerBalance).to.equal(1);
      const sellerBalance = await sellerContract.balanceOf(seller.address);
      expect(sellerBalance).to.equal(0);
    });
  });

  it("can't buy poketoken from cancelled sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });

    await sellerContract.cancelSale(0);
    buyerContract.buyFromSale(0, { value: 10 }).catch(async () => {
      const buyerBalance = await buyerContract.balanceOf(buyer.address);
      expect(buyerBalance).to.equal(0);
      const sellerBalance = await sellerContract.balanceOf(seller.address);
      expect(sellerBalance).to.equal(1);
    });
  });
});
