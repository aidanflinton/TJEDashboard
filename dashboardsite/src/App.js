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
      <header>
        TJE Website
      </header>
      <Page loggedIn={log} logIn={setLog}/>
      <div className='leftSide'>
        <SideBar/>
      </div>
    </div>
  </>
  )
;
    
}

export default App;
