import React from "react";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import { toBigNumber, toEther } from "@helpers/web3";
import request from "@interfaces/http";
import usePoketoken from "@hooks/usePoketoken";
import Header from "@organisms/header";
import PokeList from "@organisms/poke-list";

function Home() {
  const { contract, myPokemons, pokemonsForSale, refreshLists } =
    usePoketoken();

  const mintToken = async () => {
    const transaction = await contract.createPokemon({
      value: toEther(process.env.REACT_APP_MINT_TAX),
    });
    const transactionResult = await transaction.wait();
    const tokenId = toBigNumber(transactionResult.events[0].topics[3]);
    await request(
      "post",
      `${process.env.REACT_APP_SERVER_URL}api/create-pokemon-meta`,
      { tokenId }
    );
    refreshLists();
  };

  const waitTransactionAndRefresh = async (transaction) => {
    await transaction.wait();
    refreshLists();
  };

  const addForSale = async (tokenId, value) => {
    const tx = await contract.addForSale(value, tokenId, {
      value: toEther(process.env.REACT_APP_SELL_TAX),
    });
    waitTransactionAndRefresh(tx);
  };

  const removeFromSale = async (tokenId) => {
    const tx = await contract.cancelSale(tokenId);
    waitTransactionAndRefresh(tx);
  };

  const buyFromSale = async (tokenId, value) => {
    const tx = await contract.buyFromSale(tokenId, { value });
    waitTransactionAndRefresh(tx);
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
