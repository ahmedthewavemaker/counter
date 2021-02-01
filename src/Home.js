import React, { Component} from 'react';
import {Link} from 'react-router-dom';


 class Home extends Component {
    render(){
        return(
<div>
    <h2>Welcome to the clicker counter page</h2>
    <Link to='/clicker' >Time to click count</Link>
    

</div>

        )
    }
}
export default Home;