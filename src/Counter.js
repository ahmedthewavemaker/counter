import React, { Component, Link, Route } from 'react';

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
       <button className='goBackButton' onClick={e => this.props.history.push('/')}>Home</button>
       
         
    </div>

    )}
}

export default withRouter(Counter);
