import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <Route  exact path='/' component={Home} />
      
        
      <Route path ='/clicker' component={Counter}/> 
    </div>
  );
}

export default App;
