import React, { useState, useRef, useEffect } from 'react';
import { Component } from 'react';
import '../styles/Submitted.css'

function Submitted({ currentUser }) {
    window.scrollTo(0, 0); 
  const [showPoints, setShowPoints] = useState(false);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getPoints`;
  console.log({currentUser});
  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              setShowPoints(data.points)
              console.log(data.points);
          })
  }, [])

  return (
    <div className="submitted"> 
      <h1> Congragulations, you now have { showPoints } points!</h1>
      <p> Thanks for helping make the planet a better place! </p>
    </div>
  )
}

export default Submitted