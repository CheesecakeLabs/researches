require("dotenv").config();
const express = require("express");
const pinataSDK = require("@pinata/sdk");
const { ethers, Wallet, EtherscanProvider } = require("ethers");
const axios = require("axios");
const cors = require("cors");

const Poketoken = require("./public/Poketoken.json");

const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const port = process.env.PORT || 5000;

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

const getRandomMeta = async () => {
  const minPokemon = 1;
  const maxPokemon = 898;
  const randomPokemonNumber =
    Math.floor(Math.random() * (maxPokemon - minPokemon + 1)) + minPokemon;
  const { data } = await axios.get(`${POKEMON_API}/${randomPokemonNumber}`);
  const image = data.sprites.front_default;
  const name = data.name;
  const description = "An awesome pokemon =)";
  return { image, name, description };
};

const getSigner = () => {
  if (process.env.NETWORK === "local") {
    const provider = new ethers.providers.JsonRpcProvider();
    return provider.getSigner();
  }
  const provider = new ethers.providers.AlchemyProvider(
    process.env.NETWORK,
    process.env.ALCHEMY_KEY
  );
  return new Wallet(process.env.WALLET_PRIVATE_ADDRESS, provider);
};

const getContract = () => {
  const signer = getSigner();
  return new ethers.Contract(process.env.ADDRESS, Poketoken.abi, signer);
};

const contract = getContract();

const setURI = async (tokenId) => {
  const currentURI = await contract.tokenURI(tokenId);

  if (currentURI !== "none") {
    return false;
  }
  const pokemonMeta = await getRandomMeta();
  const { IpfsHash } = await pinata.pinJSONToIPFS(pokemonMeta, {
    pinataMetadata: {
      name: `${ethers.BigNumber.from(tokenId).toNumber()}`,
    },
  });
  await contract.setPokemonURI(
    tokenId,
    `https://gateway.pinata.cloud/ipfs/${IpfsHash}`
  );
  return true;
};

app.post("/api/create-pokemon-meta", async (req, res) => {
  const {
    body: { tokenId },
  } = req;
  const result = await setURI(tokenId);
  const resultMessage = result ? "success" : "fail";
  return res.send(resultMessage);
});

app.post("/api/update-missing-metas", async (req, res) => {
  const totalSupply = await contract
    .totalSupply()
    .then((total) => ethers.BigNumber.from(total).toNumber());

  const updateURIs = new Array(totalSupply)
    .fill()
    .map((_, i) => setURI(i).catch(() => {}));
  return Promise.all(updateURIs).then(() => res.send("success"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
