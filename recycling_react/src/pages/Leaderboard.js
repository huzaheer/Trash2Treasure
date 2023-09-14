import React, { useState, useRef, useEffect } from 'react';
import Board from '../components/Board';

function Leaderboard({ currentUser }){
    const [showBoard, setshowBoard] = useState(0)
    const infoUrl = `http://localhost:8080/users/${currentUser}/getTop_All`;

    // Looks for the data in the backend
    useEffect(() => {
        fetch(infoUrl)
            .then((response) => response.json())
            .then((data) => {
                setshowBoard(data.name)
            }) 
    }, []);

    if (showBoard !== 0){
        return(
            //     This is the actual page
                <Board LeaderboardData={showBoard}></Board>
            )
    }

}

export default Leaderboard;
