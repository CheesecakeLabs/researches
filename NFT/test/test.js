const { expect } = require("chai");

describe("Poketoken", function() {
  it("can buy poketoken", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, buyer] = await ethers.getSigners();
    const buyerToken = await poketoken.connect(buyer)
    await buyerToken.buyPokemon('temp', { value: ethers.utils.parseEther("0.02")})
    const balance = await poketoken.balanceOf(buyer.address);
    expect(balance).to.equal(1);
  });

  it("can't buy poketoken because of invalid value", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, buyer] = await ethers.getSigners();
    const buyerToken = await poketoken.connect(buyer)
    buyerToken.buyPokemon('temp', { value: ethers.utils.parseEther("0.01")}).catch(async () => {
      const balance = await poketoken.balanceOf(buyer.address);
      expect(balance).to.equal(0);
    })
  });
});
