import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem, Button } from '@material-ui/core'; 

export function SpicyForm(props){
    return(
        <div className="additionals">
        <Typography variant='subtitle1'>Spicyness of the soup:</Typography>
        <TextField name="spicyness" className="field" variant="filled" value={props.spicyScale} type="number" onChange={props.handleSpicyChange} placeholder="Spicyness scale"/>
      </div>
    );
}

export function SandwichForm(props){
    return(
      <div className="additionals">
          <Typography variant='subtitle1'>Bread slices:</Typography>
        <TextField name="sandwichSlices" className="field" variant="filled" value={props.sandwichSlices} type="number" onChange={props.handleChange} placeholder="Number of slices"/>
      </div>
    );
}

export function PizzaForm(props){
    return(
    <div className="additionals">
        <Typography variant='subtitle1'>Number of pizza slices:</Typography>
        <TextField name="pizzaSlices" className="field" value={props.pizzaSlices} onChange={props.handleChange} variant="filled" type="number" placeholder="Number of slices"/>
        <Typography variant='subtitle1'>Diameter of the pizza:</Typography>
        <TextField name="diameter" className="field" value={props.diameter} onChange={props.handleChange} variant="filled" type="number" step="0.01" placeholder="Diameter"/>
    </div>
    );
}