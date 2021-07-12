const { expect } = require("chai");

describe("Add for sale", function () {
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

  it("can add poketoken for sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    await sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });
    const forSale = await buyerContract.listFromSale();
    const tokenId = ethers.BigNumber.from(0);
    expect(forSale[0]).to.equal(tokenId);
  });

  it("can't add poketoken for sale with invalid value", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    sellerContract
      .addForSale(10, 0, {
        value: ethers.utils.parseEther("0.02"),
      })
      .catch(async () => {
        const forSale = await buyerContract.listFromSale();
        expect(forSale.length).to.equal(0);
      });
  });

  it("can't add poketoken not owned for sale", async function () {
    await buyerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    sellerContract
      .addForSale(10, 0, {
        value: ethers.utils.parseEther("0.02"),
      })
      .catch(async () => {
        const forSale = await buyerContract.listFromSale();
        expect(forSale.length).to.equal(0);
      });
  });

  it("can't add poketoken twice for sale", async function () {
    await sellerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });

    sellerContract.addForSale(10, 0, {
      value: ethers.utils.parseEther("0.02"),
    });

    sellerContract
      .addForSale(10, 0, {
        value: ethers.utils.parseEther("0.02"),
      })
      .catch(async () => {
        const forSale = await sellerContract.listFromSale();
        expect(forSale.length).to.equal(1);
      });
  });
});
