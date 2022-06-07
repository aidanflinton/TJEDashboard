import './App.css';
import "./components/ClassPage/Card.css"
import Page from './components/Page/MainPage.js';
import SideBar from './components/SideBar/SideBar.js';
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
