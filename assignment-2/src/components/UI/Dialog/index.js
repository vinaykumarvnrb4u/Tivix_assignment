import React,{ useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator,SelectValidator} from 'react-material-ui-form-validator';
import CheckboxValidatorElement from '../CheckboxValidatorElement'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [dynamicForm, setForm] = useState({userId:props.user_id}); 

  // useEffect(() => {
  //   ValidatorForm.addValidationRule('isTruthy', value => value);
  // });

  function handleClickOpen() {
    setOpen(true);
  }

  const handleChange = name => event => {
    if(event.target.value)
    setForm({...dynamicForm,[name]: event.target.value})
    else
    setForm({...dynamicForm,[name]: event.target.checked})
  }

  const handleSubmit =()=>{
   // console.log("Heyyyyyy");
    
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
        Add {props.title}
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
                    return <div> { field.type == "text" ? <TextValidator
                    key={field.id}
                    label={field.label}
                    type={field.type}
                    value={dynamicForm[field.name]}
                    onChange={handleChange(field.name)}
                    name={field.name}
                    validators={field.validators}
                    errorMessages={field.errorMessages}
                    /> :
                    <CheckboxValidatorElement
                      key={field.id}
                      label={field.label}
                      value={dynamicForm[field.name]}
                      onChange={handleChange(field.name)}
                      name={field.name}
                      checked={dynamicForm[field.name]} 
                />}</div>
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
