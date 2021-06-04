
import './../styles/DishesForm.css';
import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem, Button } from '@material-ui/core'; 
import { SpicyForm, PizzaForm, SandwichForm } from './AdditionalForms/AdditionalForms';


class DishesForm extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      name:"",
      time:15,
      diameter: 15,
      sandwichSlices:  4,
      pizzaSlices: 6,
      selectedType: null,
    };
    
    this.handleSpicyChange = this.handleSpicyChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleFormChange(e){
    let formNames=[
      "name","time","spicyness","slices","diameter"
    ];

    if(formNames.includes(e.target.name)){
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    console.log(this.state);
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
  handleSelectChange(e){
    this.setState({
      selectedType: e.target.value
    })
  }
  render(){
    let additionalForms =[
      <PizzaForm diameter={this.state.diameter} handlePizzaSliceChange={this.handleFormChange} handlePizzaDiameterChange={this.handleFormChange}/>,
      <SpicyForm spicyScale={this.state.spicyScale} handleSpicyChange={this.handleSpicyChange}/>,
      <SandwichForm sandwichSlices={this.state.sandwichSlices} hadleSandwichSliceChange={this.handleFormChange}/>
    ];
    
    return(
      <Paper className="dishesForm">
        <Typography variant='h4'>Please fill out the following data:</Typography>
        <TextField className="field" variant="filled" name="name" placeholder="Name" value={this.state.name} onChange={this.handleFormChange}/>
        <Typography variant='subtitle1'>Preparation duration</Typography>
        <TextField className="field" variant="filled" name="time" type="text" value={this.state.time} onChange={this.handleFormChange}/>
        <Select onChange={this.handleSelectChange}>
          <MenuItem value={0}>Pizza</MenuItem>
          <MenuItem value={1}>Soup</MenuItem>
          <MenuItem value={2}>Sandwich</MenuItem>
        </Select>
        {this.state.selectedType && additionalForms[this.state.selectedType]}
        <Button className="submitButton" variant="contained">Submit</Button>

      </Paper>
    );
  }
}
export default DishesForm;
