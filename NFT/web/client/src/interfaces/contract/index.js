import { ethers } from "ethers";

import request from "../http";

const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const { data: Poketoken } = await request(
    "get",
    `${process.env.REACT_APP_SERVER_URL}/Poketoken.json`
  );
  return new ethers.Contract(
    process.env.REACT_APP_CONTRACT_ADDRESS,
    Poketoken.abi,
    signer
  );
};

export default getContract;
