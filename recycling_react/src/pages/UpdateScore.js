import { useState } from "react";
import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Form.css';
import { useNavigate } from 'react-router-dom';


export default function UpdateScore({ currentUser }) {
  const navigate = useNavigate();
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [dorm, setdorm] = useState('');
  const [boxes, setboxes] = useState('');
  const [bottles, setlbottles] = useState();
  const [cans, setcans] = useState();
  const [points, setPoints] = useState();
  const { register, formState: { errors } } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    // Modify this calculation as needed
    // console.log((2*parseInt(cans)) + (2*parseInt(bottles)) + parseInt(boxes))
    setPoints((2*parseInt(cans)) + (2*parseInt(bottles)) + parseInt(boxes));
    var p = {"new_points": (2*parseInt(cans)) + (2*parseInt(bottles)) + parseInt(boxes)}
    console.log(p);
    const response = await fetch(`http://localhost:8080/users/${currentUser}/sumPoints`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p)
    }).then(() => {
      navigate('/submitted')
      })
  }
          
    

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Fill in your points:</h2>
          <span>Let us know how many green gains you've accumulated to compete for a chance at redeeming exclusive Duke prizes!</span>

          <form id='form' className='flex flex-col' onSubmit={onSubmit}>
            <input type="text" {...register("First Name")} placeholder='First Name' required value={fname} onChange={(e) => setfname(e.target.value)}/>
            <input type="text" {...register("Last Name")} placeholder='Last Name' required value={lname} onChange={(e) => setlname(e.target.value)}/>
            <input type="text" {...register("Duke Email")} placeholder='netID@duke.edu' required/>
            <select value={dorm} onChange={(e) => setdorm(e.target.value)}>
                <option selected value="" disabled>Select your Dorm</option>
                <option value="Craven">Craven</option>
                <option value="Crowell">Crowell</option>
                <option value="Edens">Edens</option>
                <option value="Hollows">Hollows</option>
                <option value="Few">Few</option>
                <option value="Keohane">Keohane</option>
                <option value="Wannamaker">Wannamaker</option>
            </select>
            <h3 className='yolo'>Tell us about your contributions</h3>
            <input type="number" {...register("Number of Boxes")} placeholder='Number of Boxes' required value={boxes} onChange={(e) => setboxes(e.target.value)}/>
            <input type="number" {...register("Number of Bottles")} placeholder='Number of Bottles' required value={bottles} onChange={(e) => setlbottles(e.target.value)}/>
            <input type="number" {...register("Number of Cans")} placeholder='Number of Cans' required value={cans} onChange={(e) => setcans(e.target.value)}/>
            <div className="submit-button">
              {/* <Link to="/submitted"> */}
                <button className='btn'>Clock it in!</button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

