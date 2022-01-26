import React from "react";
import Button from "./Button";
import "../style/FormInput.css";

class FormInput extends React.Component{
    render(){
        return(
            <>
                <input type="text"/>
                <Button />
            </>
        )
    }

}

export default FormInput;