import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [dynamicForm, setForm] = React.useState({}); 

  function handleClickOpen() {
    setOpen(true);
  }

  const handleChange = name => event => {
    setForm({...dynamicForm,[name]: event.target.value})
  };

  const handleSubmit =()=>{
    setOpen(false);
    setForm({});
    props.add(dynamicForm);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} variant="outlined" style={{ margin: '5px' }}>
        {props.title}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
          <ValidatorForm
                //ref="form"
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
        <DialogContent>
            { 
                props.fields.map((field)=>{
                    return <div><TextValidator
                    key={field.id}
                    label={field.label}
                    type={field.type}
                    value={dynamicForm[field.name]}
                    onChange={handleChange(field.name)}
                    name={field.name}
                    validators={field.validators}
                    errorMessages={field.errorMessages}
                    /></div>
                })
            }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
                <Button type="submit" style={{margin:'5px'}} color="primary">Submit</Button>
        </DialogActions>
            </ValidatorForm>
      </Dialog>
    </div>
  );
}
