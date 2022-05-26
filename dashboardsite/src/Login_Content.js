import "./App.css"
import UsernameField from "./Username_Textfield";
import PasswordField from "./Password_Textfield";
import LoginButton from "./Login_Button";

function LoginContent() {
  return (
    <div className="App">
      <div className="username">
        <div className="usernameText">
          Username:
        </div>
        <div className="usernameField">
          {UsernameField()}
        </div>
      </div>
      <div className="password">
        <div className="passwordText">
          Password:
        </div>
        <div className="passwordField">
          {PasswordField()}
        </div>
      </div>
      <div className="loginButtonWrapper">
          {LoginButton()}
      </div>
    </div>
  );
}

export default LoginContent;