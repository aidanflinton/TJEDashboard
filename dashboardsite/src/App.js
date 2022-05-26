
import './App.css';
import Sidebar from "./Componets/SideBar/SideBar.js"
import Card from "./Componets/ClassPage/Card.js"
import "./Componets/ClassPage/Card.css"

function App() {
  return (
    <div className="App">
    <Sidebar/>
    <main className="Wrapper"> 
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
  </div>
  )
;
    
}

export default App;
