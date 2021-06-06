
import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem, Button, FormControl, FormHelperText } from '@material-ui/core'; 
import { SpicyForm, PizzaForm, SandwichForm } from './AdditionalForms/AdditionalForms';
import {CollapsingMessage, setError, setSuccess}  from './CollapsingError/CollapsingMessage';
import { handleFormRequest } from '../services/hadleFormRequest';


class DishesForm extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      time: "00:00:00",
    };
    
    this.handleSpicyChange = this.handleSpicyChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFormRequest = handleFormRequest.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.setError = setError.bind(this);
    this.setSuccess = setSuccess.bind(this);
  }

  handleFormChange(e){
    let formNames=[
      "name","time","spicyness","slices_of_bread","diameter","pizzaSlices",
      "timeHour","timeMinute","timeSecond"
    ];
    if(formNames.includes(e.target.name)){
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  handleTimeChange(e){
    e.target.value = e.target.value <0?0:e.target.value;
    if(e.target.name != "timeHour")
      e.target.value = Math.min(60,e.target.value);
    this.handleFormChange(e);

  }

  handleSpicyChange(e){
    let spicy = Math.max(1,Math.min(e.target.value),10);
    this.setState({
      spicyScale: spicy
    });
  }
  handleSelectChange(e){
    this.setState({
      selectedType: e.target.value
    })
  }
  
  render(){
    let additionalForms ={
      pizza: <PizzaForm errorMessage={this.state.errorMessage} errorType={this.state.errorType} pizzaSlices={this.state.pizzaSlices} diameter={this.state.diameter} handleChange={this.handleFormChange} />,
      soup: <SpicyForm errorMessage={this.state.errorMessage} errorType={this.state.errorType} spicyScale={this.state.spicyScale} handleSpicyChange={this.handleSpicyChange}/>,
      sandwich: <SandwichForm errorMessage={this.state.errorMessage} errorType={this.state.errorType} sandwichSlices={this.state.sandwichSlices} handleChange={this.handleFormChange}/>
    }
    return(
      <Paper className="dishesForm">
        {this.state.error?<CollapsingMessage error={this.state.error} errorMessage={"Error submitting the message!"}/>:""}
        {this.state.success?<CollapsingMessage success={this.state.success} succesMessage={this.state.successMessage}/>:""}
        <form autoComplete="off" onSubmit={this.handleFormRequest}>
        <Typography variant='h4'>Please fill out the following data:</Typography>
        <Typography variant='subtitle1'>Name of the dish</Typography>
        <TextField 
          error={this.state.errorType === "name"}
          helperText={this.state.errorType ==="name"?this.state.errorMessage:""}
          className="field"
          variant="filled"
          name="name"
          placeholder="Name"
          size="small"
          value={this.state.name}
          onChange={this.handleFormChange}/>
        <Typography variant='subtitle1'>Preparation duration</Typography>
        <div className="timePick field">
          <TextField 
            className="timeField"
            variant="filled"
            name="timeHour"
            type="number"
            size="small"
            placeholder="Hours"
            value={this.state.timeHour}
            onChange={this.handleTimeChange}/>
          <TextField 
            className="timeField"
            variant="filled"
            name="timeMinute"
            type="number"
            size="small"
            placeholder="Minutes"
            value={this.state.timeMinute}
            onChange={this.handleTimeChange}/>
          <TextField 
            className="timeField" 
            variant="filled"
            name="timeSecond"
            type="number"
            size="small"
            placeholder="Seconds"
            value={this.state.timeSecond}
            onChange={this.handleTimeChange}/>
          </div>
          <Typography variant='subtitle1'>Type of the dish</Typography>
        <FormControl className="field">
        <Select error={this.state.errorType==="type"} onChange={this.handleSelectChange}>
          <MenuItem value="pizza">Pizza</MenuItem>
          <MenuItem value="soup">Soup</MenuItem>
          <MenuItem value="sandwich">Sandwich</MenuItem>
        </Select>
        {this.state.errorType === "type" && <FormHelperText>{this.state.errorMessage}</FormHelperText>}
        </FormControl>
        {this.state.selectedType != undefined && additionalForms[this.state.selectedType]}
        <Button className="submitButton" variant="contained" type="submit" value="submit">Submit</Button>
        </form>

      </Paper>
    );
  }
}
export default DishesForm;
