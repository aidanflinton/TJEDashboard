import * as React from "react";
import LoginPage from "./LoginPage";

function LoginOutput(props) {

if(props.teacherId){
    console.log(props.teacherId);
  return (
    <div className="App">
        You successfully logged in
    </div>
  );
}
    return (
    <div className="App"> 
        Your user name or password was wrong, please try again
        {/* {window.location.reload(false)} */}
    </div>
  );
  
}

export default LoginOutput;