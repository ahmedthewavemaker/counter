import React, { Component} from 'react';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router-dom';


class Counter extends Component{
state={
    count: 0
}

handleClick =()=> {
this.setState(({count}) => ({
    count: count + 1
    
}))
console.log('countin')
}


render(){
    return(

    <div>
        <button onClick={this.handleClick}>C L I C K   M E ! </button>
        <p>{this.state.count}</p>
       
       <Link to='/'>Home page</Link>
       
         
    </div>

    )}
}

export default withRouter(Counter);
