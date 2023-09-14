import React, { useState, useRef, useEffect } from 'react';
import img1 from '../images/c-icon.png';
import img2 from '../images/sb-icon.png';
import img3 from '../images/h-icon.png';
import img4 from '../images/rc-icon.png'; 
import '../styles/Rewards.css'
import Button from 'react-bootstrap/Button'

function Rewards({ currentUser }) {

  const [showPoints, setShowPoints] = useState(false);
  const [showfirst, setfirst] = useState(false);
  const [showsecond, setsecond] = useState(false);
  const [showthird, setthird] = useState(false);
  const [showfourth, setfourth] = useState(false);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getPoints`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              // console.log("data", data.points)
              setShowPoints(data.points)
          })
  }, [])

  const [showDorm, setShowDorm] = useState(false);
  const info = `http://localhost:8080/users/${currentUser}/getDorm`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(info)
          .then((respose) => respose.json())
          .then((data) => {
              console.log("data", data)
              setShowDorm(data);
          })
  }, [])

  useEffect(() => {
    rendervalues(); // Call the function within useEffect
  }, [showPoints]);

  function rendervalues(){
    let mine = showPoints
    console.log(mine)
    if (mine > 50){
      setfirst(true);
    }
    if (mine > 100) {
      setsecond(true);
      setfirst(true);
    }
    if (mine > 200) {
      setsecond(true);
      setthird(true);
      setfirst(true);
    } 
    if (mine > 1000) {
      setfirst(true);
      setsecond(true);
      setthird(true);
      setfourth(true);
    }
  }

  function Hello(){
    console.log("Hello World");
  }

  // If the user is not in the winning dorm
  if(showDorm.dorm != showDorm.wDorm){
    return(
      <p> Sorry, the rewards page has not been implemented yet.</p>
    )
  }
  // If the user is in the winning dorm
  else{
    return (
      <div>
          <p className="titleText">You currently have {showPoints} points.</p>
          <div className="newLine"></div>
          <div className="header">
            <h1>List of Rewards: </h1>
          </div>
          <div className="img">
            <img src={img1}></img>
          </div>
          <div className="text">
            <p>
              Redeem 50 Points for a 3 Hour Duke Parking Pass
            </p>
          <button className="btn" onClick={Hello} disabled={!showfirst}> Redeem Here! </button>
          </div>
          <div className="img">
            <img src={img2}></img>
          </div>
          <div className="text">
            <p>
              Redeem 100 Points for a $5 Duke Store Gift Card
            </p>
          <button className="btn" onClick={Hello} disabled={!showsecond}> Redeem Here! </button>
          </div>
          <div className="img">
            <img src={img3}></img>
          </div>
          <div className="text">
            <p>
              Redeem 200 Points for a $10 Food Point Bonus
            </p>
          <button className="btn" onClick={Hello} disabled={!showthird}> Redeem Here! </button>
          </div>
          <div className="img">
            <img src={img4}></img>
          </div>
          <div className="text">
            <p>
              Redeem 400 Points for a $25 Food Point Bonus
            </p>
          <button className="btn" onClick={Hello} disabled={!showfourth}> Redeem Here! </button>
          </div>

          <p className="disc"> *All Rewards Are Subject To Change </p>
          </div>
    )
  }
}


export default Rewards