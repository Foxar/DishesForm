import React from 'react';
import { Collapse, Typography } from '@material-ui/core';

export function setError(msg,type) {
    this.setState({
        errorType: type,
        errorMessage: msg,
        error: true,
        success: false,
        successMessage: ""
    });
    console.log(msg,type);
}

export function setSuccess(){
    console.log("Setting success");
    this.setState({
        success: true,
        successMessage: "Success!",
        errorType: "",
        errorMessage: "",
        error: false
    });
}

export function CollapsingMessage(props){
    console.log("Collapsing");
    console.log(props);
    let open = props.error || props.success;
    console.log(open);
    return(
    <Collapse in={open}>
        <Typography 
            variant='h5' 
            className={`collapsingMessage 
                        ${props.error?"error":""} 
                        ${props.success?"success":""}`}>
            {props.error?props.errorMessage:""}
            {props.success?props.succesMessage:""}
        </Typography>
    </Collapse>);
}