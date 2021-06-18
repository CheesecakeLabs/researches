import React, { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Header from "@organisms/header";
import PokeList from "@organisms/poke-list";

function Home() {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [myPokemons, setMyPokemons] = useState([]);
  const [pokemonsForSale, setPokemonsForSale] = useState([]);

  const fetchAndSetAccount = useCallback(async () => {
    const [userAccount] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(userAccount);
  }, [setAccount]);

  const fetchAndSetContract = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const { data: Poketoken } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/Poketoken.json`
    );
    setContract(
      new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        Poketoken.abi,
        signer
      )
    );
  }, [setContract]);

  const getPokemonData = useCallback(
    async (tokenId) => {
      const uri = await contract.tokenURI(tokenId);
      const forSaleData = await contract.getForSale(tokenId);
      if (uri === "none") {
        return {
          tokenId,
          forSaleData,
          isCreating: true,
        };
      }
      // temp code to don't exceed pinata free tier limit
      const meta = { name: "temp", image: "temp", description: "temp" };
      //   const meta = await axios.get(uri).then(({ data }) => data);

      return {
        tokenId,
        uri,
        ...meta,
        forSaleData,
      };
    },
    [contract]
  );

  const getMyPokemons = useCallback(async () => {
    const tokens = await contract.tokensOfOwner(account);
    const pokemons = await Promise.all(tokens.map(getPokemonData));
    setMyPokemons(pokemons);
  }, [account, contract, setMyPokemons, getPokemonData]);

  const getPokemonsForSale = useCallback(async () => {
    const tokens = await contract.listFromSale();
    const pokemons = await Promise.all(tokens.map(getPokemonData));
    setPokemonsForSale(pokemons);
  }, [contract, setPokemonsForSale, getPokemonData]);

  const refreshLists = useCallback(() => {
    getMyPokemons();
    getPokemonsForSale();
  }, [getMyPokemons, getPokemonsForSale]);

  useEffect(() => {
    if (contract && account) {
      refreshLists();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, contract]);

  useEffect(() => {
    fetchAndSetAccount();
    fetchAndSetContract();
    window.ethereum.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mintToken = async () => {
    const transaction = await contract.createPokemon({
      value: ethers.utils.parseEther("0.02"),
    });
    const transactionResult = await transaction.wait();
    const tokenId = ethers.BigNumber.from(
      transactionResult.events[0].topics[3]
    );
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}api/create-pokemon-meta`,
      { tokenId }
    );
    refreshLists();
  };

  const addForSale = async (tokenId, value) => {
    const tx = await contract.addForSale(value, tokenId, {
      value: ethers.utils.parseEther("0.02"),
    });
    await tx.wait();
    refreshLists();
  };

  const removeFromSale = async (tokenId) => {
    const tx = await contract.cancelSale(tokenId);
    await tx.wait();
    refreshLists();
  };

  const buyFromSale = async (tokenId, value) => {
    const tx = await contract.buyFromSale(tokenId, { value });
    await tx.wait();
    refreshLists();
  };

  return (
    <div className="Home">
      <Header
        onCreatePoketokenPress={mintToken}
        onRefreshPress={refreshLists}
      />
      <Container>
        <PokeList
          pokemons={myPokemons}
          title="My Pokemons"
          myPokemons={myPokemons}
          addForSale={addForSale}
          removeFromSale={removeFromSale}
          buyFromSale={buyFromSale}
        />
        <Divider light />
        <PokeList
          pokemons={pokemonsForSale}
          title="Pokemons for sale"
          myPokemons={myPokemons}
          removeFromSale={removeFromSale}
          buyFromSale={buyFromSale}
        />
      </Container>
    </div>
  );
}

export default Home;
