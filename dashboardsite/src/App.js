import './App.css';
import "./Components/ClassPage/Card.css"
import Page from './Components/Page/MainPage.js';
import SideBar from './Components/SideBar/SideBar.js';
import { useState }  from "react";

function App() {
  const [log, setLog] = useState(false);

  return (
    <>
    <div className="App">
    <div className='Apper'>
      <SideBar/>
    </div>
      <header>
        TJE Website
      </header>
      <Page loggedIn={log} logIn={setLog}/>
      
    </div>
  </>
  )
;
    
}

export default App;
