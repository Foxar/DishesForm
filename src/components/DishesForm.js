
import './../styles/DishesForm.css';
import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem } from '@material-ui/core';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class DishesForm extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      selectedDuration: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log(e);

  }

  render(){
    return(
      <Paper className="dishesForm">
        <Typography variant='h4'>Please fill out the following data:</Typography>
        <TextField className="field" variant="filled" name="name" placeholder="Name"/>
        <Typography variant='subtitle1'>Preparation duration</Typography>
        <MuiPickersUtilsProvider  className="field" utils={DateFnsUtils}>
          <TimePicker className="field" value={this.state.selectedDuration} onChange={this.handleChange}/>
        </MuiPickersUtilsProvider>
        <Select>
          <MenuItem value={1}>Pizza</MenuItem>
          <MenuItem value={2}>Soup</MenuItem>
          <MenuItem value={3}>Sandwich</MenuItem>
        </Select>
      </Paper>
    );
  }
}
export default DishesForm;
