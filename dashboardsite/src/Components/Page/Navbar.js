import { Link, Outlet } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="App">
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