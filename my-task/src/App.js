import  React  from "react";
import logo from './logo.svg';
import './App.css';
import  FormInput  from "./components/FormInput";
import  List  from "./components/List";
import  EditModal  from "./components/EditModal";

class App extends React.Component{
  state = {
    todos : [
        {
            id : 1,
            title : "memancing"
        },
        {
            id : 2,
            title : "Koding"
        },
    ]
}

deleteTask = id => {
  this.setState({
    todos : this.state.todos.filter(item => item.id !== id),
  })
}

addTask = data => {
  const id = this.state.todos.length
  const newData = {
    id : id + 1,
    title : data
  }
  this.setState({
    todos : [...this.state.todos, newData]
  })
}
  render(){
    const { todos } = this.state;
    return ( 
      <div className="App">
        <div className='logo'>
          <img src={logo} />
          <h1>Test List</h1>
        </div>
        <div className='list'>
          {todos.map(item => 
            <List key={item.id} todo={item} del={this.deleteTask}/>
          )}
        </div>
        <div className='form-input'>
          <FormInput addTask={this.addTask}/>
        </div>
        <div className="edit-modal">
          <EditModal />
        </div>
      </div>
    );
  }
}

export default App;
