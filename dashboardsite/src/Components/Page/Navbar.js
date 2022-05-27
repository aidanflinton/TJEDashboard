import { Link, Outlet } from "react-router-dom";
import { useState, useEffect}  from "react";

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Navbar() {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
    <Link to={"/"+event.target.value} />
  };

  return (
    <div>
      <nav>
      <Fab variant="extended">
        <Link to="/">Dashboard</Link>
      </Fab>
      <Fab variant="extended">
        <Link to="/calendar">Calendar</Link>
      </Fab>
      <Fab variant="extended">
        <Link to="/class">Class Page</Link>
      </Fab>
      <Fab variant="extended">
        <Link to="/teachers">Teacher Directory</Link>
      </Fab>
      <Fab variant="extended">
        <Link to="/students">Student Directory</Link>
      </Fab>
      <Fab variant="extended">
        <Link to="/login">Login</Link>
      </Fab>
      </nav>

      
      

    <FormControl>
      <Outlet />
    </FormControl>
      
    </div>
  );
}

export default Navbar;

/*
 <Link to="/">Dashboard</Link> |{" "}
        <Link to="/calendar">Calendar</Link> |{" "}
        <Link to="/class">Class Page</Link> |{" "}
        <Link to="/teachers">Teacher Directory</Link> |{" "}
        <Link to="/students">Student Directory</Link> |{" "}
        <Link to="/login">Login</Link>

<FormLabel id="radio-buttons-group">Thomas Jefferson Elementary School</FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio-buttons-group"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="dashboard" control={<Radio />} label="Dashboard" />
        <FormControlLabel value="calendar" control={<Radio />} label="Calendar" />
        <FormControlLabel value="class" control={<Radio />} label="Class" />
        <FormControlLabel value="teachers" control={<Radio />} label="Teacher Directory" />
        <FormControlLabel value="login" control={<Radio />} label="Login" />
        <FormControlLabel value="students" control={<Radio />} label="Student Directory" />
      </RadioGroup>



<div className="Sidebar">
    <ul className="SideBarList">
    {ClassData.map((val,key)=> {
        return (
            <li 
            key={key} 
            className="row"
            onClick={()=>{window.location.pathname=val.link}}>
            {" "}

        <div id="icon">{val.icon}</div>{" "}
        <div id="title">
            {val.title}

        </div>
        
        
        </li>
        );
    })}
    </ul>
    </div>
    */