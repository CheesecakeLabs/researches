import Button from "@material-ui/core/Button";
import MaterialDialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Dialog = ({
  open,
  onClose,
  title,
  description,
  children,
  cancelLabel,
  onCancel,
  confirmLabel,
  onConfirm,
}) => (
  <MaterialDialog
    open={open}
    onClose={onClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
      {children}
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="primary">
        {cancelLabel}
      </Button>
      <Button onClick={onConfirm} color="primary">
        {confirmLabel}
      </Button>
    </DialogActions>
  </MaterialDialog>
);

export default Dialog;
