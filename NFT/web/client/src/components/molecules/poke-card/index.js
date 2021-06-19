import { useState } from "react";
import { ethers } from "ethers";
import Image from "@atoms/image";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Dialog from "@molecules/dialog";

const ListItemButton = ({ onClick, children }) => (
  <ListItem
    button
    component={Button}
    variant="outlined"
    color="primary"
    onClick={onClick}
  >
    {children}
  </ListItem>
);

const PokeCard = ({
  description,
  image,
  name,
  tokenId,
  forSaleData,
  myPokemons,
  addForSale,
  removeFromSale,
  buyFromSale,
  isCreating,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saleValue, setSaleValue] = useState(0);
  const isMyPokemon = myPokemons.some(
    ({ tokenId: comparedId }) => tokenId.toString() === comparedId.toString()
  );
  const { owner, price } = forSaleData;
  const isForSale = owner !== "0x0000000000000000000000000000000000000000";
  const close = () => {
    setSaleValue(0);
    setIsModalOpen(false);
  };
  return (
    <>
      <ListItem alignItems="flex-start">
        {!isCreating && <Image alt={name} src={image} />}
        <ListItemText
          primary={isCreating ? "Being created" : name}
          secondary={description ?? ""}
          style={{ minWidth: "300px" }}
        />
        {isMyPokemon && !isForSale && (
          <ListItemButton onClick={() => setIsModalOpen(true)}>
            Add for sale
          </ListItemButton>
        )}
        {isMyPokemon && isForSale && (
          <ListItemButton onClick={() => removeFromSale(tokenId)}>
            Remove from sale
          </ListItemButton>
        )}
        {!isMyPokemon && isForSale && (
          <ListItemButton onClick={() => buyFromSale(tokenId, price)}>
            Buy
          </ListItemButton>
        )}
      </ListItem>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Set for sale"
        description="Set a value for the product in (ether)"
        onCancel={close}
        cancelLabel="Cancel"
        onConfirm={() => {
          addForSale(tokenId, ethers.utils.parseEther(saleValue));
          close();
        }}
        confirmLabel="Set for sale"
      >
        <TextField
          autoFocus
          onInput={(event) => setSaleValue(event.target.value)}
          label="Number"
          type="number"
          id="value"
          fullWidth
        />
      </Dialog>
    </>
  );
};

export default PokeCard;
