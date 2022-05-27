import * as React from "react";

function LoginOutput(props) {

if(props.teacherId){
    console.log(props.teacherId);
    props.logIn(true);
  return (
    <div>
        You successfully logged in
    </div>
  );
}
    return (
    <div> 
        Your user name or password was wrong, please refresh the page and try again
    </div>
  );
  
}

export default LoginOutput;