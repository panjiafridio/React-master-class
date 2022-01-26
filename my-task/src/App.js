import { React } from "react";
import logo from './logo.svg';
import './App.css';
import  FormInput  from "./components/FormInput";
import  List  from "./components/List";

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} />
        <h1>Test List</h1>
      </div>
      <div className='list'>
        <List />
      </div>
      <div className='form-input'>
        <FormInput />
      </div>
    </div>
  );
}

export default App;
