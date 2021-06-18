import React from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { Typography } from "@material-ui/core";

import PokeCard from "@molecules/poke-card";

const PokeList = ({
  title,
  pokemons,
  myPokemons,
  addForSale,
  removeFromSale,
  buyFromSale,
}) => (
  <Box m={2}>
    <Typography variant="h4" component="h2">
      {title}
    </Typography>
    <List>
      {pokemons.map(({ description, name, image, tokenId, forSaleData, isCreating }, i) => (
        <React.Fragment key={tokenId}>
          <PokeCard
            description={description}
            name={name}
            image={image}
            myPokemons={myPokemons}
            tokenId={tokenId}
            addForSale={addForSale}
            removeFromSale={removeFromSale}
            buyFromSale={buyFromSale}
            forSaleData={forSaleData}
            isCreating={isCreating}
          />
          {i !== pokemons.length - 1 ? (
            <Divider variant="inset" component="li" />
          ) : null}
        </React.Fragment>
      ))}
    </List>
  </Box>
);

export default PokeList;
