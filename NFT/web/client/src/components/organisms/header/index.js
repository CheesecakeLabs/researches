import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header = ({ onCreatePoketokenPress, onRefreshPress}) => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={onCreatePoketokenPress}>Create Poketoken</Button>
      <Button color="inherit" onClick={onRefreshPress}>Refresh</Button>
    </Toolbar>
  </AppBar>
);

Header.defaultProps = {
    onCreatePoketokenPress: () => {},
    onRefreshPress: () => {},
}

export default Header;
