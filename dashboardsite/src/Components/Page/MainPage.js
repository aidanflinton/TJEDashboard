import Navbar from './Navbar.js'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from '../Login/LoginPage.js';
import Calendar from '../Calendar/Calendar.js'
import TeacherDirectory from "../Directories/TeacherDirectory";
import StudentDirectroy from "../Directories/StudentDirectroy";

function Page() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="teachers" element={<TeacherDirectory />} />
          <Route path="students" element={<StudentDirectroy />} />
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
function Class() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Class becuase Im doing calendar rn</h2>
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