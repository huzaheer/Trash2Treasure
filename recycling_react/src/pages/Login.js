import React from 'react';
import {Link} from 'react-router-dom';
import sorry from '../images/sorry-login.jpeg'; 
import '../styles/Login.css'; 

function Login() {
  return (
    <div class="login">
        <h1>Function Unavailable </h1>
        <p className="text"> 
          Unfortunately, due to time restraints and privacy restrictions, we are currently unable to 
          implement a functional Duke NetID Login system. See the <Link to="/about"><b class="link">About</b></Link> tab for more information. 
          Please be on the lookout for future updates.  
        </p>
        <div className="image">
          <img src={sorry}></img>
        </div>
    </div>
  )
}

export default Login