import React from 'react'
import Profiles from "./Profiles";
import {Link} from 'react-router-dom';
import '../styles/Board.css'

export default function Board({LeaderboardData}){

    console.log(LeaderboardData)

    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboards</h1>
            <div className="duration">
            <Link to="/leaderboard">
                <button className="myButton"> Top Users </button>
            </Link>
            <Link to="/dormleaderboard">
                <button className="myButton"> Dorm Leaderboard </button>
            </Link>
            <div className="newLine"></div>
            <h2>Top Users:</h2>
            </div>

            <Profiles Leaderboard={LeaderboardData}></Profiles>
        
        </div>

    )
}