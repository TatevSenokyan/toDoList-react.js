import React, {useState,useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {ContextValue} from './App'


 function   DialogItem(props) {
  
    let item=useContext(ContextValue)
    let [inputValue,setInputValue]=useState(item.value)
    
  

  const handleClose = () => {
    props.onClose(false)
  };

  const handleInputChange=(e)=>{
      setInputValue(e.target.value)
  }

  const handleSave=()=>{
      props.onSave(inputValue,item.id)
  }

  return (
    <div>
     
      <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogContentText>
            change input value
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={inputValue}
            onChange={handleInputChange}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
             Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogItem;