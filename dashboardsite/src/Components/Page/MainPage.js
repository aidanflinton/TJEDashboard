import logo from '../../logo.svg';
import Navbar from './Navbar.js'
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from '../Login/LoginPage.js';

function Page() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="teachers" element={<TeachDir />} />
          <Route path="students" element={<Stu />} />
          <Route path="login" element={<Login/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="class" element={<Class />} />
          
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Page;



//Testpages         DELETE ONCE THE REAL PAGES ARE DONE
function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
    </main>
  );
}

function Calendar() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Calendar</h2>
    </main>
  );
}
function TeachDir() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>TeachDir</h2>
    </main>
  );
}
function Stu() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>StuDir</h2>
    </main>
  );
}
function Class() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Class</h2>
    </main>
  );
}
function Dashboard() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>dashboard</h2>
    </main>
  );
}
function Error() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>404 not found</h2>
        <p>
            <Link to="/">This link can take you back home though</Link>
        </p>
    </main>
  );
}