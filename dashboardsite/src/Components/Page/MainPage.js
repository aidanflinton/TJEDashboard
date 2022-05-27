import Navbar from './Navbar.js'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from '../Login/LoginPage.js';
import Calendar from '../Calendar/Calendar.js'
import TeacherDirectory from "../Directories/TeacherDirectory";
import StudentDirectroy from "../Directories/StudentDirectroy";
import Card from "../ClassPage/Card.js"


function Page(props) {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="teachers" element={<TeacherDirectory />} />
          <Route path="students" element={<StudentDirectroy />} />
          <Route path="login" element={<Login logIn={props.logIn}/>} />
          <Route path="class" element={<Class loggedIn={props.loggedIn}/>} />
          
          <Route path="*" element={<Error />} />

          <Route path="kindergarten" element={<Kindergarten />} />
          <Route path="1stgrade" element={<Grade1 />} />
          <Route path="2ndgrade" element={<Grade2 />} />
          <Route path="3rdgrade" element={<Grade3 />} />
          <Route path="4thgrade" element={<Grade4 />} />
          <Route path="5thgrade" element={<Grade5 />} />
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
function Class(props) {
  if(props.loggedIn){
  return (
    <main style={{ padding: "1rem 0" }}>
      <Card
    img="https://media.istockphoto.com/photos/female-teacher-pointing-with-finger-at-mathematical-equation-on-in-picture-id1080232656?k=20&m=1080232656&s=612x612&w=0&h=7OszmnpcTXIiIhqUXUL3sOaI-nn9DisJU8z3ceeHL5k="
    title="Jane Doe"
    description="This course is about ....."
    contact= "janedoe@virginia.edu"
    grade="A"
    />
     <Card
    img="https://media.istockphoto.com/photos/back-to-school-picture-id485083346?k=20&m=485083346&s=612x612&w=0&h=U0URwGcXqdIK8IplP5en1w4_HtLadzqQbvEO3I5JLkY="
    title="Jill Doe"
    description="This course is about ....."
    contact= "jilldoe@virginia.edu"
    grade= "B+"
    />
     <Card
    img="https://media.istockphoto.com/photos/businessman-picture-id502912865?k=20&m=502912865&s=612x612&w=0&h=UJ_IQFCRMLuYz9vsA1VQyc99nit0nkPrEPqhAm_obno="
    title="John Doe"
    description="This course is about ....."
    contact= "johndoe@virginia.edu"
    grade="A-"
    />
    </main>
  );
  }
  return(
    <>
      Login to acces this material
    </>
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

function Kindergarten() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>Kindergarten</h2>
    </main>
  );
}
function Grade1() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>1st Grade</h2>
    </main>
  );
}
function Grade2() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>2nd Grade</h2>
    </main>
  );
}
function Grade3() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>3rd Grade</h2>
    </main>
  );
}
function Grade4() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>4th Grade</h2>
    </main>
  );
}
function Grade5() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>5th Grade</h2>
    </main>
  );
}
