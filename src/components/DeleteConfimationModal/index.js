import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './index.scss'

function DeleteConfirmationModal({openPopup,handleDeleteClose,handleDeleteConfirm,idToBeDeleted}) { 
    const DialogContent = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiDialogContent);
      
      const DialogActions = withStyles((theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(1),
        },
      }))(MuiDialogActions);

    return (
        <Dialog
                open={openPopup}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // style={{maxHeight: 230}}
                className="deletedialog"
            >
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div>Do you want to remove <b>{`${idToBeDeleted && idToBeDeleted.name}`}</b> from the cart ? </div>
                    {/* {`Do you want to remove ${idToBeDeleted && idToBeDeleted.name} from the cart ?`} */}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleDeleteClose} className="button">
                    Cancel
                </Button>
                <Button onClick={handleDeleteConfirm} className="button">
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>
    )
}

export default DeleteConfirmationModal