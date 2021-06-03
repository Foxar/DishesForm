
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
      selectedType: null,
      spicyScale: null,
      slices: null
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSpicyChange = this.handleSpicyChange.bind(this);
    this.handleSliceChange = this.handleSliceChange.bind(this);
  }

  handleTimeChange(e){
    console.log(e);
    this.setState({
      selectedDuration: e
    })
  }
  handleSelectChange(e){
    this.setState({
      selectedType: e.target.value
    })
  }
  handleSpicyChange(e){
    if(e.target.value > 10){
      this.setState({
        spicyScale: 10
      })
    } else if (e.target.value < 1){
      this.setState({
        spicyScale: 1
      })
    } else {
      this.setState({
        spicyScale: e.target.value
      })
    }
  }

  handleSliceChange(e){
    this.setState({
      slices: e.target.value
    })
  }

  render(){
    console.log("Selected " + this.state.selectedType);
    let additionalForm;
    if(this.state.selectedType == 1){
      additionalForm = 
      <div className="additionals">
        <TextField className="field" variant="filled" type="number" placeholder="Number of slices"/>
        <TextField className="field" variant="filled" type="number" step="0.01" placeholder="Diameter"/>
      </div>
    } else if (this.state.selectedType == 2){
      additionalForm = 
      <div className="additionals">
        <TextField className="field" variant="filled" value={this.state.spicyScale} type="number" onChange={this.handleSpicyChange} placeholder="Spicyness scale"/>
      </div>
    } else if (this.state.selectedType == 3){
      additionalForm =
      <div className="additionals">
        <TextField className="field" variant="filled" value={this.state.slices} type="number" onChange={this.handleSliceChange} placeholder="Number of slices"/>
      </div>
    }
    


    return(
      <Paper className="dishesForm">
        <Typography variant='h4'>Please fill out the following data:</Typography>
        <TextField className="field" variant="filled" name="name" placeholder="Name"/>
        <Typography variant='subtitle1'>Preparation duration</Typography>
        <TextField className="field" variant="filled" name="name" type="text" onChange={this.handleTimeChange}/>
        <Select onChange={this.handleSelectChange}>
          <MenuItem value={1}>Pizza</MenuItem>
          <MenuItem value={2}>Soup</MenuItem>
          <MenuItem value={3}>Sandwich</MenuItem>
        </Select>
        {additionalForm}

      </Paper>
    );
  }
}
export default DishesForm;
