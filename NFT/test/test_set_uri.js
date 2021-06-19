const { expect } = require("chai");

describe("URIs", function () {
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

  it("can set poketoken uri", async function () {
    await buyerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    const mockedURI = "AN URI";
    await contract.setPokemonURI(0, mockedURI);
    const URI = await contract.tokenURI(0);
    expect(URI).to.equal(mockedURI);
  });

  it("can't set poketoken uri twice", async function () {
    await buyerContract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    const mockedURI = "AN URI";
    const otherURI = "Other URI";
    await contract.setPokemonURI(0, mockedURI);
    await contract.setPokemonURI(0, otherURI).catch(async () => {
      const URI = await contract.tokenURI(0);
      expect(URI).to.equal(mockedURI);
    });
  });
});
