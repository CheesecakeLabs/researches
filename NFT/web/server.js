require("dotenv").config();
const express = require("express");
const pinataSDK = require("@pinata/sdk");
const { ethers } = require("ethers");
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
const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

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

app.post("/api/create-pokemon-meta", async (req, res) => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, Poketoken.abi, signer);
  const {
    body: { tokenId },
  } = req;
  const currentURI = await contract.tokenURI(tokenId);
  if (currentURI !== "none") {
    return res.send("fail");
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
  return res.send("success");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
