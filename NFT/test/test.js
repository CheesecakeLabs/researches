const { expect } = require("chai");

describe("Poketoken", function() {
  it("can create poketoken", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, buyer] = await ethers.getSigners();
    const buyerToken = await poketoken.connect(buyer)
    await buyerToken.createPokemon('temp', { value: ethers.utils.parseEther("0.02")})
    const balance = await buyerToken.balanceOf(buyer.address);
    expect(balance).to.equal(1);
  });

  it("can't create poketoken because of invalid value", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, buyer] = await ethers.getSigners();
    const buyerToken = await poketoken.connect(buyer)
    buyerToken.createPokemon('temp', { value: ethers.utils.parseEther("0.01")}).catch(async () => {
      const balance = await buyerToken.balanceOf(buyer.address);
      expect(balance).to.equal(0);
    })
  });

  it("can add poketoken for sale", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, seller, buyer] = await ethers.getSigners();
    const sellerToken = await poketoken.connect(seller)
    await sellerToken.createPokemon('temp', { value: ethers.utils.parseEther("0.02")})
    await sellerToken.addForSale(10, 0, { value: ethers.utils.parseEther('0.02')})
    const buyerToken = await poketoken.connect(buyer)
    const forSale = await buyerToken.listFromSale()
    const tokenId = ethers.BigNumber.from(0)
    expect(forSale[0]).to.equal(tokenId)
  });


  it("can remove poketoken from sale", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, seller, buyer] = await ethers.getSigners();
    const sellerToken = await poketoken.connect(seller)
    await sellerToken.createPokemon('temp', { value: ethers.utils.parseEther("0.02")})
    await sellerToken.addForSale(10, 0, { value: ethers.utils.parseEther('0.02')})
    const tokenId = ethers.BigNumber.from(0)
    await sellerToken.cancelSale(tokenId)
    const buyerToken = await poketoken.connect(buyer)
    const forSale = await buyerToken.listFromSale()
    expect(forSale.length).to.equal([].length)
  });

  it("can sell poketoken", async function() {
    const Poketoken = await ethers.getContractFactory("Poketoken");
    const poketoken = await Poketoken.deploy();
    await poketoken.deployed();
    const [owner, seller, buyer] = await ethers.getSigners();
    const sellerToken = await poketoken.connect(seller)
    await sellerToken.createPokemon('temp', { value: ethers.utils.parseEther("0.02")})
    await sellerToken.addForSale(10, 0, { value: ethers.utils.parseEther('0.02')})
    const buyerToken = await poketoken.connect(buyer)
    await buyerToken.buyFromSale(0, { value: 10 })
    const buyerBalance = await buyerToken.balanceOf(buyer.address);
    expect(buyerBalance).to.equal(1);
    const sellerBalance = await sellerToken.balanceOf(seller.address);
    expect(sellerBalance).to.equal(0);
  });


});
