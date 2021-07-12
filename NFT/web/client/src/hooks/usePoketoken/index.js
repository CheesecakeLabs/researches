import { useCallback, useEffect, useState } from "react";

import getContract from "@interfaces/contract";
import request from "@interfaces/http";

function usePoketoken() {
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
    const newContract = await getContract();
    setContract(newContract);
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
      const meta = await request("get", uri).then(({ data }) => data);
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

  return { contract, refreshLists, myPokemons, pokemonsForSale };
}

export default usePoketoken;
