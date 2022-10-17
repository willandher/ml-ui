import React from "react";
import { Button } from "@mui/material";

export const ButtonMl = ({value, onClick}) =>{
    return (
      <>
      
      <Button style={{
        backgroundColor: '#3483fa',
        fontSize: '13px',
        color: 'white',
        margin: '23px 100px'
      }} className="bf-ui-button-container" onClick={onClick} >
        {value}
      </Button>

      </>
    )

}