import './App.css';
import "./Components/ClassPage/Card.css"
import Page from './Components/Page/MainPage.js';

function App() {
  let log = false;

  return (
    <>
    <div className="App">
      <header>
        TJE Website
      </header>
      <Page loggedIn={log}/>
    </div>
  </>
  )
;
    
}

export default App;
