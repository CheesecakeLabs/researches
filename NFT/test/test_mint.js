const { expect } = require("chai");

describe("Minting", function () {
  let contract, buyer, buyerContract;

  beforeEach(async () => {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    contract = await Poketoken.deploy();
    await contract.deployed();
    const signers = await ethers.getSigners();
    buyer = signers[1];
    buyerContract = await contract.connect(buyer);
  });

  it("can create poketoken", async function () {
    await buyerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    const balance = await buyerContract.balanceOf(buyer.address);
    expect(balance).to.equal(1);
    const uri = await buyerContract.tokenURI(0);
    expect(uri).to.equal("none");

});

  it("can't create poketoken because of invalid value", async function () {
    buyerContract
      .createPokemon({ value: ethers.utils.parseEther("0.01") })
      .catch(async () => {
        const balance = await buyerContract.balanceOf(buyer.address);
        expect(balance).to.equal(0);
      });
  });
});
