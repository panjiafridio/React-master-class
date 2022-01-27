import React from "react";
import Button from "./Button";
import "../style/FormInput.css";

class FormInput extends React.Component{
    state = {
        text : ""
    }

    change = e => {
        this.setState({
            text: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.addTask(this.state.text)
        }
        this.setState({
            text : ""
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.submit}>
                    <input type="text"
                    onChange={this.change}
                    value={this.state.text}
                    />
                    <Button text="Add" variant="add" action={this.submit}/>
                </form>
            </>
        )
    }

}

export default FormInput;