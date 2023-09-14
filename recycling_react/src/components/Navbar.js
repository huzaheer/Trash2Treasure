import React from 'react'; 
import t2tLogo from '../images/t2t-transparent.svg'; 
import {Link} from 'react-router-dom'; 
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <Link to="/">
            <img src={t2tLogo} />
            </Link>
        </div>
        <div className="rightSide">
            <Link to="/about"> About </Link>
            <Link to="/leaderboard"> Leaderboard </Link>
            <Link to="/rewards"> Rewards </Link>
            <Link to="/login"> Login </Link>
        </div>
    </div>
  );
}

export default Navbar