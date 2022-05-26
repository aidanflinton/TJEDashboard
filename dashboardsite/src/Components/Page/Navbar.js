import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/calendar">Calendar</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/class">Class Page</Link> |{" "}
        <Link to="/teachers">Teacher Directory</Link> |{" "}
        <Link to="/students">Student Directory</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;

/*
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