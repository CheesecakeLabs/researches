import { useState } from "react";
import { ethers } from "ethers";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  return (
    <>
      <ListItem alignItems="flex-start">
        {!isCreating && <img alt={name} src={image} />}
        <ListItemText
          primary={isCreating ? "Being created" : name}
          secondary={description ?? ""}
          style={{ minWidth: "300px" }}
        />
        {isMyPokemon && !isForSale && (
          <ListItem
            button
            component={Button}
            variant="outlined"
            color="primary"
            onClick={() => setIsModalOpen(true)}
          >
            Add for sale
          </ListItem>
        )}
        {isMyPokemon && isForSale && (
          <ListItem
            button
            component={Button}
            variant="outlined"
            color="primary"
            onClick={() => removeFromSale(tokenId)}
          >
            Remove from sale
          </ListItem>
        )}
        {!isMyPokemon && isForSale && (
          <ListItem
            button
            component={Button}
            variant="outlined"
            color="primary"
            onClick={() => buyFromSale(tokenId, price)}
          >
            Buy
          </ListItem>
        )}
      </ListItem>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Set for sale</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set a value for the product in (ether)
          </DialogContentText>
          <TextField
            autoFocus
            onInput={(event) => setSaleValue(event.target.value)}
            label="Number"
            type="number"
            id="value"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setSaleValue(0);
              setIsModalOpen(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              addForSale(tokenId, ethers.utils.parseEther(saleValue));
              setSaleValue(0);
              setIsModalOpen(false);
            }}
            color="primary"
          >
            Set for sale
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PokeCard;
