import React from 'react';
import { Paper, TextField, Typography, Select, MenuItem, Button } from '@material-ui/core'; 

export function SpicyForm(props){
    console.log("Render spicyform");
    return(
        <div className="additionals">
        <TextField name="spicyness" className="field" variant="filled" value={props.spicyScale} type="number" onChange={props.handleSpicyChange} placeholder="Spicyness scale"/>
      </div>
    );
}

export function SandwichForm(props){
    console.log("Render sandwichform");
    return(
      <div className="additionals">
        <TextField name="sandwichSlices" className="field" variant="filled" value={props.sandwichSlices} type="number" onChange={props.handleChange} placeholder="Number of slices"/>
      </div>
    );
}

export function PizzaForm(props){
    console.log("Render pizzaform");
    return(
    <div className="additionals">
        <TextField name="pizzaSlices" className="field" value={props.pizzaSlices} onChange={props.handleChange} variant="filled" type="number" placeholder="Number of slices"/>
        <TextField name="diameter" className="field" value={props.diameter} onChange={props.handleChange} variant="filled" type="number" step="0.01" placeholder="Diameter"/>
      </div>);
}