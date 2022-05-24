import logo from './logo.svg';
import './App.css';
import Page from './Components/Page/Page.js';


function App() {
  let log = false;

  return (
    <div className="App">
      <header>
        Placeholder
      </header>
      <Page loggedIn={log}/>
    </div>
  );
}

export default App;
