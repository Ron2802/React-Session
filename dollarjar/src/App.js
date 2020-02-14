import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path ="/"  component={Home}/>
         <Route path = "/AddUser" component={AddUser}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
