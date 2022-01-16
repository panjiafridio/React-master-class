import React from "react";
import "../css/button.css";

class Button extends React.Component{

    state = {
        name : "Panji",
        text : ""
    }

    click = () => {
        this.setState({
            name : this.state.text
        })
        this.setState({
            text : ""
        })
    }

    change = (e) => {
        this.setState({
            text : e.target.value
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input className="input" type="text" value={this.state.text} onChange={this.change} placeholder="Ketik Disini"></input>
                <button className="button" onClick={this.click}>Klik Saya</button>
            </div>
        )
    }
}

export default Button;