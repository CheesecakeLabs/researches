import "./App.css";
import { ethers } from "ethers";
import Poketoken from "./artifacts/contracts/Poketoken.sol/Poketoken.json";
import axios from "axios";

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  const mintToken = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, Poketoken.abi, signer);
      const transaction = await contract.createPokemon({
        value: ethers.utils.parseEther("0.02"),
      });
      const transactionResult = await transaction.wait();
      const tokenId = ethers.BigNumber.from(
        transactionResult.events[0].topics[3]
      );
      await axios.post("http://localhost:5000/api/create-pokemon-meta", {
        tokenId,
      });
    }
  };

  async function getBalance() {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(address, Poketoken.abi, provider);
    const balance = await contract.balanceOf(account);

    console.log(balance);
  }

  async function listTokens() {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(address, Poketoken.abi, provider);
    const tokens = await contract.tokensOfOwner(account);
    const uris = await Promise.all(
      tokens.map((tokenId) => contract.tokenURI(tokenId))
    );
    console.log(uris);
  }

  return (
    <div className="App">
      <button onClick={listTokens}>List poketoken</button>
      <button onClick={getBalance}>Get balance</button>
      <button onClick={mintToken}>Mint poketoken</button>
    </div>
  );
}

export default App;
