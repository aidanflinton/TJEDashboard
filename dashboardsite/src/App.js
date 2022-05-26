import './App.css';
import "./Components/ClassPage/Card.css"
import Page from './Components/Page/MainPage.js';
import { useState, useEffect}  from "react";

function App() {
  const [log, setLog] = useState(false);

  return (
    <>
    <div className="App">
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
