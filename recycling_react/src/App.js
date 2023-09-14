import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Leaderboard from './pages/Leaderboard'; 
import Login from './pages/Login'; 
import Rewards from './pages/Rewards'; 
import About from './pages/About'; 
import UpdateScore from './pages/UpdateScore';
import Submitted from './pages/Submitted';  
import DormLeaderboard from './pages/DormLeaderboard'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
// Selects the user
const curr = 2;

export let currentUser = 1;

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="line">
      </div>
      <Routes>
        <Route exact path='/' element={<Home currentUser={curr}/>} />
        <Route exact path='/leaderboard' element={<Leaderboard />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/rewards' element={<Rewards currentUser={curr}/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/updatescore' element={<UpdateScore currentUser={curr}/>} />
        <Route exact path='/submitted' element={<Submitted currentUser={curr}/>} />
        <Route exact path='/dormleaderboard' element={<DormLeaderboard />} />
      </Routes>
      <div className="line"></div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
