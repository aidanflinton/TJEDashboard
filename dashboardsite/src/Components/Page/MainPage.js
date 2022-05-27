import Navbar from './Navbar.js'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from '../Login/LoginPage.js';
import Calendar from '../Calendar/Calendar.js'
import TeacherDirectory from "../Directories/TeacherDirectory";
import StudentDirectroy from "../Directories/StudentDirectroy";
import Sidebar from "../SideBar/SideBar.js"
import Card from "../ClassPage/Card.js"
import "./MainPage.css"


function Page() {
  return (
    <div >
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="teachers" element={<TeacherDirectory />} />
          <Route path="students" element={<StudentDirectroy />} />
          <Route path="login" element={<Login/>} />
          <Route path="dashboard" element={<Sidebar />} />
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
    <main className='mainpage'>
      <center>
      <div className='headerr'>
      <h2 className='header'>Thomas Jefferson Elementary School</h2>
      
      <img src="https://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/f/d3/fd3caa8e-16b8-11e4-8968-0017a43b2370/53d6ed929dcac.image.jpg" class="center" className='image'></img>
</div>

</center>

    </main>
  );
}
function Class() {
  return (
    <div className="Wrapper">
      <Card
    img="https://media.istockphoto.com/photos/female-teacher-pointing-with-finger-at-mathematical-equation-on-in-picture-id1080232656?k=20&m=1080232656&s=612x612&w=0&h=7OszmnpcTXIiIhqUXUL3sOaI-nn9DisJU8z3ceeHL5k="
    title="Jane Doe"
    description="Miss Doe teaches elementary algebra, american history , science , and writing."
    contact= "janedoe@virginia.edu"
    grade="A"
    />
     <Card
    img="https://media.istockphoto.com/photos/back-to-school-picture-id485083346?k=20&m=485083346&s=612x612&w=0&h=U0URwGcXqdIK8IplP5en1w4_HtLadzqQbvEO3I5JLkY="
    title="Jill Ann"
    description="Miss Ann teaches geometry, social studies, american literature, and creative writing."
    contact= "jilldoe@virginia.edu"
    grade= "B+"
    />
     <Card
    img="https://media.istockphoto.com/photos/businessman-picture-id502912865?k=20&m=502912865&s=612x612&w=0&h=UJ_IQFCRMLuYz9vsA1VQyc99nit0nkPrEPqhAm_obno="
    title="John Johnson"
    description="Mr Johnson teaches simple math, english, creative writing, and astronomy."
    contact= "johndoe@virginia.edu"
    grade="A-"
    />
    </div>


  );
}
function Dashboard() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Dashboard</h2>
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