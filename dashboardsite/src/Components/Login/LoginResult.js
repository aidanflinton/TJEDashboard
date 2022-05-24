import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function LoginResult(props) {
    const firebaseConfig = {
    apiKey: "AIzaSyAx5vLAIlbRobTXZ85pYDooKk1aO_k1p6A",
    authDomain: "tjedashboard.firebaseapp.com",
    projectId: "tjedashboard",
    storageBucket: "tjedashboard.appspot.com",
    messagingSenderId: "665225770453",
    appId: "1:665225770453:web:226cc7ff93a0dea909795c",
    measurementId: "G-HBVQ6HRPRT"
    };

    

  return (
    <div className="App">
      {props.user}
      {props.password}
    </div>
  );
}

export default LoginResult;