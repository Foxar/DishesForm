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
}

export function setSuccess(){
    this.setState({
        success: true,
        successMessage: "Success!",
        errorType: "",
        errorMessage: "",
        error: false
    });
}

export function CollapsingMessage(props){
    let open = props.error || props.success;
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