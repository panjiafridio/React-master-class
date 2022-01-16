import React from "react";
import ListItem from "./ListItem";

class List extends React.Component{
    render(){
        return (
            <div>
              <h1>Component List</h1> 
              <p>{ this.props.name }</p>
              <p>{ this.props.author }</p>
              <ListItem /> 
            </div>
        )
    }
}

export default List;