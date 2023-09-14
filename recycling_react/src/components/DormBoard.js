import React from 'react'
import Dorm from "./Dorm";
import {Link} from 'react-router-dom';
import '../styles/Board.css'

export default function DormBoard({LeaderboardData}){

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
            <h2>Dorm Leaderboard:</h2>
            </div>

            <Dorm Leaderboard={LeaderboardData}></Dorm>
        
        </div>

    )
}