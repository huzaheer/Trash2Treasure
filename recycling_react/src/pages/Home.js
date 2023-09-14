// import React from 'react'
import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import Banner from '../images/final-t2t-home-background.png'; 
import '../styles/Home.css'; 
let n;

function Home({ currentUser }) {
  const [showName, setShowName] = useState(false);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getName`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              n = data.name;
              n = n.substring(0, n.indexOf(' '))
              console.log("data", n.substring(0, n.indexOf(' ')))
              setShowName(data.name)
          })
  }, [])

  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}> 
        <div className="headerContainer">
            <h1> Welcome Back, {n}!</h1>
            <p> Ready to recycle? </p>
            <Link to="/updatescore">
                <button> Log My Recycling </button>
            </Link>
        </div>
    </div>
  )
}

export default Home