
import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem, Button } from '@material-ui/core'; 
import { SpicyForm, PizzaForm, SandwichForm } from './AdditionalForms/AdditionalForms';
import { handleFormRequest } from '../services/hadleFormRequest';


class DishesForm extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      time: "00:00:00"
    };
    
    this.handleSpicyChange = this.handleSpicyChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFormRequest = handleFormRequest.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleFormChange(e){
    let formNames=[
      "name","time","spicyness","slices","diameter","pizzaSlices"
    ];
    if(formNames.includes(e.target.name)){
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    console.log(this.state);
  }

  handleTimeChange(e){
    let timeArr = e.target.value.split("");
    let finalTime = `${timeArr[0]}${timeArr[1]}:${timeArr[2]}${timeArr[3]}:${timeArr[4]}${timeArr[5]}`;
    this.setState({
      time: finalTime
    });

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
      pizza: <PizzaForm pizzaSlices={this.state.pizzaSlices} diameter={this.state.diameter} handleChange={this.handleFormChange} />,
      soup: <SpicyForm spicyScale={this.state.spicyScale} handleSpicyChange={this.handleSpicyChange}/>,
      sandwich: <SandwichForm sandwichSlices={this.state.sandwichSlices} handleChange={this.handleFormChange}/>
    }
    
    return(
      <Paper className="dishesForm">
        <form autoComplete="off" onSubmit={this.handleFormRequest}>
        <Typography variant='h4'>Please fill out the following data:</Typography>
        <Typography variant='subtitle1'>Name of the dish</Typography>
        <TextField 
          className="field"
          variant="filled"
          name="name"
          placeholder="Name"
          size="small"
          value={this.state.name}
          onChange={this.handleFormChange}/>
        <Typography variant='subtitle1'>Preparation duration</Typography>
        <TextField 
          className="field"
          variant="filled"
          name="time"
          type="text"
          size="small"
          value={this.state.time}
          onChange={this.handleTimeChange}/>
          <Typography variant='subtitle1'>Type of the dish</Typography>
        <Select className="field" onChange={this.handleSelectChange}>
          <MenuItem value="pizza">Pizza</MenuItem>
          <MenuItem value="soup">Soup</MenuItem>
          <MenuItem value="sandwich">Sandwich</MenuItem>
        </Select>
        {this.state.selectedType != undefined && additionalForms[this.state.selectedType]}
        <Button className="submitButton" variant="contained" type="submit" value="submit">Submit</Button>
        </form>

      </Paper>
    );
  }
}
export default DishesForm;
