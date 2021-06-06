import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem, Button } from '@material-ui/core'; 

export function SpicyForm(props){
    return(
        <div className="additionals">
        <Typography variant='subtitle1'>Spicyness of the soup:</Typography>
        <TextField 
          size="small"
          name="spicyness" 
          className="field" 
          variant="filled" 
          value={props.spicyScale} 
          type="number" 
          error={props.errorType === "spiciness_scale"}
          helperText={props.errorType ==="spiciness_scale"?props.errorMessage:""}
          onChange={props.handleSpicyChange} 
          placeholder="Spicyness scale"/>
      </div>
    );
}

export function SandwichForm(props){
    return(
      <div className="additionals">
        <Typography variant='subtitle1'>Bread slices:</Typography>
        <TextField 
          size="small" 
          name="slices_of_bread" 
          className="field" 
          variant="filled" 
          value={props.slices_of_bread} 
          type="number" 
          error={props.errorType === "slices_of_bread"}
          helperText={props.errorType ==="slices_of_bread"?props.errorMessage:""}
          onChange={props.handleChange} 
          placeholder="Number of slices"/>
      </div>
    );
}

export function PizzaForm(props){
    return(
    <div className="additionals">
        <Typography variant='subtitle1'>Number of pizza slices:</Typography>
        <TextField 
          size="small" 
          name="pizzaSlices" 
          className="field" 
          error={props.errorType === "no_of_slices"}
          helperText={props.errorType ==="no_of_slices"?props.errorMessage:""}
          value={props.pizzaSlices} 
          onChange={props.handleChange} 
          variant="filled" 
          type="number" 
          placeholder="Number of slices"/>
        <Typography variant='subtitle1'>Diameter of the pizza:</Typography>
        <TextField 
          size="small" 
          name="diameter" 
          className="field" 
          error={props.errorType === "diameter"}
          helperText={props.errorType ==="diameter"?props.errorMessage:""}
          value={props.diameter} 
          onChange={props.handleChange} 
          variant="filled" 
          type="number" 
          step="0.01" 
          placeholder="Diameter"/>
    </div>
    );
}